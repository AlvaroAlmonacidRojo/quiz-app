import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuizProvider from ".";
import { mockQuiz } from "@application/__mocks__/mockQuiz";

describe("QuizProvider", () => {
  beforeEach(() => {
    jest.mock("@application/services", () => ({
      quizRepository: {
        get: jest.fn().mockResolvedValue(mockQuiz),
      },
    }));
  });

  it("should render QuizWizard when data is loaded", async () => {
    render(<QuizProvider />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
        expect(screen.queryByRole("quiz-wizard")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
