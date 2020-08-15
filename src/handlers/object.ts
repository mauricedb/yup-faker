import { reach, ObjectSchema, Schema } from 'yup';

export function handleObjectSchema<T extends object | null | undefined>(
  schema: ObjectSchema<T>,
  node: string,
  getFakeData: (schema: Schema<unknown>, node?: string) => any
): T {
  return Object.keys(schema.describe().fields)
    .map(node => {
      const nodeSchema = reach(schema, node);
      const value = getFakeData(nodeSchema, node);
      return { [node]: value };
    })
    .reduce((previous, current) => ({ ...previous, ...current }), {}) as T;
}
