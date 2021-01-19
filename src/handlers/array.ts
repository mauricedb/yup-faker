import faker from 'faker';
import { AnySchema, array, lazy } from 'yup';

type LazySchema = ReturnType<typeof lazy>;
type ArraySchema = ReturnType<typeof array>;

export function handleArraySchema(
  schema: ArraySchema,
  node: string,
  getFakeData: (schema: AnySchema<unknown> | LazySchema, node?: string) => any
  // getFakeData: (schema: ArraySchema['innerType'], node?: string) => any
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
