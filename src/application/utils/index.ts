import { Result, ResultWithId } from "@domain/models/Quiz";

export const getRandomCategoryQuestions = (
  results: Result[]
): ResultWithId[] => {
  const categories = Array.from(
    new Set(results.map((result) => result.category))
  );

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const categoryQuestions = results
    .filter((result) => result.category === randomCategory)
    .map((result, index) => ({ ...result, id: index }));

  return categoryQuestions;
};
