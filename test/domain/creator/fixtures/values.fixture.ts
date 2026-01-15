
import { FULL_NAME_MAX_LENGTH } from '^/domain/creator/definitions';

export const VALUES =
{
    IDS: {
        CREATOR: 'ca2bb85c-390e-46db-83bd-992f59c8d8f9',
    },

    FULL_NAMES: {
        CREATOR: 'Test Creator',
        NEW: 'Test creator new',
        INVALID: 'A'.repeat(FULL_NAME_MAX_LENGTH + 1)
    },

    NICKNAMES: {
        CREATOR: 'testcreator',
        NEW: 'testcreatornew',
        DUPLICATE: 'testcreator'
    },

    EMAILS: {
        CREATOR: 'testcreator@example.com'
    }
};
