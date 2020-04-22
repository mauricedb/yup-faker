import faker from 'faker';

import { YupSchema, YupArraySchema } from './types';
import {
  handleStringSchema,
  handleMixedSchema,
  handleObjectSchema,
} from './handlers';
import { getFakeData } from './fake-data';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

const typeHandlers = new Map<string, Function>();

function handleArraySchema(schema: YupArraySchema): unknown[] {
  const subSubSchema = schema._subType;

  return new Array(faker.random.number({ min: 0, max: 5 }))
    .fill(null)
    .map(() => getFakeData(subSubSchema));
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

export * from './fake-data';
