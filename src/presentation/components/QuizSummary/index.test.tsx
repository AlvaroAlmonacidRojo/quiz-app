import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // Importa jest-dom para obtener toBeInTheDocument
import QuizSummary from ".";

describe("QuizSummary", () => {
  it("should render summary and restart button", () => {
    const props = {
      correct: 5,
      wrong: 2,
      questionsAnswered: 7,
      finalScore: 71.42,
      onReset: jest.fn(),
    };

    const { getByText } = render(<QuizSummary {...props} />);

    expect(getByText("Summary")).toBeDefined();
    expect(getByText("Correct:")).toBeDefined();
    expect(getByText("Wrong:")).toBeDefined();
    expect(getByText("Questions answered:")).toBeDefined();
    expect(getByText("Final Score:")).toBeDefined();

    const restartButton = getByText("Restart Quiz");
    expect(restartButton).toBeInTheDocument();

    fireEvent.click(restartButton);
    expect(props.onReset).toHaveBeenCalled();
  });
});
