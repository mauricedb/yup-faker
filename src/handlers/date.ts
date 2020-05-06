import faker from 'faker';
import { DateSchema } from 'yup';

export function handleDateSchema(schema: DateSchema, node?: string): Date {
  const minTest = schema.describe().tests.find(t => t.name == 'min');
  const min = minTest?.params.min ?? new Date(1000, 0, 1);

  const maxTest = schema.describe().tests.find(t => t.name == 'max');
  const max = maxTest?.params.max ?? new Date(3000, 0, 1);

  return faker.date.between(min, max);
}
