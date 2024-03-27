
import Requester from '../../../../src/domain/authentication/Requester';
import johnDoe from '../../../../src/domain/authentication/johnDoe';
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

const creator0: RecordData = { fullName: 'John Doe', nickname: 'Doedel', email: 'john.doe@mail.com', portraitId: undefined, joinedAt: new Date(), popularity: 0, followerCount: 0, followingCount: 0 };
const creator1: RecordData = { fullName: 'Peter Pan', nickname: 'Panic', email: 'peterpan@mail.com', portraitId: undefined, joinedAt: new Date(), popularity: 0, followerCount: 0, followingCount: 0 };
const creator2: RecordData = { fullName: 'Bas Bax', nickname: 'Baxel', email: 'basbax@mail.com', portraitId: undefined, joinedAt: new Date(2024, 1, 24), popularity: 0, followerCount: 0, followingCount: 0 };
const creator3: RecordData = { fullName: 'Batsie Baby', nickname: 'BabyBas', email: 'creator3@mail.com', portraitId: undefined, joinedAt: new Date(2024, 2, 12), popularity: 2, followerCount: 0, followingCount: 0 };
const creator4: RecordData = { fullName: 'Paul Pal', nickname: 'Pickle', email: 'creator4@mail.com', portraitId: undefined, joinedAt: new Date(2024, 4, 9), popularity: 1, followerCount: 0, followingCount: 0 };
const creator5: RecordData = { fullName: 'Blank Bastard', nickname: 'Picture', email: 'creator5@mail.com', portraitId: undefined, joinedAt: new Date(2024, 3, 18), popularity: 3, followerCount: 0, followingCount: 0 };

const CREATOR0 = await database.createRecord(RECORD_TYPE_CREATOR, creator0);
const CREATOR1 = await database.createRecord(RECORD_TYPE_CREATOR, creator1);
const CREATOR2 = await database.createRecord(RECORD_TYPE_CREATOR, creator2);
const CREATOR3 = await database.createRecord(RECORD_TYPE_CREATOR, creator3);
const CREATOR4 = await database.createRecord(RECORD_TYPE_CREATOR, creator4);
const CREATOR5 = await database.createRecord(RECORD_TYPE_CREATOR, creator5);

const REQUESTER1 = new Requester(CREATOR0, creator0.fullName as string, creator0.nickname as string);
const REQUESTER2 = new Requester(CREATOR1, creator1.fullName as string, creator1.nickname as string);

const relation1: RecordData = { followerId: CREATOR0, followingId: CREATOR1 };
const relation2: RecordData = { followerId: CREATOR0, followingId: CREATOR2 };
const relation3: RecordData = { followerId: CREATOR1, followingId: CREATOR2 };
const relation4: RecordData = { followerId: CREATOR2, followingId: CREATOR3 };
const relation5: RecordData = { followerId: CREATOR3, followingId: CREATOR4 };
const relation6: RecordData = { followerId: CREATOR4, followingId: CREATOR5 };
const relation7: RecordData = { followerId: CREATOR5, followingId: CREATOR3 };

const RELATION1 = await database.createRecord(RECORD_TYPE_RELATION, relation1);
const RELATION2 = await database.createRecord(RECORD_TYPE_RELATION, relation2);

await database.createRecord(RECORD_TYPE_RELATION, relation3);
await database.createRecord(RECORD_TYPE_RELATION, relation4);
await database.createRecord(RECORD_TYPE_RELATION, relation5);
await database.createRecord(RECORD_TYPE_RELATION, relation6);
await database.createRecord(RECORD_TYPE_RELATION, relation7);

const QUERY_EXISTING_RELATION: RecordQuery = {
    followerId: { EQUALS: REQUESTER2.id },
    followingId: { EQUALS: CREATOR0 }
};

const QUERY_NON_EXISTING_RELATION: RecordQuery = {
    followerId: { EQUALS: johnDoe.id },
    followingId: { EQUALS: CREATOR1 }
};

const UNKNOWN_REQUESTER = johnDoe;

export
{
    CREATOR0, CREATOR1, CREATOR2, CREATOR3, CREATOR4, CREATOR5,
    QUERY_EXISTING_RELATION, QUERY_NON_EXISTING_RELATION,
    RECORD_TYPE_CREATOR, RECORD_TYPE_RELATION,
    RELATION1, RELATION2,
    REQUESTER1, REQUESTER2,
    RelationAlreadyExists, RelationData, SortOptions, UNKNOWN_REQUESTER,
    database, establish, explore, getFollowers, getFollowing
};

