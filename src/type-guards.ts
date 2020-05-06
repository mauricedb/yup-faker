import { YupSchema } from './types';

export function isYupSchema(schema: any): schema is YupSchema {
  return (
    schema &&
    schema.__isYupSchema__ &&
    schema.tests &&
    Array.isArray(schema.tests) &&
    schema._whitelist
  );
}
