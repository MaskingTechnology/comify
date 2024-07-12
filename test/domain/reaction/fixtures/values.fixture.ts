
import { MESSAGE_MAX_LENGTH } from '^/domain/comment/definitions';

export const VALUES =
{
    IDS: {
        COMIC: '1',
        COMIC_MISSING: undefined,
        COMMENT: '1',
        COMMENT_MISSING: undefined,
        IMAGE: '1',

        POST_EXISTING: '1',
        POST_NOT_EXISTING: '2',

        RATING: '1',

        REACTION_DELETED: '1',
        REACTION_RATED: '2',
        REACTION_UNRATED: '3',
        REACTION_NOT_EXISTING: '4',
        REACTION_COMIC: '5',
        REACTION_COMMENT: '6'
    },

    MESSAGES: {
        VALID_COMMENT: 'Test message',
        INVALID_COMMENT: 'A'.repeat(MESSAGE_MAX_LENGTH + 1)
    },

    COMIC_DATA: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
    COMIC_DATA_URL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',

    STORAGE_KEYS: {
        IMAGE: 'comic/1'
    },

    RANGE: { limit: 30, offset: 0 }
};
