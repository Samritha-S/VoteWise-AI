import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./Navigation";
import { AppProvider } from "@/context/AppContext";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock AppContext
jest.mock("../context/AppContext", () => ({
  useAppContext: () => ({
    userData: { isAuthenticated: true, language: "English", avatar: "🐅" },
    isLoaded: true,
    resetUser: jest.fn(),
  }),
  AppProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("Navigation Component", () => {
  test("renders brand name", () => {
    render(<Navigation />);
    expect(screen.getByText(/VoteWise/)).toBeInTheDocument();
  });

  test("toggles mobile menu when button is clicked", () => {
    render(<Navigation />);
    
    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);
    
    expect(screen.getByText(/Assistant/i)).toBeInTheDocument();
  });

  test("renders Powered by Google Cloud branding", () => {
    render(<Navigation />);
    expect(screen.getByText(/Powered by Google Cloud/i)).toBeInTheDocument();
  });
});
