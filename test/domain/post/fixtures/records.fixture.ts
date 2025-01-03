
import { RecordData } from '^/integrations/database/module';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const RECORDS: Record<string, RecordData[]> =
{
    CREATORS: [
        { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1, email: VALUES.EMAILS.CREATOR1 },
        { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2, email: VALUES.EMAILS.CREATOR2 },
    ],

    RELATIONS: [
        { id: VALUES.IDS.RELATION1, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR2 },
    ],

    IMAGES: [
        { id: VALUES.IDS.IMAGE, storageKey: VALUES.STORAGE_KEYS.IMAGE, filename: VALUES.FILENAMES.FIRST, mimeType: 'image/png' }
    ],

    COMICS: [
        { id: VALUES.IDS.COMIC, imageId: VALUES.IDS.IMAGE }
    ],

    POSTS: [
        { id: VALUES.IDS.POST_RATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_UNRATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_EXTRA1, creatorId: REQUESTERS.CREATOR2.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_DELETED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: true },
    ],

    RATINGS: [
        { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR1.id, postId: VALUES.IDS.POST_RATED, reactionId: undefined, createdAt: new Date() }
    ]
};
