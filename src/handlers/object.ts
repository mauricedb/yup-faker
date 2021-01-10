import { reach, object } from 'yup';

type ObjectSchema = ReturnType<typeof object>;

export function handleObjectSchema<T extends object | null | undefined>(
  schema: ObjectSchema,
  node: string,
  getFakeData: (schema: ObjectSchema, node?: string) => any
): T {
  return Object.keys(schema.describe().fields)
    .map(node => {
      const nodeSchema = reach(schema, node, undefined, undefined);
      const value = getFakeData(nodeSchema, node);
      return { [node]: value };
    })
    .reduce((previous, current) => ({ ...previous, ...current }), {}) as T;
}
