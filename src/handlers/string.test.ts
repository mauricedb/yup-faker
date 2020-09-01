import faker from 'faker';
import * as yup from 'yup';

import { handleStringSchema } from './string';

describe('Create random strings for', () => {
  beforeEach(() => faker.seed(1));

  test('a standard string', () => {
    const schema = yup.string();
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"Producer Music"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an uppercase string', () => {
    const schema = yup.string().uppercase();
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"PRODUCER MUSIC"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an lowercase string', () => {
    const schema = yup.string().lowercase();
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"producer music"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an email', () => {
    const schema = yup.string().email();
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"Zion.Reichel12@yahoo.com"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('an url', () => {
    const schema = yup.string().url();
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"http://zion.net"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('a string with a minimal length', () => {
    const schema = yup.string().min(20);
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"Producer Music Liaison"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('a string with a maximum length', () => {
    const schema = yup.string().max(10);
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"Producer M"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A string with a min/max length range', () => {
    const schema = yup
      .string()
      .min(20)
      .max(25);
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"Producer Music Liaison"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });

  test('A string with a min/max length range of one', () => {
    const schema = yup
      .string()
      .min(20)
      .max(20);
    const result = handleStringSchema(schema);

    expect(typeof result).toBe('string');
    expect(result).toMatchInlineSnapshot(`"Producer Music Liais"`);
    expect(() => schema.validateSync(result)).not.toThrow();
  });
});
