import { Schema, reach } from 'yup';
import faker from 'faker';
import { YupObjectSchema, YupSchema, YupArraySchema } from 'types';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

const typeHandlers = new Map<string, Function>();

function handleObjectSchema(schema: YupObjectSchema): object {
  return schema._nodes
    .map(node => {
      const nodeSchema = reach(schema, node);
      const value = getFakeData(nodeSchema);
      return { [node]: value };
    })
    .reduce((previous, current) => ({ ...previous, ...current }), {});
}

function handleArraySchema(schema: YupArraySchema): unknown[] {
  const subSubSchema = schema._subType;

  return new Array(faker.random.number({ min: 0, max: 5 }))
    .fill(null)
    .map(() => getFakeData(subSubSchema));
}

function isEmail(schema: YupSchema) {
  return !!schema.tests.find(test => test.OPTIONS.name === 'email');
}

function handleStringSchema(schema: YupSchema): string {
  if (isEmail(schema)) {
    return faker.internet.email();
  }

  return faker.random.words();
}

function handleMixedSchema(schema: YupSchema) {
  return faker.random.arrayElement(Array.from(schema._whitelist.list));
}

function handleDateSchema(schema: YupSchema): Date {
  return faker.date.between(new Date(1900), new Date(2100));
}

function handleNumberSchema(schema: YupSchema): number {
  return faker.random.number();
}

function handleBooleanSchema(schema: YupSchema): boolean {
  return faker.random.boolean();
}

typeHandlers.set('object', handleObjectSchema);
typeHandlers.set('array', handleArraySchema);
typeHandlers.set('string', handleStringSchema);
typeHandlers.set('mixed', handleMixedSchema);
typeHandlers.set('date', handleDateSchema);
typeHandlers.set('number', handleNumberSchema);
typeHandlers.set('boolean', handleBooleanSchema);

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
