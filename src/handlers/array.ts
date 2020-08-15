import faker from 'faker';
import { NotRequiredArraySchema } from 'yup';

import { getFakeData } from '../fake-data';

export function handleArraySchema<T>(
  schema: NotRequiredArraySchema<T>,
  node?: string
): unknown[] {
  const subSubSchema = schema.innerType;

  return new Array(faker.random.number({ min: 0, max: 5 }))
    .fill(null)
    .map(() => getFakeData(subSubSchema));
}
