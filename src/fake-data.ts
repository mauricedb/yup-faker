import { Schema } from 'yup';

import { typeHandlers } from './handlers';

export function getFakeData<T = any>(
  schema: Schema<unknown>,
  node?: string
): T {
  const handler = typeHandlers.get(schema.type);

  if (handler) {
    return handler(schema, node, getFakeData);
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      `Unable to handle schema type ${schema.type}. Returning the default value instead.`
    );
  }
  return schema.default() as T;
}
