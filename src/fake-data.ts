import { AnySchema } from 'yup';
import { LazySchema } from './types';

import { typeHandlers } from './handlers';
import { isLazySchema } from 'type-guards';

export function getFakeData<T = any>(
  schema: AnySchema<unknown> | LazySchema,
  node?: string
): T {
  if (isLazySchema(schema)) {
    // schema = schema.resolve({});
    throw new Error('No lazy support yet');
  }

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
