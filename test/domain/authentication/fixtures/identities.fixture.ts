
import { Identity } from '^/integrations/authentication';

import { VALUES } from './values.fixture';

export const IDENTITIES: Record<string, Identity> =
{
    EXISTING: {
        name: VALUES.FULL_NAMES.FIRST,
        nickname: VALUES.NICKNAMES.FIRST,
        email: VALUES.EMAILS.FIRST,
        picture: undefined,
        email_verified: false
    },
    NO_NICKNAME: {
        name: VALUES.FULL_NAMES.NO_NICKNAME,
        nickname: VALUES.NICKNAMES.NONE,
        email: VALUES.EMAILS.NO_NICKNAME,
        picture: undefined,
        email_verified: false
    },
    DUPLICATE_NICKNAME: {
        name: VALUES.FULL_NAMES.DUPLICATE_NICKNAME,
        nickname: VALUES.NICKNAMES.DUPLICATE,
        email: VALUES.EMAILS.DUPLICATED_NICKNAME,
        picture: undefined,
        email_verified: false
    },
    MULTIPLE_OCCURRENCES_NICKNAME: {
        name: VALUES.FULL_NAMES.MULTIPLE_SIMILAR_NICKNAMES,
        nickname: VALUES.NICKNAMES.MULTIPLE,
        email: VALUES.EMAILS.MULTIPLE_SIMILAR_NICKNAMES,
        picture: undefined,
        email_verified: false
    },
    TOO_MANY_SIMILAR_NICKNAMES: {
        name: VALUES.FULL_NAMES.TOO_MANY_SIMILAR_NICKNAMES,
        nickname: VALUES.NICKNAMES.TOO_MANY,
        email: VALUES.EMAILS.TOO_MANY_SIMILAR_NICKNAMES,
        picture: undefined,
        email_verified: false
    },
    SPACED_NICKNAME: {
        name: VALUES.FULL_NAMES.SPACED_NICKNAME,
        nickname: VALUES.NICKNAMES.SPACED,
        email: VALUES.EMAILS.SPACED_NICKNAME,
        picture: undefined,
        email_verified: false
    },
    UNDERSCORED_NICKNAME: {
        name: VALUES.FULL_NAMES.UNDERSCORED_NICKNAME,
        nickname: VALUES.NICKNAMES.UNDERSCORED,
        email: VALUES.EMAILS.UNDERSCORED_NICKNAME,
        picture: undefined,
        email_verified: false
    },
    WITH_PICTURE: {
        name: VALUES.FULL_NAMES.WITH_PICTURE,
        nickname: VALUES.NICKNAMES.WITH_PICTURE,
        email: VALUES.EMAILS.WITH_PICTURE,
        picture: VALUES.PICTURES.VALID,
        email_verified: false
    }
};
