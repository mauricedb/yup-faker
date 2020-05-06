import { reach, ObjectSchema } from 'yup';

import { getFakeData } from '../fake-data';

export function handleObjectSchema(
  schema: ObjectSchema,
  node?: string
): object {
  return Object.keys(schema.describe().fields)
    .map(node => {
      const nodeSchema = reach(schema, node);
      const value = getFakeData(nodeSchema, node);
      return { [node]: value };
    })
    .reduce((previous, current) => ({ ...previous, ...current }), {});
}
