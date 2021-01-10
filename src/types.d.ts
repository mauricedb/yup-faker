import { AnySchema, ObjectSchema } from 'yup';
import { ObjectShape } from 'yup/lib/object';

type SchemaInternals = {
  _whitelist: { list: Set<unknown> };
};

type YupSchema = AnySchema<unknown> & SchemaInternals;
type YupObjectSchema<TShape extends ObjectShape> = ObjectSchema<TShape> &
  SchemaInternals;
