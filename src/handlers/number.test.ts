import faker from 'faker';
import * as yup from 'yup';

import { handleNumberSchema } from './number';

describe('Create random number value for', () => {
  beforeEach(() => faker.seed(1));

  test('any number', () => {
    const schema = yup.number();
    const result = handleNumberSchema(schema);

    expect(result).toMatchInlineSnapshot(`41702`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('to be a number type', () => {
    const schema = yup.number();
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
  });

  test('A number with a minimum', () => {
    const schema = yup.number().min(50_000);
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
    expect(result).toMatchInlineSnapshot(`70851`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A number with a maximum', () => {
    const schema = yup.number().max(10_000);
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
    expect(result).toMatchInlineSnapshot(`4170`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A number in a range', () => {
    const schema = yup
      .number()
      .min(100)
      .max(200);
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
    expect(result).toMatchInlineSnapshot(`142`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A number in a min/max range of one', () => {
    const schema = yup
      .number()
      .min(100)
      .max(100);
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
    expect(result).toMatchInlineSnapshot(`100`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A number with a moreThan', () => {
    const schema = yup.number().moreThan(50_000);
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
    expect(result).toMatchInlineSnapshot(`70851`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A number with a lessThan', () => {
    const schema = yup.number().lessThan(10_000);
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
    expect(result).toMatchInlineSnapshot(`4170`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A number in a moreThan/lessThan range of one', () => {
    const schema = yup
      .number()
      .moreThan(99)
      .lessThan(101);
    const result = handleNumberSchema(schema);

    expect(typeof result).toBe('number');
    expect(result).toMatchInlineSnapshot(`100`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });
});
