
import { describe, expect, it } from 'vitest';

import validator from '^/integrations/validation/module';

import { VALIDATION_SCHEMES, VALUES } from './fixtures';

describe('integrations/validation/implementation', () =>
{
    describe('String values', () =>
    {
        it('should accept a valid string', () =>
        {
            const input = { string: 'abcd' };

            const result = validator.validate(input, VALIDATION_SCHEMES.STRING);

            expect(result.invalid).toBe(false);
        });

        it('should reject a missing required string', () =>
        {
            const input = { string: undefined };

            const result = validator.validate(input, VALIDATION_SCHEMES.STRING);
            const messages = result.messages;
            const message = messages.get('string');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_STRING);
        });

        it('should reject a value that is too short', () =>
        {
            const input = { string: 'abc' };

            const result = validator.validate(input, VALIDATION_SCHEMES.STRING);
            const messages = result.messages;
            const message = messages.get('string');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_STRING);
        });

        it('should reject a value that is too long', () =>
        {
            const input = { string: 'abcd ef' };

            const result = validator.validate(input, VALIDATION_SCHEMES.STRING);
            const messages = result.messages;
            const message = messages.get('string');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_STRING);
        });

        it('should reject a value that does not match a pattern', () =>
        {
            const input = { string: 'abcd 1' };

            const result = validator.validate(input, VALIDATION_SCHEMES.STRING);
            const messages = result.messages;
            const message = messages.get('string');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_STRING);
        });

        it('should reject a value that is not a string', () =>
        {
            const input = { string: true };

            const result = validator.validate(input, VALIDATION_SCHEMES.STRING);
            const messages = result.messages;
            const message = messages.get('string');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_STRING);
        });
    });

    describe('Number values', () =>
    {
        it('should accept a valid number', () =>
        {
            const input = { number: 10 };

            const result = validator.validate(input, VALIDATION_SCHEMES.NUMBER);

            expect(result.invalid).toBe(false);
        });

        it('should reject a missing required number', () =>
        {
            const input = { number: undefined };

            const result = validator.validate(input, VALIDATION_SCHEMES.NUMBER);
            const messages = result.messages;
            const message = messages.get('number');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_NUMBER);
        });

        it('should reject a value that is too small', () =>
        {
            const input = { number: 9 };

            const result = validator.validate(input, VALIDATION_SCHEMES.NUMBER);
            const messages = result.messages;
            const message = messages.get('number');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_NUMBER);
        });

        it('should reject a value that is too big', () =>
        {
            const input = { number: 21 };

            const result = validator.validate(input, VALIDATION_SCHEMES.NUMBER);
            const messages = result.messages;
            const message = messages.get('number');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_NUMBER);
        });

        it('should reject a value that is not a number', () =>
        {
            const input = { number: '10' };

            const result = validator.validate(input, VALIDATION_SCHEMES.NUMBER);
            const messages = result.messages;
            const message = messages.get('number');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_NUMBER);
        });
    });

    describe('Boolean values', () =>
    {
        it('should accept a valid boolean', () =>
        {
            const input = { boolean: true };

            const result = validator.validate(input, VALIDATION_SCHEMES.BOOLEAN);

            expect(result.invalid).toBe(false);
        });

        it('should reject a missing required boolean', () =>
        {
            const input = { boolean: undefined };

            const result = validator.validate(input, VALIDATION_SCHEMES.BOOLEAN);
            const messages = result.messages;
            const message = messages.get('boolean');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_BOOLEAN);
        });

        it('should reject a value that is not a boolean', () =>
        {
            const input = { boolean: 'true' };

            const result = validator.validate(input, VALIDATION_SCHEMES.BOOLEAN);
            const messages = result.messages;
            const message = messages.get('boolean');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_BOOLEAN);
        });
    });

    describe('Date values', () =>
    {
        it('should accept a valid date', () =>
        {
            const input = { date: new Date() };

            const result = validator.validate(input, VALIDATION_SCHEMES.DATE);

            expect(result.invalid).toBe(false);
        });

        it('should reject a missing required date', () =>
        {
            const input = { date: undefined };

            const result = validator.validate(input, VALIDATION_SCHEMES.DATE);
            const messages = result.messages;
            const message = messages.get('date');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_DATE);
        });

        it('should reject a value that is not a valid date', () =>
        {
            const input = { date: new Date('invalid') };

            const result = validator.validate(input, VALIDATION_SCHEMES.DATE);
            const messages = result.messages;
            const message = messages.get('date');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_DATE);
        });

        it('should reject a value that is not a date', () =>
        {
            const input = { date: '2021-01-01' };

            const result = validator.validate(input, VALIDATION_SCHEMES.DATE);
            const messages = result.messages;
            const message = messages.get('date');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_DATE);
        });
    });

    describe('UUID values', () =>
    {
        it('should accept a valid uuid', () =>
        {
            const input = { id: '123e4567-e89b-12d3-a456-426614174000' };

            const result = validator.validate(input, VALIDATION_SCHEMES.UUID);

            expect(result.invalid).toBe(false);
        });

        it('should reject a missing required uuid', () =>
        {
            const input = { id: undefined };

            const result = validator.validate(input, VALIDATION_SCHEMES.UUID);
            const messages = result.messages;
            const message = messages.get('id');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_ID);
        });

        it('should reject a value that is not a valid UUID', () =>
        {
            const input = { id: '123e' };

            const result = validator.validate(input, VALIDATION_SCHEMES.UUID);
            const messages = result.messages;
            const message = messages.get('id');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_ID);
        });

        it('should reject a value that is not a uuid', () =>
        {
            const input = { id: 123 };

            const result = validator.validate(input, VALIDATION_SCHEMES.UUID);
            const messages = result.messages;
            const message = messages.get('id');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_ID);
        });
    });

    describe('Email values', () =>
    {
        it('should accept a valid email', () =>
        {
            const input = { email: 'abc@def.com' };

            const result = validator.validate(input, VALIDATION_SCHEMES.EMAIL);

            expect(result.invalid).toBe(false);
        });

        it('should reject a missing required email', () =>
        {
            const input = { email: undefined };

            const result = validator.validate(input, VALIDATION_SCHEMES.EMAIL);
            const messages = result.messages;
            const message = messages.get('email');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_EMAIL);
        });

        it('should reject a value to be a valid email', () =>
        {
            const input = { email: 'abcd@' };

            const result = validator.validate(input, VALIDATION_SCHEMES.EMAIL);
            const messages = result.messages;
            const message = messages.get('email');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_EMAIL);
        });

        it('should reject a value that is too long', () =>
        {
            const input = { email: 'abcd'.repeat(80) + '@def.com' };

            const result = validator.validate(input, VALIDATION_SCHEMES.EMAIL);
            const messages = result.messages;
            const message = messages.get('email');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_EMAIL);
        });

        it('should reject a value that is not an email', () =>
        {
            const input = { email: 123 };

            const result = validator.validate(input, VALIDATION_SCHEMES.EMAIL);
            const messages = result.messages;
            const message = messages.get('email');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_EMAIL);
        });
    });

    describe('Url values', () =>
    {
        it('should reject an invalid url with protocol', () =>
        {
            const input = { url: 'https://this is an invalid url' };

            const result = validator.validate(input, VALIDATION_SCHEMES.URL_HTTPS_FTP);
            const messages = result.messages;
            const message = messages.get('url');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_URL);
        });

        it('should reject an url without protocol', () =>
        {
            const input = { url: 'example.com/folder/file.ext' };

            const result = validator.validate(input, VALIDATION_SCHEMES.URL_HTTPS_FTP);
            const messages = result.messages;
            const message = messages.get('url');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_URL);
        });

        it('should accept a valid url when no protocols are configured', () =>
        {
            const input = { url: 'someprotocol://example.com/folder/file.ext' };

            const result = validator.validate(input, VALIDATION_SCHEMES.URL_NO_PROTOCOL);

            expect(result.invalid).toBe(false);
        });

        it('should accept valid urls with configured protocols', () =>
        {
            const httpsInput = { url: 'https://example.com/folder/file.ext' };

            const httpResult = validator.validate(httpsInput, VALIDATION_SCHEMES.URL_HTTPS_FTP);

            const ftpInput = { url: 'ftp://example.com/folder/file.ext' };

            const ftpResult = validator.validate(ftpInput, VALIDATION_SCHEMES.URL_HTTPS_FTP);

            expect(httpResult.invalid).toBe(false);
            expect(ftpResult.invalid).toBe(false);
        });

        it('should reject an url with a protocol that is not configured', () =>
        {
            const httpInput = { url: 'http://example.com/folder/file.ext' };

            const result = validator.validate(httpInput, VALIDATION_SCHEMES.URL_HTTPS_FTP);
            const messages = result.messages;
            const message = messages.get('url');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_URL);
        });

        it('should reject an url that is too long', () =>
        {
            const input = { url: VALUES.TOO_LONG_URL };

            const result = validator.validate(input, VALIDATION_SCHEMES.URL_HTTPS_FTP);
            const messages = result.messages;
            const message = messages.get('url');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_URL);
        });
    });

    describe('Array values', () =>
    {
        it('should accept a valid array', () =>
        {
            const input = { list: ['abcde', 'abcd'] };

            const result = validator.validate(input, VALIDATION_SCHEMES.ARRAY);

            expect(result.invalid).toBe(false);
        });

        it('should reject a missing required array', () =>
        {
            const input = { list: undefined };

            const result = validator.validate(input, VALIDATION_SCHEMES.ARRAY);
            const messages = result.messages;
            const message = messages.get('list');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_LIST);
        });

        it('should reject an array that has too little items', () =>
        {
            const input = { list: [] };

            const result = validator.validate(input, VALIDATION_SCHEMES.ARRAY);
            const messages = result.messages;
            const message = messages.get('list');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_LIST);
        });

        it('should reject an array with too many items', () =>
        {
            const input = { list: ['abcde', 'abcd', 'xyz'] };

            const result = validator.validate(input, VALIDATION_SCHEMES.ARRAY);
            const messages = result.messages;
            const message = messages.get('list');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_LIST);
        });

        it('should reject an array with items that are too short', () =>
        {
            const input = { list: ['ab'] };

            const result = validator.validate(input, VALIDATION_SCHEMES.ARRAY);
            const messages = result.messages;
            const message = messages.get('list');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_LIST);
        });

        it('should reject an array with items that are too long', () =>
        {
            const input = { list: ['abcde', 'abcdef'] };

            const result = validator.validate(input, VALIDATION_SCHEMES.ARRAY);
            const messages = result.messages;
            const message = messages.get('list');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_LIST);
        });

        it('should reject a value that is not an array', () =>
        {
            const input = { list: 'abcde' };

            const result = validator.validate(input, VALIDATION_SCHEMES.ARRAY);
            const messages = result.messages;
            const message = messages.get('list');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(1);
            expect(message).toBe(VALUES.MESSAGES.INVALID_LIST);
        });
    });

    describe('Strict value', () =>
    {
        it('should reject data with unexpected fields', () =>
        {
            const input = { string: 'abcd', age: 10, length: 10 };

            const result = validator.validate(input, VALIDATION_SCHEMES.STRING);
            const messages = result.messages;
            const messageAge = messages.get('age');
            const messageLength = messages.get('length');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(2);
            expect(messageAge).toBe(VALUES.MESSAGES.INVALID_FIELD);
            expect(messageLength).toBe(VALUES.MESSAGES.INVALID_FIELD);
        });
    });

    describe('Optional values', () =>
    {
        it('should accept all missing optional values', () =>
        {
            const input = {};

            const result = validator.validate(input, VALIDATION_SCHEMES.OPTIONAL);

            expect(result.invalid).toBe(false);
        });

        it('should accept one optional value', () =>
        {
            const input = { number: 18 };

            const result = validator.validate(input, VALIDATION_SCHEMES.OPTIONAL);

            expect(result.invalid).toBe(false);
        });
    });

    describe('Mixed schema', () =>
    {
        it('should accept valid values', () =>
        {
            const input = {
                id: '123e4567-e89b-12d3-a456-426614174001',
                string: 'ABCD',
                number: 10,
                email: 'xyz@def.com',
                date: new Date(),
                boolean: false
            };

            const result = validator.validate(input, VALIDATION_SCHEMES.MIXED_SCHEMA);

            expect(result.invalid).toBe(false);
        });

        it('should reject invalid values', () =>
        {
            const input = {
                id: '123e4567-e89b-12d3-a456-426614174002',
                string: 'abcd',
                email: 'def@def.com',
                date: new Date(),
                boolean: 'false',
                list: ['abcd', 'abcdefghij']
            };

            const result = validator.validate(input, VALIDATION_SCHEMES.MIXED_SCHEMA);
            const messages = result.messages;
            const booleanMessage = messages.get('boolean');
            const listMessage = messages.get('list');

            expect(result.invalid).toBe(true);
            expect(messages.size).toBe(2);
            expect(booleanMessage).toBe(VALUES.MESSAGES.INVALID_BOOLEAN);
            expect(listMessage).toBe(VALUES.MESSAGES.INVALID_LIST);
        });
    });
});
