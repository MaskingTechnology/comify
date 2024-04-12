
import Requester from '../../../../src/domain/authentication/Requester';
import { RECORD_TYPE as RECORD_TYPE_CREATOR } from '../../../../src/domain/creator/definitions/constants';
import RelationData from '../../../../src/domain/relation/data/RelationData';
import SortOptions from '../../../../src/domain/relation/definitions/SortOptions';
import { RECORD_TYPE as RECORD_TYPE_RELATION } from '../../../../src/domain/relation/definitions/constants';
import RelationAlreadyExists from '../../../../src/domain/relation/errors/RelationAlreadyExists';
import establish from '../../../../src/domain/relation/establish';
import explore from '../../../../src/domain/relation/explore';
import getFollowers from '../../../../src/domain/relation/getFollowers';
import getFollowing from '../../../../src/domain/relation/getFollowing';
import database, { RecordData, RecordQuery } from '../../../../src/integrations/database/module';

await database.connect();

const creator0: RecordData = { fullName: 'Creator 0', nickname: 'creator0', email: 'creator0@mail.com', portraitId: undefined, joinedAt: new Date(), popularity: 0, followerCount: 0, followingCount: 0 };
const creator1: RecordData = { fullName: 'Creator 1', nickname: 'creator1', email: 'creator1@mail.com', portraitId: undefined, joinedAt: new Date(), popularity: 0, followerCount: 0, followingCount: 0 };
const creator2: RecordData = { fullName: 'Creator 2', nickname: 'creator2', email: 'creator2@mail.com', portraitId: undefined, joinedAt: new Date(2024, 1, 24), popularity: 0, followerCount: 0, followingCount: 0 };
const creator3: RecordData = { fullName: 'Creator_3', nickname: 'creator3', email: 'creator3@mail.com', portraitId: undefined, joinedAt: new Date(2024, 2, 12), popularity: 2, followerCount: 0, followingCount: 0 };
const creator4: RecordData = { fullName: 'Creator 4', nickname: 'creator4', email: 'creator4@mail.com', portraitId: undefined, joinedAt: new Date(2024, 4, 9), popularity: 1, followerCount: 0, followingCount: 0 };
const creator5: RecordData = { fullName: 'Creator 5', nickname: 'creator4_001', email: 'creator5@mail.com', portraitId: undefined, joinedAt: new Date(2024, 3, 18), popularity: 3, followerCount: 0, followingCount: 0 };

const CREATOR0_ID = await database.createRecord(RECORD_TYPE_CREATOR, creator0);
const CREATOR1_ID = await database.createRecord(RECORD_TYPE_CREATOR, creator1);
const CREATOR2_ID = await database.createRecord(RECORD_TYPE_CREATOR, creator2);
const CREATOR3_ID = await database.createRecord(RECORD_TYPE_CREATOR, creator3);
const CREATOR4_ID = await database.createRecord(RECORD_TYPE_CREATOR, creator4);
const CREATOR5_ID = await database.createRecord(RECORD_TYPE_CREATOR, creator5);

const REQUESTER1 = new Requester(CREATOR0_ID, creator0.fullName as string, creator0.nickname as string);
const REQUESTER2 = new Requester(CREATOR1_ID, creator1.fullName as string, creator1.nickname as string);

const relation1: RecordData = { followerId: CREATOR0_ID, followingId: CREATOR1_ID };
const relation2: RecordData = { followerId: CREATOR0_ID, followingId: CREATOR2_ID };
const relation3: RecordData = { followerId: CREATOR1_ID, followingId: CREATOR2_ID };
const relation4: RecordData = { followerId: CREATOR2_ID, followingId: CREATOR3_ID };
const relation5: RecordData = { followerId: CREATOR3_ID, followingId: CREATOR4_ID };
const relation6: RecordData = { followerId: CREATOR4_ID, followingId: CREATOR5_ID };
const relation7: RecordData = { followerId: CREATOR5_ID, followingId: CREATOR3_ID };

const RELATION1 = await database.createRecord(RECORD_TYPE_RELATION, relation1);
const RELATION2 = await database.createRecord(RECORD_TYPE_RELATION, relation2);

await database.createRecord(RECORD_TYPE_RELATION, relation3);
await database.createRecord(RECORD_TYPE_RELATION, relation4);
await database.createRecord(RECORD_TYPE_RELATION, relation5);
await database.createRecord(RECORD_TYPE_RELATION, relation6);
await database.createRecord(RECORD_TYPE_RELATION, relation7);

const UNKNOWN_REQUESTER = new Requester('00000006', 'placeholder', 'placeholder');

const QUERY_EXISTING_RELATION: RecordQuery = {
    followerId: { EQUALS: REQUESTER2.id },
    followingId: { EQUALS: CREATOR0_ID }
};

const QUERY_NON_EXISTING_RELATION: RecordQuery = {
    followerId: { EQUALS: UNKNOWN_REQUESTER.id },
    followingId: { EQUALS: CREATOR1_ID }
};

export
{
    CREATOR0_ID, CREATOR1_ID, CREATOR2_ID, CREATOR3_ID, CREATOR4_ID, CREATOR5_ID,
    QUERY_EXISTING_RELATION, QUERY_NON_EXISTING_RELATION,
    RECORD_TYPE_CREATOR, RECORD_TYPE_RELATION,
    RELATION1, RELATION2, REQUESTER1, REQUESTER2,
    RelationAlreadyExists, RelationData, SortOptions, UNKNOWN_REQUESTER,
    database, establish, explore, getFollowers, getFollowing
};

