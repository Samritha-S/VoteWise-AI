import React from "react";
import { render, screen, act } from "@testing-library/react";
import { AppProvider, useAppContext } from "./AppContext";

// A simple test component to consume the context
const TestComponent = () => {
  const { userData, updateUserData, resetUser } = useAppContext();

  return (
    <div>
      <span data-testid="language">{userData.language}</span>
      <span data-testid="age">{userData.age ?? "null"}</span>
      <span data-testid="onboarding">{userData.onboardingComplete.toString()}</span>
      
      <button 
        data-testid="update-btn"
        onClick={() => updateUserData({ language: "Hindi", age: 25, onboardingComplete: true })}
      >
        Update
      </button>
      
      <button 
        data-testid="reset-btn"
        onClick={resetUser}
      >
        Reset
      </button>
    </div>
  );
};

describe("AppContext Functionality Validation", () => {
  beforeEach(() => {
    // Clear any storage before each test
    localStorage.clear();
    sessionStorage.clear();
  });

  it("should initialize with default English language and incomplete onboarding", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    
    expect(screen.getByTestId("language").textContent).toBe("English");
    expect(screen.getByTestId("age").textContent).toBe("null");
    expect(screen.getByTestId("onboarding").textContent).toBe("false");
  });

  it("should securely update user context data when called", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    
    act(() => {
      screen.getByTestId("update-btn").click();
    });
    
    expect(screen.getByTestId("language").textContent).toBe("Hindi");
    expect(screen.getByTestId("age").textContent).toBe("25");
    expect(screen.getByTestId("onboarding").textContent).toBe("true");
  });

  it("should flush state and revert to defaults upon reset", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    
    // First update
    act(() => {
      screen.getByTestId("update-btn").click();
    });
    
    // Then reset
    act(() => {
      screen.getByTestId("reset-btn").click();
    });
    
    expect(screen.getByTestId("language").textContent).toBe("English");
    expect(screen.getByTestId("onboarding").textContent).toBe("false");
  });
});
