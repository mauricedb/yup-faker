import { AnySchema, lazy } from 'yup';

import { typeHandlers } from './handlers';

type LazySchema = ReturnType<typeof lazy>;

export function getFakeData<T = any>(
  schema: AnySchema<unknown> | LazySchema,
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
  return schema.default(undefined) as T;
}
