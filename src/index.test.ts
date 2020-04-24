import * as yup from 'yup';
import { getFakeData } from '.';

describe('getFakeData', () => {
  it('works', () => {
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

    const result = getFakeData(personSchema);

    expect(typeof result).toBe('object');

    expect(() => personSchema.validateSync(result)).not.toThrow();
  });
});
