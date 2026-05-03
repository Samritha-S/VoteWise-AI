import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CandidatesPage from "./page";
import { AppProvider } from "@/context/AppContext";

// Mock the global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: "1", name: "Candidate A", party: "Party X", state: "State Y", constituency: "Const Z", photo: "", totalAssets: "1Cr", confidence: "High", criminalCases: 0 },
      { id: "2", name: "Candidate B", party: "Party Y", state: "State Y", constituency: "Const W", photo: "", totalAssets: "2Cr", confidence: "Low", criminalCases: 1 }
    ]),
  })
) as jest.Mock;

describe("CandidatesPage", () => {
  it("renders the candidates page and searches", async () => {
    render(
      <AppProvider>
        <CandidatesPage />
      </AppProvider>
    );

    // Check if the title is rendered
    expect(screen.getByText(/Transparency Hub/i)).toBeInTheDocument();

    // Type in search box
    const searchInput = screen.getByPlaceholderText(/Search by name/i);
    fireEvent.change(searchInput, { target: { value: "Candidate A" } });

    // Wait for the filtered results
    await waitFor(() => {
      expect(screen.getByText("Candidate A")).toBeInTheDocument();
    });

    expect(screen.queryByText("Candidate B")).not.toBeInTheDocument();
  });
});
