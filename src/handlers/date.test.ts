import faker from 'faker';
import * as yup from 'yup';

import { handleDateSchema } from './date';

describe('Create random date value for', () => {
  beforeEach(() => faker.seed(1));

  test('any date', () => {
    const schema = yup.date();
    const result = handleDateSchema(schema);

    expect(result).toBeInstanceOf(Date);
    expect(() => schema.validateSync(result)).not.toThrow();
    expect(result.toISOString()).toMatch(/^1834-01-17T07:/);
  });

  test('some date after January 1st 2050', () => {
    const schema = yup.date().min(new Date(2050, 0, 1));
    const result = handleDateSchema(schema);

    expect(result).toBeInstanceOf(Date);
    expect(() => schema.validateSync(result)).not.toThrow();
    expect(result.toISOString()).toMatch(/^2446-03-04T0[67]:/);
  });

  test('some date before January 1st 1950', () => {
    const schema = yup.date().max(new Date(1950, 0, 1));
    const result = handleDateSchema(schema);

    expect(result).toBeInstanceOf(Date);
    expect(() => schema.validateSync(result)).not.toThrow();
    expect(result.toISOString()).toMatch(/^1396-03-03T0[67]:/);
  });

  test('some date on May 5th 2020 betweem 15:15 and 15:45', () => {
    const schema = yup
      .date()
      .min(new Date(Date.UTC(2020, 4, 2, 15, 15, 0)))
      .max(new Date(Date.UTC(2020, 4, 2, 15, 45, 0)));
    const result = handleDateSchema(schema);

    expect(result).toBeInstanceOf(Date);
    expect(() => schema.validateSync(result)).not.toThrow();
    expect(result.getTime()).toMatchInlineSnapshot(`1588433250640`);
    expect(result).toMatchInlineSnapshot(`2020-05-02T15:27:30.640Z`);
  });
});
