import { Result, ResultWithId } from '@domain/models/Quiz';
import { getRandomCategoryQuestions } from '..';

describe('getRandomCategoryQuestions', () => {
  it('should return questions from a random category with IDs', () => {
    const results: Result[] = [
      { category: 'Category 1', question: 'Question 1', difficulty: 'easy', correct_answer: 'True', type: 'boolean', incorrect_answers: ['false'] },
      { category: 'Category 2', question: 'Question 2', difficulty: 'easy',correct_answer: 'True', type: 'boolean', incorrect_answers: ['false'] },
      { category: 'Category 1', question: 'Question 3', difficulty: 'easy', correct_answer: 'True', type: 'boolean', incorrect_answers: ['false'] },
    ];

    const categoryQuestions: ResultWithId[] = getRandomCategoryQuestions(results);

    expect(Array.isArray(categoryQuestions)).toBe(true);

    const categories = new Set(categoryQuestions.map((q) => q.category));
    expect(categories.size).toBe(1);

    categoryQuestions.forEach((q) => {
      expect(typeof q.id).toBe('number');
      expect(q.id).toBeGreaterThanOrEqual(0);
      expect(q.id).toBeLessThan(results.length);
    });
  });
});
