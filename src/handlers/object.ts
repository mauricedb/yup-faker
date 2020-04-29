import { reach, ObjectSchema } from 'yup';

import { getFakeData } from '../fake-data';
import { isYupObjectSchema } from '../type-guards';

export function handleObjectSchema(schema: ObjectSchema): object {
  if (isYupObjectSchema(schema)) {
    return schema._nodes
      .map(node => {
        const nodeSchema = reach(schema, node);
        const value = getFakeData(nodeSchema);
        return { [node]: value };
      })
      .reduce((previous, current) => ({ ...previous, ...current }), {});
  } else {
    return schema.default();
  }
}
