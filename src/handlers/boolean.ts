import faker from 'faker';
import { BooleanSchema } from 'yup';

export function handleBooleanSchema(
  schema: BooleanSchema,
  node?: string
): boolean {
  return faker.random.boolean();
}
