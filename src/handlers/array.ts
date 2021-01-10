import faker from 'faker';
import { array } from 'yup';

type ArraySchema = ReturnType<typeof array>;

export function handleArraySchema(
  schema: ArraySchema,
  node: string,
  getFakeData: (schema: ArraySchema['innerType'], node?: string) => any
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
