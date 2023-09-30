import assert from 'assert';
import { NumbersValidator } from '../../app/numbers_validator.js';

describe('NumbersValidator', () => {
  const validator = new NumbersValidator();
  describe('isNumberEven', () => {
    it('should return true for even numbers', () => {
      assert.strictEqual(validator.isNumberEven(2), true);
    });
    it('should return false for odd numbers', () => {
      assert.strictEqual(validator.isNumberEven(3), false);
    });
    it('should throw an error for non-number inputs', () => {
      assert.throws(() => validator.isNumberEven('not a number'), Error);
    });
  });
  describe('getEvenNumbersFromArray', () => {
    it('should return an array of even numbers', () => {
      const inputArray = [1, 2, 3, 4, 5];
      const result = validator.getEvenNumbersFromArray(inputArray);
      assert.deepStrictEqual(result, [2, 4]);
    });
    it('should throw an error for non-number elements in the array', () => {
      const inputArray = [1, 2, 'three', 4, 5];
      assert.throws(() => validator.getEvenNumbersFromArray(inputArray), Error);
    });
    it('should throw an error for non-array inputs', () => {
      assert.throws(() => validator.getEvenNumbersFromArray('not an array'), Error);
    });
  });

  describe('isAllNumbers', () => {
    it('should return true for an array of numbers', () => {
      const inputArray = [1, 2, 3, 4, 5];
      const result = validator.isAllNumbers(inputArray);
      assert.strictEqual(result, true);
    });

    it('should return true for an empty array', () => {
      const inputArray = [];
      const result = validator.isAllNumbers(inputArray);
      assert.strictEqual(result, true);
    });

    it('should throw an error for a non-array input', () => {
      const inputArray = 'not an array';
      assert.throws(() => validator.isAllNumbers(inputArray), { name: 'Error' });
    });

    it('should throw an error for an object input', () => {
      const inputArray = { key: 'value' };
      assert.throws(() => validator.isAllNumbers(inputArray), { name: 'Error' });
    });
  });
  describe('isInteger', () => {
    it('should return true for a valid integer', () => {
      const integer = 42;
      const result = validator.isInteger(integer);
      assert.strictEqual(result, true);
    });

    it('should return true for zero', () => {
      const zero = 0;
      const result = validator.isInteger(zero);
      assert.strictEqual(result, true);
    });

    it('should return false for a non-integer number', () => {
      const nonInteger = 3.14;
      const result = validator.isInteger(nonInteger);
      assert.strictEqual(result, false);
    });

    it('should throw an error for a non-number input', () => {
      const nonNumber = 'not a number';
      assert.throws(() => validator.isInteger(nonNumber), Error);
    });

    it('should throw an error for an object input', () => {
      const obj = { key: 'value' };
      assert.throws(() => validator.isInteger(obj), Error);
    });
  });
  // Add more test cases for other methods
});
