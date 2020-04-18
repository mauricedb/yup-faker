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

  return faker.random.words();
}
