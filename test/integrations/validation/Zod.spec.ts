
import { expect, describe, it } from 'vitest';

import zod from '../../../src/integrations/validation/module';

import { stringValidation, uuidValidation, creator } from './_fixtures/Zod.fixtures';
import { ValidationError } from '../../../src/integrations/validation/definitions/errors.ts';

describe('Zod', () =>
{
    it('should invalidate using the String schema', () =>
    {
        const required = { name: undefined };
        const tooShort = { name: 'John' };
        const tooLong = { name: 'Johnny The Dutch' };
        const invalidPattern = { name: 'John Doe 1' };

        try
        {
            zod.validate(required, stringValidation);
        }
        catch (error: unknown)
        {
            if (error instanceof ValidationError)
            {
                const messages = error.messages;

                expect(messages.size).toBe(1);
                expect(messages.get('name')).toBe('Invalid name');
            }
        }

        try
        {
            zod.validate(tooShort, stringValidation);
        }
        catch (error: unknown)
        {
            if (error instanceof ValidationError)
            {
                const messages = error.messages;

                expect(messages.size).toBe(1);
                expect(messages.get('name')).toBe('Invalid name');
            }
        }

        try
        {
            zod.validate(tooLong, stringValidation);
        }
        catch (error: unknown)
        {
            if (error instanceof ValidationError)
            {
                const messages = error.messages;

                expect(messages.size).toBe(1);
                expect(messages.get('name')).toBe('Invalid name');
            }
        }

        try
        {
            zod.validate(invalidPattern, stringValidation);
        }
        catch (error: unknown)
        {
            if (error instanceof ValidationError)
            {
                const messages = error.messages;

                expect(messages.size).toBe(1);
                expect(messages.get('name')).toBe('Invalid name');
            }
        }
    });

    it('should validate simple schema', () =>
    {
        const data = {
            id: '123e4567-e89b-12d3-a456-426614174000',
            name: 'John'
        };

        zod.validate(data, uuidValidation);
    });

    it('should validate creator schema', () =>
    {
        const data = {
            id: '123e4567-e89b-12d3-a456-426614174000',
            name: 'John',
            email: 'bas@masking.tech',
            followerCount: 0,
            roles: ['admin', 'user', 'tester']
        };

        try
        {
            zod.validate(data, creator);
        }
        catch (error: unknown)
        {
            if (error instanceof ValidationError)
            {
                const messages = error.messages;

                expect(messages.size).toBe(1);
                expect(messages.get('roles')).toBe('Invalid roles');
            }
        }
    });
});
