
import { MESSAGE_MAX_LENGTH } from '^/domain/comment/definitions';

export const VALUES =
{
    MESSAGES: {
        VALID_COMMENT: 'Test message',
        INVALID_COMMENT: 'A'.repeat(MESSAGE_MAX_LENGTH + 1)
    },
};
