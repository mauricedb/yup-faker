import faker from 'faker';

import { YupArraySchema } from '../types';
import { getFakeData } from '../fake-data';

export function handleArraySchema(schema: YupArraySchema): unknown[] {
  const subSubSchema = schema._subType;

  return new Array(faker.random.number({ min: 0, max: 5 }))
    .fill(null)
    .map(() => getFakeData(subSubSchema));
}
