
import database, { RecordData } from '../../../../src/integrations/database/module';
import filestorage from '../../../../src/integrations/filestorage/module.ts';
import { Identity } from '../../../../src/integrations/authentication/module';

import { TooManySimilarNickNames } from '../../../../src/domain/creator/errors';
import { UnsupportedContentSize, UnsupportedMimeType } from '../../../../src/domain/image/errors';
import login from '../../../../src/domain/authentication/login';
import { RECORD_TYPE } from '../../../../src/domain/creator/data/constants';

const NICKNAMES: Record<string, string> = {
    EXISTING_NICKNAME: 'ExistingNickName',
    NON_EXISTING_NICKNAME: 'FirstName',
    NAME_DUPLICATE_NICKNAME: 'ExistingNickName_001',
    NAME_SPACED_NICKNAME: 'SpacedNickName',
    NAME_UNDERSCORE_NICKNAME: 'UnderscoreNickName',
    NAME_SPACES_UNDERSCORES_NICKNAME: 'SpacedandUnderscoredNickName',
    NAME_MULTIPLE_OCCURENCES_NICKNAME: 'FullNickName_007'
};

await database.connect();
await filestorage.connect();

const creator0: RecordData = { fullName: 'ExistingName', nickName: NICKNAMES.EXISTING_NICKNAME, email: 'existing@mail.com', picture: undefined };
const creator1: RecordData = { fullName: 'fullName', nickName: 'FullNickName', email: 'fullname@mail.com', picture: undefined };
const creator2: RecordData = { fullName: 'fullName1', nickName: 'FullNickName_005', email: 'fullname1@mail.com', picture: undefined };
const creator3: RecordData = { fullName: 'fullName2', nickName: 'FullNickName_006', email: 'fullname2@mail.com', picture: undefined };
const creator4: RecordData = { fullName: 'fullNameTooMany', nickName: 'TooManyNickName', email: 'fullnametoomany@mail.com', picture: undefined };
const creator5: RecordData = { fullName: 'fullName1', nickName: 'TooManyNickName_999', email: 'fullnametoomany1@mail.com', picture: undefined };

await database.createRecord(RECORD_TYPE, creator0);
await database.createRecord(RECORD_TYPE, creator1);
await database.createRecord(RECORD_TYPE, creator2);
await database.createRecord(RECORD_TYPE, creator3);
await database.createRecord(RECORD_TYPE, creator4);
await database.createRecord(RECORD_TYPE, creator5);

const SIGNUPS: Record<string, Identity> = {
    NAME_NICKNAME_NOT_EXISTING: {
        name: 'FirstName',
        nickname: undefined,
        picture: undefined,
        email: 'firstname@mail.com',
        email_verified: false
    },
    NAME_NICKNAME_EXISTING: {
        name: creator0.fullName as string,
        nickname: NICKNAMES.EXISTING_NICKNAME,
        picture: undefined,
        email: 'existing@mail.com',
        email_verified: false
    },
    NAME_DUPLICATE_NICKNAME: {
        name: creator0.fullName as string,
        nickname: NICKNAMES.EXISTING_NICKNAME,
        picture: undefined,
        email: 'duplicatename@mail.com',
        email_verified: false
    },
    NAME_WITH_SPACES_NICKNAME: {
        name: creator0.fullName as string,
        nickname: 'Spaced Nick Name',
        picture: undefined,
        email: 'spacedname@mail.com',
        email_verified: false
    },
    NAME_WITH_UNDERSCORES_NICKNAME: {
        name: creator0.fullName as string,
        nickname: 'Underscore_Nick_Name',
        picture: undefined,
        email: 'underscoredname@mail.com',
        email_verified: false
    },
    NAME_WITH_SPACES_UNDERSCORES_NICKNAME: {
        name: creator0.nickName as string,
        nickname: 'Spaced and_Underscored Nick_Name',
        picture: undefined,
        email: 'spacedunderscoredname@mail.com',
        email_verified: false
    },
    NAME_WITH_MULTIPLE_OCCURENCES_NICKNAME: {
        name: creator1.fullName as string,
        nickname: 'FullNickName',
        picture: undefined,
        email: 'multipleoccurencename@mail.com',
        email_verified: false
    },
    NAME_WITH_TOO_MANY_SIMILAR_NICKNAME: {
        name: creator4.fullName as string,
        nickname: 'TooManyNickName',
        picture: undefined,
        email: 'toomanynickname@mail.com',
        email_verified: false
    },
    NAME_WITH_A_VALID_PICTURE_URL: {
        name: 'Peter van Vliet',
        nickname: 'Lange',
        picture: 'https://masking.tech/images/peter.jpg',
        email: 'peter@masking.tech',
        email_verified: false
    },
    NAME_WITH_PICTURE_INVALID_MIME_TYPE: {
        name: 'InvalidPictureMimeType',
        nickname: 'InvalidPictureMimeTypeNickName',
        picture: 'https://www.blikoplisse.nl/images/familieberichten/240208_Bijnsdorp-Berg-1.jpg',
        email: 'invalidmimetype@mail.com',
        email_verified: false
    },
    NAME_WITH_PICTURE_INVALID_SIZE: {
        name: 'InvalidPictureSize',
        nickname: 'InvalidPictureSizeNickName',
        picture: 'https://www.blikoplisse.nl/images/familieberichten/240208_Bijnsdorp-Berg-1.jpg',
        email: 'invalidpicturesize@mail.com',
        email_verified: false
    }
};

export { TooManySimilarNickNames, UnsupportedContentSize, UnsupportedMimeType, login, NICKNAMES, SIGNUPS };
