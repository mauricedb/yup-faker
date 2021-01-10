import faker from 'faker';
import { mixed } from 'yup';

import { isYupSchema } from '../type-guards';

type MixedSchema = ReturnType<typeof mixed>;

export function handleMixedSchema<T>(schema: MixedSchema, node?: string): T {
  if (isYupSchema(schema)) {
    return faker.random.arrayElement(Array.from(schema._whitelist.list)) as T;
  }

  return schema.default(undefined) as any;
}
