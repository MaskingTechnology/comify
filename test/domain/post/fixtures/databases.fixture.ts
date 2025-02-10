
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic';
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import { RECORD_TYPE as CREATOR_METRICS_RECORD_TYPE } from '^/domain/creator.metrics';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '^/domain/image';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import { RECORD_TYPE as POST_METRICS_RECORD_TYPE } from '^/domain/post.metrics';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation';

import database from '^/integrations/database';

import { RECORDS } from './records.fixture';

database.connect();

async function withCreators(): Promise<void>
{
    database.clear();

    const promises = RECORDS.CREATORS.map(creator => database.createRecord(CREATOR_RECORD_TYPE, { ...creator }));

    await Promise.all(promises);
}

async function withCreatorsPostsAndRelations(): Promise<void>
{
    database.clear();

    const promises = [
        RECORDS.CREATORS.map(creator => database.createRecord(CREATOR_RECORD_TYPE, { ...creator })),
        RECORDS.CREATOR_METRICS.map(creatorMetric => database.createRecord(CREATOR_METRICS_RECORD_TYPE, { ...creatorMetric })),
        RECORDS.RELATIONS.map(relation => database.createRecord(RELATION_RECORD_TYPE, { ...relation })),
        RECORDS.IMAGES.map(image => database.createRecord(IMAGE_RECORD_TYPE, { ...image })),
        RECORDS.COMICS.map(comic => database.createRecord(COMIC_RECORD_TYPE, { ...comic })),
        RECORDS.POSTS.map(post => database.createRecord(POST_RECORD_TYPE, { ...post })),
        RECORDS.POST_METRICS.map(postMetric => database.createRecord(POST_METRICS_RECORD_TYPE, { ...postMetric })),
    ];

    await Promise.all(promises.flat());
}

async function withPostsAndCreators(): Promise<void>
{
    database.clear();

    const promises = [
        RECORDS.CREATORS.map(creator => database.createRecord(CREATOR_RECORD_TYPE, { ...creator })),
        RECORDS.POSTS.map(post => database.createRecord(POST_RECORD_TYPE, { ...post }))
    ];

    await Promise.all(promises.flat());
}

export const DATABASES = { withCreators, withPostsAndCreators, withCreatorsPostsAndRelations };
