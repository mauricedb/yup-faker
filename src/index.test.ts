import * as yup from 'yup';
import { sum, getFakeData } from '.';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('getFakeData', () => {
  const adresSchema = yup.object({
    street: yup.string(),
    city: yup.string(),
  });

  const personSchema = yup.object({
    firstName: yup.string().ensure(),
    lastName: yup.string().ensure(),
    salary: yup.number(),
    nickName: yup.string().nullable(),
    gender: yup.mixed().oneOf(['male', 'female', 'other']),
    email: yup
      .string()
      .nullable()
      .notRequired()
      .email(),
    birthDate: yup
      .date()
      .nullable()
      .notRequired()
      .min(new Date(1900, 0, 1)),
    married: yup.bool(),
    adres: adresSchema,
    Addresses: yup.array(adresSchema),
  });

  type Person = yup.InferType<typeof personSchema>;

  test('getFakeData voor object schema', () => {
    const result = getFakeData<Person>(personSchema);

    console.log(result);

    expect(typeof result).toBe('object');

    expect(() => personSchema.validateSync(result)).not.toThrow();
  });

  test('getFakeData voor string schema', () => {
    const result = getFakeData(yup.string());
    expect(typeof result).toBe('string');
  });
});
