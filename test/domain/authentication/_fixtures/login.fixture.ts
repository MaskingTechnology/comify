
import login from '../../../../src/domain/authentication/login';
import { RECORD_TYPE } from '../../../../src/domain/creator/data/constants';
import TooManySimilarNicknames from '../../../../src/domain/creator/errors/TooManySimilarNicknames';
import { UnsupportedContentSize, UnsupportedMimeType } from '../../../../src/domain/image/errors';
import { Identity } from '../../../../src/integrations/authentication/module';
import database, { RecordData } from '../../../../src/integrations/database/module';
import filestorage from '../../../../src/integrations/filestorage/module.ts';

const NICKNAMES: Record<string, string> = {
    EXISTING_NICKNAME: 'ExistingNickname',
    CREATED_FROM_FULL_NAME: 'FirstName',
    DEDUPLICATED_NICKNAME: 'ExistingNickname_001',
    NEXT_OCCURRED_NICKNAME: 'FullNickname_007',
    DESPACED_NICKNAME: 'SpacedNickname',
    DEUNDERSCORED_NICKNAME: 'UnderscoreNickname',
    DESPACED_DEUNDERSCORED_NICKNAME: 'SpacedAndUnderscoredNickname'
};

await database.connect();
await filestorage.connect();

const creator0: RecordData = { fullName: 'ExistingName', nickname: NICKNAMES.EXISTING_NICKNAME, email: 'existing@mail.com', picture: undefined };
const creator1: RecordData = { fullName: 'fullName', nickname: 'FullNickname', email: 'fullname@mail.com', picture: undefined };
const creator2: RecordData = { fullName: 'fullName1', nickname: 'FullNickname_005', email: 'fullname1@mail.com', picture: undefined };
const creator3: RecordData = { fullName: 'fullName2', nickname: 'FullNickname_006', email: 'fullname2@mail.com', picture: undefined };
const creator4: RecordData = { fullName: 'fullNameTooMany', nickname: 'TooManyNickname', email: 'fullnametoomany@mail.com', picture: undefined };
const creator5: RecordData = { fullName: 'fullName1', nickname: 'TooManyNickname_999', email: 'fullnametoomany1@mail.com', picture: undefined };

await database.createRecord(RECORD_TYPE, creator0);
await database.createRecord(RECORD_TYPE, creator1);
await database.createRecord(RECORD_TYPE, creator2);
await database.createRecord(RECORD_TYPE, creator3);
await database.createRecord(RECORD_TYPE, creator4);
await database.createRecord(RECORD_TYPE, creator5);

const LOGINS: Record<string, Identity> =
{
    LOGIN_WITH_EXISTING_EMAIL: {
        name: creator0.fullName as string,
        nickname: NICKNAMES.EXISTING_NICKNAME,
        picture: undefined,
        email: 'existing@mail.com',
        email_verified: false
    },
    REGISTER_WITH_UNKNOWN_NICKNAME: {
        name: 'FirstName',
        nickname: undefined,
        picture: undefined,
        email: 'firstname@mail.com',
        email_verified: false
    },
    REGISTER_WITH_DUPLICATE_NICKNAME: {
        name: creator0.fullName as string,
        nickname: NICKNAMES.EXISTING_NICKNAME,
        picture: undefined,
        email: 'duplicatename@mail.com',
        email_verified: false
    },
    REGISTER_WITH_MULTIPLE_OCCURRENCES_NICKNAME: {
        name: creator1.fullName as string,
        nickname: 'FullNickname',
        picture: undefined,
        email: 'multipleoccurencename@mail.com',
        email_verified: false
    },
    REGISTER_WITH_TOO_MANY_SIMILAR_NICKNAME: {
        name: creator4.fullName as string,
        nickname: 'TooManyNickname',
        picture: undefined,
        email: 'toomanynickname@mail.com',
        email_verified: false
    },
    REGISTER_WITH_SPACED_NICKNAME: {
        name: creator0.fullName as string,
        nickname: 'Spaced Nickname',
        picture: undefined,
        email: 'spacedname@mail.com',
        email_verified: false
    },
    REGISTER_WITH_UNDERSCORED_NICKNAME: {
        name: creator0.fullName as string,
        nickname: 'Underscore_Nickname',
        picture: undefined,
        email: 'underscoredname@mail.com',
        email_verified: false
    },
    REGISTER_WITH_SPACED_UNDERSCORED_NICKNAME: {
        name: creator0.nickname as string,
        nickname: 'Spaced And_Underscored Nickname',
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
        picture: 'https://oeffelt.net/nederland/Nieuwe%20afbeelding.bmp',
        email: 'invalidmimetype@mail.com',
        email_verified: false
    },
    NAME_WITH_PICTURE_INVALID_SIZE: {
        name: 'InvalidPictureSize',
        nickname: 'InvalidPictureSizeNickName',
        picture: 'https://unsplash.com/photos/GW6ZgtQEwu4/download?ixid=M3wxMjA3fDB8MXxhbGx8OHx8fHx8fDJ8fDE3MDc0OTI2Mjd8&force=true',
        email: 'invalidpicturesize@mail.com',
        email_verified: false
    }
};

export { LOGINS, NICKNAMES, TooManySimilarNicknames, UnsupportedContentSize, UnsupportedMimeType, login };
