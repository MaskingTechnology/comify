
import { REMARK_MAX_LENGTH } from '^/domain/report/definitions';

export const VALUES =
{
    REMARKS: {
        VALID_REMARK: 'Test message',
        INVALID_REMARK: 'A'.repeat(REMARK_MAX_LENGTH + 1)
    },

    IDS: {
        postId: 'P1'
    },
};
