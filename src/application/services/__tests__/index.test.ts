import { mockQuiz } from "@application/__mocks__/mockQuiz";
import { quizRepository } from "..";

describe("quizRepository", () => {
  it("should fetch quiz data correctly", async () => {
    const fetchPromise = quizRepository.get();
    expect(fetchPromise).toBeInstanceOf(Promise);

    const result = await fetchPromise;
    expect(result).toEqual(mockQuiz);
  });
});
