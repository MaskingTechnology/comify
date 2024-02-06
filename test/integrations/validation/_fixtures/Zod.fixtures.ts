
import { InvalidObject } from '../../../../src/integrations/validation/definitions/errors.ts';
import { ValidationSchema } from '../../../../src/integrations/validation/definitions/types';

const invalidName = 'Invalid name';
const invalidFollowerCount = 'Invalid followerCount';
const invalidIsActive = 'Invalid isActive';
const invalidCreatedAt = 'Invalid createdAt';
const invalidId = 'Invalid id';
const invalidEmail = 'Invalid email';
const invalidRoles = 'Invalid roles';
const invalidAge = 'Invalid age';
const invalidNickname = 'Invalid nickname';
const invalidPortraitId = 'Invalid portraitId';
const invalidPopularity = 'Invalid popularity';
const invalidPostCount = 'Invalid postCount';
const invalidFollowingCount = 'Invalid followingCount';

const stringValidation: ValidationSchema = {
    name: {
        message: invalidName,
        STRING: {
            required: true,
            minLength: 4,
            maxLength: 7,
            pattern: '^[a-zA-Z]+$'
        }
    }
};

const numberValidation: ValidationSchema = {
    followerCount: {
        message: invalidFollowerCount,
        NUMBER: {
            required: true,
            minValue: 10,
            maxValue: 20
        }
    }
};

const booleanValidation: ValidationSchema = {
    isActive: {
        message: invalidIsActive,
        BOOLEAN: {
            required: true
        }
    }
};

const dateValidation: ValidationSchema = {
    createdAt: {
        message: invalidCreatedAt,
        DATE: {
            required: true
        }
    }
};

const uuidValidation: ValidationSchema = {
    id: {
        message: invalidId,
        UUID: {
            required: true
        }
    }
};

const emailValidation: ValidationSchema = {
    email: {
        message: invalidEmail,
        EMAIL: {
            required: true
        }
    }
};

const arrayValidation: ValidationSchema = {
    roles: {
        message: invalidRoles,
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

const optionalValidation: ValidationSchema = {
    name: {
        message: invalidName,
        STRING: {
            required: false
        }
    },
    age: {
        message: invalidAge,
        NUMBER: {
            required: false,
            minValue: 18
        }
    }
};

const creator: ValidationSchema = {
    id: {
        message: invalidId,
        UUID: {
            required: true
        }
    },
    name: {
        message: invalidName,
        STRING: {
            required: true
        }
    },
    nickname: {
        message: invalidNickname,
        STRING: {
            required: true
        }
    },
    email: {
        message: invalidEmail,
        EMAIL: {
            required: true
        }
    },
    portraitId: {
        message: invalidPortraitId,
        STRING: {
            required: false
        }
    },
    createdAt: {
        message: invalidCreatedAt,
        DATE: {
            required: true
        }
    },
    popularity: {
        message: invalidPopularity,
        NUMBER: {
            required: true
        }
    },
    postCount: {
        message: invalidPostCount,
        NUMBER: {
            required: true
        }
    },
    followerCount: {
        message: invalidFollowerCount,
        NUMBER: {
            required: true
        }
    },
    followingCount: {
        message: invalidFollowingCount,
        NUMBER: {
            required: true
        }
    }
};

const INVALID_STRING = new InvalidObject(new Map().set('name', invalidName));
const INVALID_NUMBER = new InvalidObject(new Map().set('followerCount', invalidFollowerCount));
const INVALID_BOOLEAN = new InvalidObject(new Map().set('isActive', invalidIsActive));
const INVALID_DATE = new InvalidObject(new Map().set('createdAt', invalidCreatedAt));
const INVALID_UUID = new InvalidObject(new Map().set('id', invalidId));
const INVALID_EMAIL = new InvalidObject(new Map().set('email', invalidEmail));
const INVALID_ARRAY = new InvalidObject(new Map().set('roles', invalidRoles));
const ADDITIONAL_FIELDS = new InvalidObject(new Map().set('age, length', 'Invalid field(s)'));

export const SCHEMAS = {
    STRING: stringValidation,
    NUMBER: numberValidation,
    BOOLEAN: booleanValidation,
    DATE: dateValidation,
    UUID: uuidValidation,
    EMAIL: emailValidation,
    ARRAY: arrayValidation,
    OPTIONAL: optionalValidation,
    CREATOR: creator
};

export const ERRORS = {
    STRING: INVALID_STRING,
    NUMBER: INVALID_NUMBER,
    BOOLEAN: INVALID_BOOLEAN,
    DATE: INVALID_DATE,
    UUID: INVALID_UUID,
    EMAIL: INVALID_EMAIL,
    ARRAY: INVALID_ARRAY,
    ADDITIONAL_FIELDS: ADDITIONAL_FIELDS
};
