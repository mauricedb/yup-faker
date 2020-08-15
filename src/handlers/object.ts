import { reach, ObjectSchema } from 'yup';

export function handleObjectSchema<T extends object | null | undefined>(
  schema: ObjectSchema<T>,
  node?: string,
  getFakeData: Function = () => {}
): T {
  return Object.keys(schema.describe().fields)
    .map(node => {
      const nodeSchema = reach(schema, node);
      const value = getFakeData(nodeSchema, node);
      return { [node]: value };
    })
    .reduce((previous, current) => ({ ...previous, ...current }), {}) as T;
}
