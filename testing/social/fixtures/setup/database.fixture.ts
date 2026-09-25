
import type { RecordData, RecordType } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '@comify/social/domain/creator';
import { RECORD_TYPE as CREATOR_METRICS_RECORD_TYPE } from '@comify/social/domain/creator.metrics';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '@comify/social/domain/image';
import { RECORD_TYPE as NOTIFICATION_RECORD_TYPE } from '@comify/social/domain/notification';
import { RECORD_TYPE as POST_RECORD_TYPE } from '@comify/social/domain/post';
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '@comify/social/domain/post.comic';
import { RECORD_TYPE as COMMENT_RECORD_TYPE } from '@comify/social/domain/post.comment';
import { RECORD_TYPE as POST_METRICS_RECORD_TYPE } from '@comify/social/domain/post.metrics';
import { RECORD_TYPE as RATING_RECORD_TYPE } from '@comify/social/domain/post.rating';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '@comify/social/domain/relation';

import
{
    CREATOR_METRICS_RECORDS,
    CREATOR_RECORDS,
    IMAGE_RECORDS,
    NOTIFICATION_RECORDS,
    COMIC_RECORDS,
    COMMENT_RECORDS,
    POST_RECORDS,
    REACTION_RECORDS,
    POST_METRICS_RECORDS,
    REACTION_METRICS_RECORDS,
    RATING_RECORDS,
    RELATION_RECORDS
} from '../data';

async function seed(type: RecordType, records: RecordData[]): Promise<void>
{
    await database.deleteRecords(type, {});

    await Promise.all(records.map(record => database.createRecord(type, record)));
}

export async function seedCreators(): Promise<void>
{
    const records = Object.values(CREATOR_RECORDS);

    return seed(CREATOR_RECORD_TYPE, records);
}

export async function seedCreatorMetrics(): Promise<void>
{
    const records = Object.values(CREATOR_METRICS_RECORDS);

    return seed(CREATOR_METRICS_RECORD_TYPE, records);
}

export async function seedImages(): Promise<void>
{
    const records = Object.values(IMAGE_RECORDS);

    return seed(IMAGE_RECORD_TYPE, records);
}

export async function seedNotifications(): Promise<void>
{
    const records = Object.values(NOTIFICATION_RECORDS);

    return seed(NOTIFICATION_RECORD_TYPE, records);
}

export async function seedComics(): Promise<void>
{
    const records = Object.values(COMIC_RECORDS);

    return seed(COMIC_RECORD_TYPE, records);
}

export async function seedComments(): Promise<void>
{
    const records = Object.values(COMMENT_RECORDS);

    return seed(COMMENT_RECORD_TYPE, records);
}

export async function seedPosts(): Promise<void>
{
    const postRecords = Object.values(POST_RECORDS);
    const reactionRecords = Object.values(REACTION_RECORDS);

    const records = [...postRecords, ...reactionRecords];

    return seed(POST_RECORD_TYPE, records);
}

export async function seedPostMetrics(): Promise<void>
{
    const postRecords = Object.values(POST_METRICS_RECORDS);
    const reactionRecords = Object.values(REACTION_METRICS_RECORDS);

    const records = [...postRecords, ...reactionRecords];

    return seed(POST_METRICS_RECORD_TYPE, records);
}

export async function seedRatings(): Promise<void>
{
    const records = Object.values(RATING_RECORDS);

    return seed(RATING_RECORD_TYPE, records);
}

export async function seedRelations(): Promise<void>
{
    const records = Object.values(RELATION_RECORDS);

    return seed(RELATION_RECORD_TYPE, records);
}
