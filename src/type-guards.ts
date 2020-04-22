import { YupObjectSchema, YupSchema } from './types';

export function isYupSchema(schema: any): schema is YupSchema {
  return (
    schema &&
    schema.__isYupSchema__ &&
    schema.tests &&
    Array.isArray(schema.tests)
  );
}

export function isYupObjectSchema(schema: any): schema is YupObjectSchema {
  return (
    schema &&
    schema.__isYupSchema__ &&
    schema._nodes &&
    Array.isArray(schema._nodes)
  );
}
