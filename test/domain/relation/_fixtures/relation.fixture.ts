
import database, { RecordData } from '../../../../src/integrations/database/module';

import { RECORD_TYPE as RECORD_TYPE_CREATOR } from '../../../../src/domain/creator/data/constants';
import RelationData from '../../../../src/domain/relation/data/RelationData';
import { RECORD_TYPE as RECORD_TYPE_RELATION } from '../../../../src/domain/relation/data/constants';
import RelationAlreadyExists from '../../../../src/domain/relation/errors/RelationAlreadyExists';
import establish from '../../../../src/domain/relation/establish';
import getFollowers from '../../../../src/domain/relation/getFollowers';
import getFollowing from '../../../../src/domain/relation/getFollowing';

await database.connect();

const creator0: RecordData = { fullName: 'John Doe', nickname: 'Doedel', email: 'john.doe@mail.com', picture: undefined };
const creator1: RecordData = { fullName: 'Peter Pan', nickname: 'Panic', email: 'peterpan@mail.com', picture: undefined };

const CREATOR0 = await database.createRecord(RECORD_TYPE_CREATOR, creator0);
const CREATOR1 = await database.createRecord(RECORD_TYPE_CREATOR, creator1);

const relation: RecordData = { followerId: CREATOR0, followingId: CREATOR1 };

const RELATION = await database.createRecord(RECORD_TYPE_RELATION, relation);

export { CREATOR0, CREATOR1, RELATION, RelationAlreadyExists, RelationData, establish, getFollowers, getFollowing };

