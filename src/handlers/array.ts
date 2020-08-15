import faker from 'faker';
import { NotRequiredArraySchema, Schema } from 'yup';

export function handleArraySchema<T>(
  schema: NotRequiredArraySchema<T>,
  node: string,
  getFakeData: (schema: Schema<unknown>, node?: string) => any
): unknown[] {
  const subSubSchema = schema.innerType;

  return new Array(faker.random.number({ min: 0, max: 5 }))
    .fill(null)
    .map(() => getFakeData(subSubSchema));
}
