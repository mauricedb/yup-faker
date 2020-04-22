import { Schema } from 'yup';

import { YupSchema } from './types';
import { typeHandlers } from './handlers';

export function getFakeData<T = any>(schema: Schema<unknown>): T {
  const yupSchema = schema as YupSchema;
  const handler = typeHandlers.get(yupSchema._type);

  if (handler) {
    return handler(schema);
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      `Unable to handle schema type ${yupSchema._type}. Returning the default value instead.`
    );
  }
  return schema.default() as T;
}
