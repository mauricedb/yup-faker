import faker from 'faker';
import { StringSchema } from 'yup';

import { isYupSchema } from '../type-guards';

function isEmail(schema: StringSchema): boolean {
  return !!schema.describe().tests.find(test => test.name === 'email');
}

function isUrl(schema: StringSchema): boolean {
  return !!schema.describe().tests.find(test => test.name === 'url');
}

function isUpperCase(schema: StringSchema): boolean {
  if (isYupSchema(schema)) {
    const test = schema.tests.find(test => test.OPTIONS.name === 'string_case');
    if (test) {
      return test.OPTIONS.test
        .toString()
        .includes('value === value.toUpperCase();');
    }
  }

  return false;
}

function isLowerCase(schema: StringSchema): boolean {
  if (isYupSchema(schema)) {
    const test = schema.tests.find(test => test.OPTIONS.name === 'string_case');
    if (test) {
      return test.OPTIONS.test
        .toString()
        .includes('value === value.toLowerCase();');
    }
  }

  return false;
}

export function handleStringSchema(schema: StringSchema): string {
  const minTest = schema.describe().tests.find(t => t.name == 'min');
  const min = minTest?.params.min;

  const maxTest = schema.describe().tests.find(t => t.name == 'max');
  const max = maxTest?.params.max;

  if (isEmail(schema)) {
    return faker.internet.email();
  }

  if (isUrl(schema)) {
    return faker.internet.url();
  }

  if (isUpperCase(schema)) {
    return faker.random.words().toUpperCase();
  }

  if (isLowerCase(schema)) {
    return faker.random.words().toLowerCase();
  }

  let result = faker.random.words();

  if (typeof min === 'number') {
    while (result.length < min) {
      result = `${result} ${faker.random.word()}`;
    }
  }

  if (typeof max === 'number') {
    if (result.length > max) {
      result = result.slice(0, max);
    }
  }

  return result;
}
