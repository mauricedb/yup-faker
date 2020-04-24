import faker from 'faker';
import { DateSchema } from 'yup';

export function handleDateSchema(schema: DateSchema): Date {
  return faker.date.between(new Date(1900), new Date(2100));
}
