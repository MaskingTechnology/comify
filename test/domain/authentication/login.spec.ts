
import { describe, expect, it } from 'vitest';
import { LOGINS, NICKNAMES, TooManySimilarNicknames, UnsupportedContentSize, UnsupportedMimeType, login } from './_fixtures/login.fixture';

describe('domain/authentication', () =>
{
    describe('.login(identity)', () =>
    {
        it('should login with an existing email', async () =>
        {
            const requester = await login(LOGINS.LOGIN_WITH_EXISTING_EMAIL);

            expect(requester.nickname).toBe(NICKNAMES.EXISTING_NICKNAME);
        });

        it('should register with an unknown nickname', async () =>
        {
            const requester = await login(LOGINS.REGISTER_WITH_UNKNOWN_NICKNAME);

            expect(requester.nickname).toBe(NICKNAMES.CREATED_FROM_FULL_NAME);
        });

        it('should register with a duplicate nickname', async () =>
        {
            const requester = await login(LOGINS.REGISTER_WITH_DUPLICATE_NICKNAME);

            expect(requester.nickname).toBe(NICKNAMES.DEDUPLICATED_NICKNAME);
        });

        it('should register with multiple occurrences of nickname', async () =>
        {
            const requester = await login(LOGINS.REGISTER_WITH_MULTIPLE_OCCURRENCES_NICKNAME);

            expect(requester.nickname).toBe(NICKNAMES.NEXT_OCCURRED_NICKNAME);
        });

        it('should NOT register with too many occurrences nickname', async () =>
        {
            const promise = login(LOGINS.REGISTER_WITH_TOO_MANY_SIMILAR_NICKNAME);

            expect(promise).rejects.toStrictEqual(new TooManySimilarNicknames());
        });

        it('should register with spaces in nickname', async () =>
        {
            const requester = await login(LOGINS.REGISTER_WITH_SPACED_NICKNAME);

            expect(requester.nickname).toBe(NICKNAMES.DESPACED_NICKNAME);
        });

        it('should register with underscores in nickname', async () =>
        {
            const requester = await login(LOGINS.REGISTER_WITH_UNDERSCORED_NICKNAME);

            expect(requester.nickname).toBe(NICKNAMES.DEUNDERSCORED_NICKNAME);
        });

        it('should register with spaces and underscores in nickname', async () =>
        {
            const requester = await login(LOGINS.REGISTER_WITH_SPACED_UNDERSCORED_NICKNAME);

            expect(requester.nickname).toBe(NICKNAMES.DESPACED_DEUNDERSCORED_NICKNAME);
        });
    });

    it('.login with a valid picture url', async () =>
    {
        const creator = await login(SIGNUPS.NAME_WITH_A_VALID_PICTURE_URL);

        expect(creator.nickName).toBe('Lange');
    });

    it('.login with an invalid picture mime type', async () =>
    {
        const creator = login(SIGNUPS.NAME_WITH_PICTURE_INVALID_MIME_TYPE);

        expect(creator).rejects.toStrictEqual(new UnsupportedMimeType());
    });

    it('.login with an invalid picture content size', async () =>
    {
        const creator = login(SIGNUPS.NAME_WITH_PICTURE_INVALID_SIZE);

        expect(creator).rejects.toStrictEqual(new UnsupportedContentSize());
    });
});
