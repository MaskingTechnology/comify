
# Validation | Comify docs

## Introduction

The validation integration provides a universal interaction layer with an actual validation solution.

## Implementations

Currently, there is only one implementation:

* **Zod** - implementation for the currently popular Zod library (used in test and production).

## Configuration

The used implementation needs to be configured in the `.env` file with the debug enabled setting.

```env
VALIDATION_IMPLEMENTATION="zod"
```

## How to use

An instance of the configured validator implementation can be imported for performing validation operations.

```ts
import validator from '^/integrations/validation';

// Perform operations with the validator instance
```

### Operations

```ts
import validator, { ValidationSchema, ValidationResult } from '^/integrations/validation';

const data = {
    name: 'John Doe',
    age: '42'
};

const schema: ValidationSchema = {
    name: { message: 'Invalid name', STRING: { required: true, minLength: 4, maxLength: 40 } },
    nickname: { message: 'Invalid nickname', STRING: { required: false, , pattern: '^[a-z]+$' } },
    age: { message: 'Invalid age', NUMBER: { required: true, minValue: 18, maxValue: 99 } }
};

// Validate data
const result: ValidationResult = validator.validate(data, schema);
```

### Validation scheme options

A basic validation scheme has the following structure.

```ts
const schema: ValidationSchema = {
    fieldName1: { TYPE: { /* type options */ } },
    fieldName2: { TYPE: { /* type options */ } },
    ...
}
```

**Note** that a custom validation error `message` can optionally be set per field.

The following types are supported:

* **STRING**
  * `required: boolean`
  * `minLength?: number`
  * `maxLength?: number`
  * `pattern?: string`
* **NUMBER**
  * `required: boolean`
  * `minValue?: number`
  * `maxValue?: number`
* **ARRAY**
  * `required: boolean`
  * `minLength?: number`
  * `maxLength?: number`
  * `validations?: Partial<Validation>`
* **BOOLEAN**
  * `required: boolean`
* **DATE**
  * `required: boolean`
* **UUID**
  * `required: boolean`
* **EMAIL**
  * `required: boolean`
* **URL**
  * `required: boolean`

### Validation result structure

The validation result has two fields:

* **invalid** - boolean indicating if at least on of the fields is invalid.
* **messages** - map containing the validation error messages per field.
