import faker from 'faker';
import * as yup from 'yup';
import { handleStringSchema } from './string';

describe('Create random strings for', () => {
  beforeEach(() => faker.seed(1));

  test('a standard string', () => {
    const result = handleStringSchema(yup.string());

    expect(result).toMatchInlineSnapshot(`"Producer Solutions"`);
  });

  test('an uppercase string', () => {
    const result = handleStringSchema(yup.string().uppercase());

    expect(result).toMatchInlineSnapshot(`"PRODUCER SOLUTIONS"`);
  });

  test('an lowercase string', () => {
    const result = handleStringSchema(yup.string().lowercase());

    expect(result).toMatchInlineSnapshot(`"producer solutions"`);
  });

  test('an email', () => {
    const result = handleStringSchema(yup.string().email());

    expect(result).toMatchInlineSnapshot(`"Zion.Reichel12@yahoo.com"`);
  });

  test('an url', () => {
    const result = handleStringSchema(yup.string().url());

    expect(result).toMatchInlineSnapshot(`"http://zion.net"`);
  });
});
