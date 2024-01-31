import { Quiz } from "@domain/models/Quiz";

export interface QuizRepository {
  get: () => Promise<Quiz>;
}
