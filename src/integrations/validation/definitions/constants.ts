
const FieldTypes = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    DATE: 'date',
    UUID: 'uuid',
    EMAIL: 'email',
    ARRAY: 'array'
};

Object.freeze(FieldTypes);

const MAX_EMAIL_LENGTH = 320;

export { FieldTypes, MAX_EMAIL_LENGTH };
