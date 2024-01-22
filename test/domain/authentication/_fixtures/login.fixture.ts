
import database from '../../../../src/integrations/database/module';

import { RecordData } from '../../../../src/integrations/database/module';
import { Identity } from '../../../../src/integrations/authentication/module';

const RECORD_TYPE_CREATOR = 'creator';
const NICKNAMES: Record<string, string> = {
    EXISTING_NICKNAME: 'ExistingNickName',
    NON_EXISTING_NICKNAME: 'FirstName'
};

await database.connect('', 'test');

const creator: RecordData = { fullName: 'ExistingName', nickName: NICKNAMES.EXISTING_NICKNAME, email: 'existing@mail.com', picture: undefined };

await database.createRecord(RECORD_TYPE_CREATOR, creator);

const SIGNUPS: Record<string, Identity> = {
    NAME_NICKNAME_NOT_EXISTING: {
        name: 'FirstName',
        nickname: undefined,
        picture: undefined,
        email: 'firstname@mail.com',
        email_verified: false
    },
    NAME_NICKNAME_EXISTING: {
        name: 'ExistingName',
        nickname: 'ExistingNickName',
        picture: undefined,
        email: 'existing@mail.com',
        email_verified: false
    }
};

export { NICKNAMES, SIGNUPS };
