
import { ValidationSchema } from '../../../../src/integrations/validation/definitions/types';

export const stringValidation: ValidationSchema = {
    name: {
        message: 'Invalid name',
        STRING: {
            required: true,
            minLength: 5,
            maxLength: 15,
            pattern: '^[a-zA-Z]+$'
        }
    }
};

export const uuidValidation: ValidationSchema = {
    id: {
        message: 'Invalid id',
        UUID: {
            required: true
        }
    }
};

export const creator: ValidationSchema = {
    id: {
        message: 'Invalid id',
        UUID: {
            required: true
        }
    },
    name: {
        STRING: {
            required: false
        }
    },
    email: {
        EMAIL: {
            required: true
        }
    },
    followerCount: {
        NUMBER: {
            required: false,
            minValue: 0
        }
    },
    roles:
    {
        message: 'Invalid roles',
        ARRAY: {
            required: true,
            minLength: 1,
            maxLength: 2,
            validations:
            {
                STRING:
                {
                    required: true,
                    minLength: 3,
                    maxLength: 5
                }
            }
        }
    }
};
