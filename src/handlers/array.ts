import faker from 'faker';
import { ArraySchema } from 'yup';

import { getFakeData } from '../fake-data';

export function handleArraySchema<T>(schema: ArraySchema<T>): unknown[] {
  const subSubSchema = schema.innerType;

  return new Array(faker.random.number({ min: 0, max: 5 }))
    .fill(null)
    .map(() => getFakeData(subSubSchema));
}
