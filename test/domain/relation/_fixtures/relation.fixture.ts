
import Requester from '../../../../src/domain/authentication/Requester.ts';
import { RECORD_TYPE as RECORD_TYPE_CREATOR } from '../../../../src/domain/creator/data/constants';
import RelationData from '../../../../src/domain/relation/data/RelationData';
import { RECORD_TYPE as RECORD_TYPE_RELATION } from '../../../../src/domain/relation/data/constants';
import RelationAlreadyExists from '../../../../src/domain/relation/errors/RelationAlreadyExists';
import establish from '../../../../src/domain/relation/establish';
import getFollowers from '../../../../src/domain/relation/getFollowers';
import getFollowing from '../../../../src/domain/relation/getFollowing';
import database, { RecordData } from '../../../../src/integrations/database/module';

await database.connect();

const creator0: RecordData = { fullName: 'John Doe', nickname: 'Doedel', email: 'john.doe@mail.com', portraitId: undefined };
const creator1: RecordData = { fullName: 'Peter Pan', nickname: 'Panic', email: 'peterpan@mail.com', portraitId: undefined };
const creator2: RecordData = { fullName: 'Bas Bax', nickname: 'Baxel', email: 'basbax@mail.com', portraitId: undefined };

const CREATOR0 = await database.createRecord(RECORD_TYPE_CREATOR, creator0);
const CREATOR1 = await database.createRecord(RECORD_TYPE_CREATOR, creator1);
const CREATOR2 = await database.createRecord(RECORD_TYPE_CREATOR, creator2);

const REQUESTER1 = new Requester(CREATOR0, creator0.fullName as string, creator0.nickname as string);
const REQUESTER2 = new Requester(CREATOR1, creator1.fullName as string, creator1.nickname as string);

const relation1: RecordData = { followerId: CREATOR0, followingId: CREATOR1 };
const relation2: RecordData = { followerId: CREATOR0, followingId: CREATOR2 };
const relation3: RecordData = { followerId: CREATOR1, followingId: CREATOR2 };

const RELATION1 = await database.createRecord(RECORD_TYPE_RELATION, relation1);
const RELATION2 = await database.createRecord(RECORD_TYPE_RELATION, relation2);

await database.createRecord(RECORD_TYPE_RELATION, relation3);

export { CREATOR0, CREATOR1, CREATOR2, RELATION1, RELATION2, REQUESTER1, REQUESTER2, RelationAlreadyExists, RelationData, establish, getFollowers, getFollowing };

