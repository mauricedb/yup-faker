import faker from 'faker';
import { BooleanSchema } from 'yup';

export function handleBooleanSchema(schema: BooleanSchema): boolean {
  return faker.random.boolean();
}
