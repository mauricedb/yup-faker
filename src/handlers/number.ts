import faker from 'faker';
import { NumberSchema } from 'yup';

export function handleNumberSchema(schema: NumberSchema): number {
  return faker.random.number();
}
