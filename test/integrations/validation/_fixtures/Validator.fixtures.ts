
import { InvalidData } from '../../../../src/integrations/validation/definitions/errors';
import { ValidationSchema } from '../../../../src/integrations/validation/definitions/types';
import validator from '../../../../src/integrations/validation/module';

const INVALID_STRING = 'Invalid string';
const INVALID_NUMBER = 'Invalid number';
const INVALID_BOOLEAN = 'Invalid boolean';
const INVALID_DATE = 'Invalid date';
const INVALID_ID = 'Invalid id';
const INVALID_EMAIL = 'Invalid email';
const INVALID_LIST = 'Invalid list';
const INVALID_URL = 'Invalid url';
const TOO_LONG_URL = 'https://example.com/' + 'very_long_folder_name/'.repeat(115);

const STRING_VALIDATION: ValidationSchema = {
    string: {
        message: INVALID_STRING,
        STRING: {
            required: true,
            minLength: 4,
            maxLength: 7,
            pattern: '^[a-zA-Z]+$'
        }
    }
};

const NUMBER_VALIDATION: ValidationSchema = {
    number: {
        message: INVALID_NUMBER,
        NUMBER: {
            required: true,
            minValue: 10,
            maxValue: 20
        }
    }
};

const BOOLEAN_VALIDATION: ValidationSchema = {
    boolean: {
        message: INVALID_BOOLEAN,
        BOOLEAN: {
            required: true
        }
    }
};

const DATE_VALIDATION: ValidationSchema = {
    date: {
        message: INVALID_DATE,
        DATE: {
            required: true
        }
    }
};

const UUID_VALIDATION: ValidationSchema = {
    id: {
        message: INVALID_ID,
        UUID: {
            required: true
        }
    }
};

const EMAIL_VALIDATION: ValidationSchema = {
    email: {
        message: INVALID_EMAIL,
        EMAIL: {
            required: true
        }
    }
};

const ARRAY_VALIDATION: ValidationSchema = {
    list: {
        message: INVALID_LIST,
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

const NO_PROTOCOL_URL_VALIDATION: ValidationSchema = {
    url: {
        message: INVALID_URL,
        URL: {
            required: true
        }
    }
};

const HTTPS_FTP_URL_VALIDATION: ValidationSchema = {
    url: {
        message: INVALID_URL,
        URL: {
            required: true,
            protocols: ['https', 'ftp']
        }
    }
};

const OPTIONAL_VALIDATION: ValidationSchema = {
    string: {
        message: INVALID_STRING,
        STRING: {
            required: false
        }
    },
    number: {
        message: INVALID_NUMBER,
        NUMBER: {
            required: false,
            minValue: 18
        }
    }
};

const MIXED_SCHEMA_VALIDATION: ValidationSchema = {
    id: {
        message: INVALID_ID,
        UUID: {
            required: true
        }
    },
    string: {
        message: INVALID_STRING,
        STRING: {
            required: true
        }
    },
    number: {
        message: INVALID_NUMBER,
        NUMBER: {
            required: false
        }
    },
    email: {
        message: INVALID_EMAIL,
        EMAIL: {
            required: true
        }
    },
    date: {
        message: INVALID_DATE,
        DATE: {
            required: true
        }
    },
    boolean: {
        message: INVALID_BOOLEAN,
        BOOLEAN: {
            required: true
        }
    },
    list: {
        message: INVALID_LIST,
        ARRAY: {
            required: false,
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

const INVALID_STRING_ERROR = new InvalidData(new Map().set('string', INVALID_STRING));
const INVALID_NUMBER_ERROR = new InvalidData(new Map().set('number', INVALID_NUMBER));
const INVALID_BOOLEAN_ERROR = new InvalidData(new Map().set('boolean', INVALID_BOOLEAN));
const INVALID_DATE_ERROR = new InvalidData(new Map().set('date', INVALID_DATE));
const INVALID_UUID_ERROR = new InvalidData(new Map().set('id', INVALID_ID));
const INVALID_EMAIL_ERROR = new InvalidData(new Map().set('email', INVALID_EMAIL));
const INVALID_ARRAY_ERROR = new InvalidData(new Map().set('list', INVALID_LIST));
const INVALID_URL_ERROR = new InvalidData(new Map().set('url', INVALID_URL));
const ADDITIONAL_FIELDS_ERROR = new InvalidData(new Map().set('age, length', 'Invalid field(s)'));
const INVALID_MIXED_SCHEMA_ERROR = new InvalidData(new Map().set('boolean', INVALID_BOOLEAN).set('list', INVALID_LIST));

const SCHEMAS = {
    STRING: STRING_VALIDATION,
    NUMBER: NUMBER_VALIDATION,
    BOOLEAN: BOOLEAN_VALIDATION,
    DATE: DATE_VALIDATION,
    UUID: UUID_VALIDATION,
    EMAIL: EMAIL_VALIDATION,
    ARRAY: ARRAY_VALIDATION,
    URL_HTTPS_FTP: HTTPS_FTP_URL_VALIDATION,
    URL_NO_PROTOCOL: NO_PROTOCOL_URL_VALIDATION,
    OPTIONAL: OPTIONAL_VALIDATION,
    MIXED_SCHEMA: MIXED_SCHEMA_VALIDATION
};

const ERRORS = {
    STRING: INVALID_STRING_ERROR,
    NUMBER: INVALID_NUMBER_ERROR,
    BOOLEAN: INVALID_BOOLEAN_ERROR,
    DATE: INVALID_DATE_ERROR,
    UUID: INVALID_UUID_ERROR,
    EMAIL: INVALID_EMAIL_ERROR,
    ARRAY: INVALID_ARRAY_ERROR,
    URL: INVALID_URL_ERROR,
    ADDITIONAL_FIELDS: ADDITIONAL_FIELDS_ERROR,
    MIXED_SCHEMA: INVALID_MIXED_SCHEMA_ERROR
};

export { ERRORS, SCHEMAS, TOO_LONG_URL, validator };

