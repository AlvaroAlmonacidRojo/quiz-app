export interface Quiz {
  response_code: number;
  results: Result[];
}

export type ResultType = "multiple" | "boolean" | "text";

export interface Result {
  category: string;
  type: ResultType;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
}

export interface ResultWithId extends Result {
  id: number;
}

export interface QuizResult {
  correct: number;
  wrong: number;
  questionsAnswered: number;
  finalScore: number;
}
