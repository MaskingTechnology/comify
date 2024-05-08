
import { InvalidData } from '^/integrations/validation/module';

import { VALUES } from './values.fixture';

export const ERRORS =
{
    INVALID_STRING: new InvalidData(new Map().set('string', VALUES.MESSAGES.INVALID_STRING)),
    INVALID_NUMBER: new InvalidData(new Map().set('number', VALUES.MESSAGES.INVALID_NUMBER)),
    INVALID_BOOLEAN: new InvalidData(new Map().set('boolean', VALUES.MESSAGES.INVALID_BOOLEAN)),
    INVALID_DATE: new InvalidData(new Map().set('date', VALUES.MESSAGES.INVALID_DATE)),
    INVALID_UUID: new InvalidData(new Map().set('id', VALUES.MESSAGES.INVALID_ID)),
    INVALID_EMAIL: new InvalidData(new Map().set('email', VALUES.MESSAGES.INVALID_EMAIL)),
    INVALID_ARRAY: new InvalidData(new Map().set('list', VALUES.MESSAGES.INVALID_LIST)),
    INVALID_URL: new InvalidData(new Map().set('url', VALUES.MESSAGES.INVALID_URL)),
    INVALID_ADDITIONAL_FIELDS: new InvalidData(new Map().set('age, length', 'Invalid field(s)')),
    INVALID_MIXED_SCHEMA: new InvalidData(new Map().set('boolean', VALUES.MESSAGES.INVALID_BOOLEAN).set('list', VALUES.MESSAGES.INVALID_LIST)),
};
