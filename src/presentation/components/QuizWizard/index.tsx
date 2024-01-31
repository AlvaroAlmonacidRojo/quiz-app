import { QuizResult, Result, ResultWithId } from "@domain/models/Quiz";
import { Box } from "@mui/material";
import { useState } from "react";
import QuizQuestion from "../QuizQuestion";
import QuizSummary from "../QuizSummary";
import { getRandomCategoryQuestions } from "@application/utils";

interface Props {
  questions: Result[];
}

interface UserAnswer {
  questionId: number;
  selectedOption: string;
}

const QuizWizard = ({ questions }: Props) => {
  const [randomQuestions, setRandomQuestions] = useState<ResultWithId[]>(
    getRandomCategoryQuestions(questions)
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | undefined>();

  const handleAnswerSelect = (selectedOption: string) => {
    const newUserAnswers = [
      ...userAnswers,
      { questionId: randomQuestions[currentStep].id, selectedOption },
    ];
    setUserAnswers(newUserAnswers);
    if (currentStep < randomQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const correctAnswers = newUserAnswers.filter(
        (answer) =>
          randomQuestions.find((question) => question.id === answer.questionId)
            ?.correct_answer === answer.selectedOption
      ).length;

      const totalQuestions = randomQuestions.length;
      const score = (correctAnswers / totalQuestions) * 100;
      const wrong = totalQuestions - correctAnswers;

      const quizResult: QuizResult = {
        correct: correctAnswers,
        wrong,
        questionsAnswered: totalQuestions,
        finalScore: score,
      };

      setQuizResult(quizResult);
      setCurrentStep(currentStep + 1);
    }
  };

  const resetQuiz = () => {
    setRandomQuestions(getRandomCategoryQuestions(questions));
    setCurrentStep(0);
    setUserAnswers([]);
    setQuizResult(undefined);
  }
    
  return (
    <Box role="quiz-wizard">
      {currentStep < randomQuestions.length ? (
        <QuizQuestion
          result={randomQuestions[currentStep]}
          onNext={handleAnswerSelect}
        />
      ) : (
        quizResult && <QuizSummary {...quizResult } onReset={resetQuiz} />
      )}
    </Box>
  );
};

export default QuizWizard;
