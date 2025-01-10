
import { ValidationSchema } from '^/integrations/validation';

import { VALUES } from './values.fixture';

export const VALIDATION_SCHEMES: Record<string, ValidationSchema> =
{
    STRING: {
        string: {
            message: VALUES.MESSAGES.INVALID_STRING,
            STRING: {
                required: true,
                minLength: 4,
                maxLength: 7,
                pattern: '^[a-zA-Z]+$'
            }
        }
    },

    NUMBER: {
        number: {
            message: VALUES.MESSAGES.INVALID_NUMBER,
            NUMBER: {
                required: true,
                minValue: 10,
                maxValue: 20
            }
        }
    },

    BOOLEAN: {
        boolean: {
            message: VALUES.MESSAGES.INVALID_BOOLEAN,
            BOOLEAN: {
                required: true
            }
        }
    },

    DATE: {
        date: {
            message: VALUES.MESSAGES.INVALID_DATE,
            DATE: {
                required: true
            }
        }
    },

    UUID: {
        id: {
            message: VALUES.MESSAGES.INVALID_ID,
            UUID: {
                required: true
            }
        }
    },

    EMAIL: {
        email: {
            message: VALUES.MESSAGES.INVALID_EMAIL,
            EMAIL: {
                required: true
            }
        }
    },

    ARRAY: {
        list: {
            message: VALUES.MESSAGES.INVALID_LIST,
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
    },

    URL_NO_PROTOCOL: {
        url: {
            message: VALUES.MESSAGES.INVALID_URL,
            URL: {
                required: true
            }
        }
    },

    URL_HTTPS_FTP: {
        url: {
            message: VALUES.MESSAGES.INVALID_URL,
            URL: {
                required: true,
                protocols: ['https', 'ftp']
            }
        }
    },

    OPTIONAL: {
        string: {
            message: VALUES.MESSAGES.INVALID_STRING,
            STRING: {
                required: false
            }
        },
        number: {
            message: VALUES.MESSAGES.INVALID_NUMBER,
            NUMBER: {
                required: false,
                minValue: 18
            }
        }
    },

    MIXED_SCHEMA: {
        id: {
            message: VALUES.MESSAGES.INVALID_ID,
            UUID: {
                required: true
            }
        },
        string: {
            message: VALUES.MESSAGES.INVALID_STRING,
            STRING: {
                required: true
            }
        },
        number: {
            message: VALUES.MESSAGES.INVALID_NUMBER,
            NUMBER: {
                required: false
            }
        },
        email: {
            message: VALUES.MESSAGES.INVALID_EMAIL,
            EMAIL: {
                required: true
            }
        },
        date: {
            message: VALUES.MESSAGES.INVALID_DATE,
            DATE: {
                required: true
            }
        },
        boolean: {
            message: VALUES.MESSAGES.INVALID_BOOLEAN,
            BOOLEAN: {
                required: true
            }
        },
        list: {
            message: VALUES.MESSAGES.INVALID_LIST,
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
    }
};
