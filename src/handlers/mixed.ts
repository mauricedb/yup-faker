import faker from 'faker';
import { MixedSchema } from 'yup';

import { isYupSchema } from '../type-guards';

export function handleMixedSchema<T>(schema: MixedSchema<T>, node?: string): T {
  if (isYupSchema(schema)) {
    return faker.random.arrayElement(Array.from(schema._whitelist.list)) as T;
  }

  return schema.default();
}
