
import { RecordData } from '^/integrations/database/module';

import { Types } from '^/domain/notification/definitions';
import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const RECORDS: Record<string, RecordData[]> =
{
    CREATORS: [
        { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1, email: VALUES.EMAILS.CREATOR1, portraitId: undefined, joinedAt: new Date(), postCount: 0, followerCount: 1, followingCount: 1, popularity: 0 },
        { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2, email: VALUES.EMAILS.CREATOR2, portraitId: undefined, joinedAt: new Date(), postCount: 1, followerCount: 1, followingCount: 1, popularity: 0 },
        { id: VALUES.IDS.CREATOR3, fullName: VALUES.FULL_NAMES.CREATOR3, nickname: VALUES.NICKNAMES.CREATOR3, email: VALUES.EMAILS.CREATOR3, portraitId: undefined, joinedAt: new Date(), postCount: 0, followerCount: 0, followingCount: 0, popularity: 0 },
    ],

    IMAGES: [
        { id: VALUES.IDS.IMAGE, storageKey: VALUES.STORAGE_KEYS.IMAGE, filename: VALUES.FILENAMES.FIRST, mimeType: 'image/png' }
    ],

    COMICS: [
        { id: VALUES.IDS.COMIC, imageId: VALUES.IDS.IMAGE }
    ],

    POSTS: [
        { id: VALUES.IDS.POST_RATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_DELETED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 5, reactionCount: 1, deleted: true },
    ],

    REACTIONS: [
        { id: VALUES.IDS.REACTION_LIKED, createdAt: new Date(), creatorId: VALUES.IDS.CREATOR2, postId: VALUES.IDS.POST_RATED, comicId: VALUES.IDS.COMIC, commentId: undefined, RatingCount: 1, deleted: false },
    ],

    RATINGS: [
        { id: VALUES.IDS.RATING1, createdAt: new Date(), creatorId: VALUES.IDS.CREATOR3, postId: VALUES.IDS.POST_RATED, reactionId: undefined },
        { id: VALUES.IDS.RATING2, createdAt: new Date(), creatorId: VALUES.IDS.CREATOR2, postId: undefined, reactionId: VALUES.IDS.REACTION_LIKED },
    ],

    NOTIFICATIONS: [
        { id: VALUES.IDS.NOTIFICATION1, createdAt: new Date(), type: Types.STARTED_FOLLOWING, senderId: VALUES.IDS.CREATOR1, receiverId: VALUES.IDS.CREATOR2, targetPostId: undefined, targetReactionId: undefined },
        { id: VALUES.IDS.NOTIFICATION2, createdAt: new Date(), type: Types.STARTED_FOLLOWING, senderId: VALUES.IDS.CREATOR2, receiverId: VALUES.IDS.CREATOR1, targetPostId: undefined, targetReactionId: undefined },
        { id: VALUES.IDS.NOTIFICATION3, createdAt: new Date('01-05-2024'), type: Types.RATED_POST, senderId: VALUES.IDS.CREATOR3, receiverId: VALUES.IDS.CREATOR2, targetPostId: VALUES.IDS.POST_RATED, targetReactionId: undefined },
        { id: VALUES.IDS.NOTIFICATION4, createdAt: new Date('01-04-2024'), type: Types.RATED_REACTION, senderId: VALUES.IDS.CREATOR2, receiverId: VALUES.IDS.CREATOR1, targetPostId: undefined, targetReactionId: VALUES.IDS.REACTION_LIKED },
        { id: VALUES.IDS.NOTIFICATION5, createdAt: new Date('01-03-2024'), type: Types.RATED_POST, senderId: VALUES.IDS.CREATOR1, receiverId: VALUES.IDS.CREATOR1, targetPostId: VALUES.IDS.POST_DELETED, targetReactionId: undefined },
    ],

};
