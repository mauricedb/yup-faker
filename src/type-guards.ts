import { YupSchema } from 'types';

export function isYupSchema(schema: any): schema is YupSchema {
  return !!schema.tests && Array.isArray(schema.tests);
}
