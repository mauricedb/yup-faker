import { reach, object } from 'yup';
import { GetFakeData } from '../types';

type ObjectSchema = ReturnType<typeof object>;

export function handleObjectSchema<T extends object | null | undefined>(
  schema: ObjectSchema,
  node: string,
  getFakeData: GetFakeData
): T {
  return Object.keys(schema.describe().fields)
    .map(node => {
      const nodeSchema = reach(schema, node, undefined, undefined);
      const value = getFakeData(nodeSchema, node);
      return { [node]: value };
    })
    .reduce((previous, current) => ({ ...previous, ...current }), {}) as T;
}
