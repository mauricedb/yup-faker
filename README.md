# yup-faker

Yup schema with fake data generation

## Install

```sh
npm install yup-faker --save-dev
```

## Usage

Create a fake person object that conforms to the specified [Yup](https://www.npmjs.com/package/yup) schema. The data is generated using [Faker](https://www.npmjs.com/package/faker). You do not need to install Faker, it is internal to this package.

The typical, and main, use case of this package is to generate data structures for unit tests. Another use case is generating random sample data in a demo verion of your application.

```ts
import * as yup from 'yup';
import { getFakeData } from 'yup-faker';

const personSchema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  gender: yup.mixed().oneOf(['male', 'female', 'other'] as const),
  email: yup.string().email(),
  birthDate: yup
    .date()
    .min(new Date(1950, 0, 1))
    .max(new Date()),
});

const fakePerson = getFakeData(personSchema);

console.log(JSON.stringify(fakePerson, null, 2));
```

Note:

- The `firstName` and `lastName` will be generated using the `faker.name.firstName()` and `faker.name.lastName()` functions.
- The `gender` will always be one of the three allowed values `male`, `female` or `other`.
- The `email` field will be a valid email.
- The fake `birthDate` generated will always match the required data range of January 1st 1950 to today.
