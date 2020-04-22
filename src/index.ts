import faker from 'faker';

import { YupSchema } from './types';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export function handleDateSchema(schema: YupSchema): Date {
  return faker.date.between(new Date(1900), new Date(2100));
}

export function handleNumberSchema(schema: YupSchema): number {
  return faker.random.number();
}

export function handleBooleanSchema(schema: YupSchema): boolean {
  return faker.random.boolean();
}

export * from './fake-data';
