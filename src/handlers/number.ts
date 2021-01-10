import faker from 'faker';
import { NumberSchema } from 'yup';

export function handleNumberSchema(
  schema: NumberSchema,
  node?: string
): number {
  const minTest = schema.describe().tests.find(t => t.name === 'min');
  const min = (minTest?.params?.min ?? minTest?.params?.more) as
    | number
    | undefined;

  const maxTest = schema.describe().tests.find(t => t.name === 'max');
  const max = (maxTest?.params?.max ?? maxTest?.params?.less) as
    | number
    | undefined;

  return faker.random.number({ min, max });
}
