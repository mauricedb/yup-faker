import { Schema, ObjectSchema, ArraySchema } from 'yup';

type SchemaInternals = {
  _whitelist: { list: Set<string> };
  tests: any[];
};

type YupSchema = Schema<unknown> & SchemaInternals;
type YupObjectSchema = ObjectSchema & SchemaInternals & { _nodes: string[] };
type YupArraySchema = ArraySchema<unknown> &
  SchemaInternals & { _subType: YupSchema };
