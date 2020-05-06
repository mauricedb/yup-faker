import { Schema, ObjectSchema, ArraySchema } from 'yup';

type SchemaInternals = {
  _whitelist: { list: Set<unknown> };
};

type YupSchema = Schema<unknown> & SchemaInternals;
type YupObjectSchema = ObjectSchema & SchemaInternals;
