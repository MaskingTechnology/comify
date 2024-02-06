
import { expect, describe, it } from 'vitest';

import zod from '../../../src/integrations/validation/module';

import { SCHEMAS, ERRORS } from './_fixtures/Zod.fixtures';

describe('Zod', () =>
{
    describe('should validate using the String schema', () =>
    {
        it('should validate name', () =>
        {
            const input = { name: 'John' };
            zod.validate(input, SCHEMAS.STRING);
        });

        it('should require name', () =>
        {
            const input = { name: undefined };
            const test = () => zod.validate(input, SCHEMAS.STRING);

            expect(test).toThrow(ERRORS.STRING);
        });

        it('should require name to be at least 5 characters', () =>
        {
            const input = { name: 'Jon' };
            const test = () => zod.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });

        it('should require name to be at most 7 characters', () =>
        {
            const input = { name: 'John Doe' };
            const test = () => zod.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });

        it('should require name to match the pattern', () =>
        {
            const input = { name: 'John 1' };
            const test = () => zod.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });

        it('should require name to be a string', () =>
        {
            const input = { name: true };
            const test = () => zod.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });
    });

    describe('should validate using the Number schema', () =>
    {
        it('should validate followerCount', () =>
        {
            const input = { followerCount: 10 };
            zod.validate(input, SCHEMAS.NUMBER);
        });

        it('should require followerCount', () =>
        {
            const input = { followerCount: undefined };
            const test = () => zod.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });

        it('should require followerCount to be at least 10', () =>
        {
            const input = { followerCount: 9 };
            const test = () => zod.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });

        it('should require followerCount to be at most 20', () =>
        {
            const input = { followerCount: 21 };
            const test = () => zod.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });

        it('should the followerCount to be a number', () =>
        {
            const input = { followerCount: '10' };
            const test = () => zod.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });
    });

    describe('should validate using the Boolean schema', () =>
    {
        it('should validate isActive', () =>
        {
            const input = { isActive: true };
            zod.validate(input, SCHEMAS.BOOLEAN);
        });

        it('should require isActive', () =>
        {
            const input = { isActive: undefined };
            const test = () => zod.validate(input, SCHEMAS.BOOLEAN);

            expect(test).toThrowError(ERRORS.BOOLEAN);
        });

        it('should require isActive to be a boolean', () =>
        {
            const input = { isActive: 'true' };
            const test = () => zod.validate(input, SCHEMAS.BOOLEAN);

            expect(test).toThrowError(ERRORS.BOOLEAN);
        });
    });

    describe('should validate using the Date schema', () =>
    {
        it('should validate createdAt', () =>
        {
            const input = { createdAt: new Date() };
            zod.validate(input, SCHEMAS.DATE);
        });

        it('should require createdAt', () =>
        {
            const input = { createdAt: undefined };
            const test = () => zod.validate(input, SCHEMAS.DATE);

            expect(test).toThrowError(ERRORS.DATE);
        });

        it('should require createdAt to be a date', () =>
        {
            const input = { createdAt: '2021-01-01' };
            const test = () => zod.validate(input, SCHEMAS.DATE);

            expect(test).toThrowError(ERRORS.DATE);
        });

        it('should require createdAt to be a valid date', () =>
        {
            const input = { createdAt: new Date('invalid') };
            const test = () => zod.validate(input, SCHEMAS.DATE);

            expect(test).toThrowError(ERRORS.DATE);
        });

        it('should require createdAt to be a valid date', () =>
        {
            const input = { createdAt: true };
            const test = () => zod.validate(input, SCHEMAS.DATE);

            expect(test).toThrowError(ERRORS.DATE);
        });
    });

    describe('should validate using the UUID schema', () =>
    {
        it('should validate id', () =>
        {
            const input = { id: '123e4567-e89b-12d3-a456-426614174000' };
            zod.validate(input, SCHEMAS.UUID);
        });

        it('should require id', () =>
        {
            const input = { id: undefined };
            const test = () => zod.validate(input, SCHEMAS.UUID);

            expect(test).toThrowError(ERRORS.UUID);
        });

        it('should require id to be a valid UUID', () =>
        {
            const input = { id: '123e' };
            const test = () => zod.validate(input, SCHEMAS.UUID);

            expect(test).toThrowError(ERRORS.UUID);
        });

        it('should require id to be a string', () =>
        {
            const input = { id: 123 };
            const test = () => zod.validate(input, SCHEMAS.UUID);

            expect(test).toThrowError(ERRORS.UUID);
        });
    });

    describe('should validate using the Email schema', () =>
    {
        it('should validate email', () =>
        {
            const input = { email: 'john@doe.com' };
            zod.validate(input, SCHEMAS.EMAIL);
        });

        it('should require email', () =>
        {
            const input = { email: undefined };
            const test = () => zod.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });

        it('should require email to be a valid email', () =>
        {
            const input = { email: 'john' };
            const test = () => zod.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });

        it('should require email to be at most 320 characters', () =>
        {
            const input = { email: 'john'.repeat(80) + '@doe.com' };
            const test = () => zod.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });

        it('should require email to be a string', () =>
        {
            const input = { email: 123 };
            const test = () => zod.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });
    });

    describe('should validate using the Array schema', () =>
    {
        it('should validate roles', () =>
        {
            const input = { roles: ['admin', 'user'] };
            zod.validate(input, SCHEMAS.ARRAY);
        });

        it('should require roles', () =>
        {
            const input = { roles: undefined };
            const test = () => zod.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should require roles to be an array', () =>
        {
            const input = { roles: 'admin' };
            const test = () => zod.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should require roles to be at least 1', () =>
        {
            const input = { roles: [] };
            const test = () => zod.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should require roles to be at most 2', () =>
        {
            const input = { roles: ['admin', 'user', 'guest'] };
            const test = () => zod.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should require roles to be at least 3 characters', () =>
        {
            const input = { roles: ['ad'] };
            const test = () => zod.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should require roles to be at most 5 characters', () =>
        {
            const input = { roles: ['admin', 'guestt'] };
            const test = () => zod.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });
    });

    describe('should not accept additional fields', () =>
    {
        it('should identify the additional fields', () =>
        {
            const input = { name: 'John', age: 10, length: 10 };
            const test = () => zod.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.ADDITIONAL_FIELDS);
        });
    });

    describe('should validate using the Optional schema', () =>
    {
        it('should allow all missing fields', () =>
        {
            const input = {};
            zod.validate(input, SCHEMAS.OPTIONAL);
        });

        it('should allow name to be missing', () =>
        {
            const input = { age: 18 };
            zod.validate(input, SCHEMAS.OPTIONAL);
        });

        it('should allow age to be missing', () =>
        {
            const input = { name: 'John' };
            zod.validate(input, SCHEMAS.OPTIONAL);
        });
    });

    describe('should validate using the Creator schema', () =>
    {
        it('should validate creator', () =>
        {
            const input = {
                id: '123e4567-e89b-12d3-a456-426614174000',
                name: 'John',
                nickname: 'Johnny',
                email: 'john@doe.com',
                createdAt: new Date(),
                popularity: 10,
                postCount: 10,
                followerCount: 10,
                followingCount: 10
            };

            zod.validate(input, SCHEMAS.CREATOR);
        });
    });
});
