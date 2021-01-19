import faker from 'faker';
import { array } from 'yup';
import { GetFakeData } from '../types';

type ArraySchema = ReturnType<typeof array>;

export function handleArraySchema(
  schema: ArraySchema,
  node: string,
  getFakeData: GetFakeData
): unknown[] {
  const subSubSchema = schema.innerType;

  if (subSubSchema) {
    return new Array(faker.random.number({ min: 0, max: 5 }))
      .fill(null)
      .map(() => getFakeData(subSubSchema));
  } else {
    return [];
  }
}
