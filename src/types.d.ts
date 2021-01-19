import { AnySchema, lazy, ObjectSchema } from 'yup';
import { ObjectShape } from 'yup/lib/object';

type SchemaInternals = {
  _whitelist: { list: Set<unknown> };
};

type YupSchema = AnySchema<unknown> & SchemaInternals;
type YupObjectSchema<TShape extends ObjectShape> = ObjectSchema<TShape> &
  SchemaInternals;

type LazySchema = ReturnType<typeof lazy>;

type GetFakeData<TData = any> = (
  schema: AnySchema<unknown> | LazySchema,
  node?: string
) => TData;
