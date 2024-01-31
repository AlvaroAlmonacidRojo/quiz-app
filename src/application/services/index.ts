import { mockQuiz } from "@application/__mocks__/mockQuiz";
import { QuizRepository } from "@domain/repositories/QuizRepository";

export const quizRepository: QuizRepository = {
  get: async () => {
    // Timeout to mock API response
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return Promise.resolve(mockQuiz);
  },
};
