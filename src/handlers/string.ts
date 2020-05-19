import faker from 'faker';
import { StringSchema } from 'yup';

function isEmail(schema: StringSchema): boolean {
  return !!schema.describe().tests.find(test => test.name === 'email');
}

function isUrl(schema: StringSchema): boolean {
  return !!schema.describe().tests.find(test => test.name === 'url');
}

export function handleStringSchema(
  schema: StringSchema,
  node?: string
): string {
  const minTest = schema.describe().tests.find(t => t.name === 'min');
  const min = minTest?.params.min;

  const maxTest = schema.describe().tests.find(t => t.name === 'max');
  const max = maxTest?.params.max;

  if (isEmail(schema)) {
    return faker.internet.email();
  }

  if (isUrl(schema)) {
    return faker.internet.url();
  }

  let result = faker.random.words();

  switch (node) {
    case 'firstName':
      result = faker.name.firstName();
      break;
    case 'lastName':
      result = faker.name.lastName();
      break;
  }

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

  return schema.cast(result);
}
