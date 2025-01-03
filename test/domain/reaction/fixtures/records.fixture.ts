
import { RecordData } from '^/integrations/database/module';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const RECORDS: Record<string, RecordData[]> =
{
    COMICS: [
        { id: VALUES.IDS.COMIC, imageId: VALUES.IDS.IMAGE }
    ],

    COMMENTS: [
        { id: VALUES.IDS.COMMENT, message: VALUES.MESSAGES.COMMENT }
    ],

    CREATORS: [
        { id: REQUESTERS.OWNER.id, fullName: REQUESTERS.OWNER.fullName, nickname: REQUESTERS.OWNER.nickname, email: 'test@example.com' }
    ],

    IMAGES: [
        { id: VALUES.IDS.IMAGE, storageKey: VALUES.STORAGE_KEYS.IMAGE, filename: 'dataUrl', mimeType: 'image/jpeg' }
    ],

    POSTS: [
        { id: VALUES.IDS.POST_EXISTING, creatorId: REQUESTERS.OWNER.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 0, reactionCount: 0, deleted: false }
    ],

    REACTIONS: [
        { id: VALUES.IDS.REACTION_DELETED, creatorId: REQUESTERS.OWNER.id, postId: VALUES.IDS.POST_EXISTING, comicId: undefined, commentId: undefined, ratingCount: 0, createdAt: new Date(), deleted: true },
        { id: VALUES.IDS.REACTION_COMIC, creatorId: REQUESTERS.OWNER.id, postId: VALUES.IDS.POST_EXISTING, comicId: VALUES.IDS.COMIC, commentId: undefined, ratingCount: 0, createdAt: new Date(), deleted: false },
        { id: VALUES.IDS.REACTION_COMMENT, creatorId: REQUESTERS.OWNER.id, postId: VALUES.IDS.POST_EXISTING, comicId: undefined, commentId: VALUES.IDS.COMMENT, ratingCount: 0, createdAt: new Date(), deleted: false },
        { id: VALUES.IDS.REACTION_RATED, creatorId: REQUESTERS.OWNER.id, postId: VALUES.IDS.POST_EXISTING, comicId: undefined, commentId: VALUES.IDS.COMMENT, ratingCount: 10, createdAt: new Date() },
        { id: VALUES.IDS.REACTION_UNRATED, creatorId: REQUESTERS.OWNER.id, postId: VALUES.IDS.POST_EXISTING, comicId: undefined, commentId: VALUES.IDS.COMMENT, ratingCount: 0, createdAt: new Date(), deleted: false }
    ],

    RATINGS: [
        { id: VALUES.IDS.RATING, creatorId: REQUESTERS.OWNER.id, postId: undefined, reactionId: VALUES.IDS.REACTION_RATED, createdAt: new Date() },
    ]
};
