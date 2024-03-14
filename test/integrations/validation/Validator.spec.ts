
import { describe, expect, it } from 'vitest';
import { ERRORS, SCHEMAS, TOO_LONG_URL, validator } from './_fixtures/Validator.fixtures';

describe('Validator', () =>
{
    describe('String values', () =>
    {
        it('should accept a valid string', () =>
        {
            const input = { string: 'abcd' };
            validator.validate(input, SCHEMAS.STRING);
        });

        it('should reject a missing required string', () =>
        {
            const input = { string: undefined };
            const test = () => validator.validate(input, SCHEMAS.STRING);

            expect(test).toThrow(ERRORS.STRING);
        });

        it('should reject a value that is too short', () =>
        {
            const input = { string: 'abc' };
            const test = () => validator.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });

        it('should reject a value that is too long', () =>
        {
            const input = { string: 'abcd ef' };
            const test = () => validator.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });

        it('should reject a value that does not match a pattern', () =>
        {
            const input = { string: 'abcd 1' };
            const test = () => validator.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });

        it('should reject a value that is not a string', () =>
        {
            const input = { string: true };
            const test = () => validator.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.STRING);
        });
    });

    describe('Number values', () =>
    {
        it('should accept a valid number', () =>
        {
            const input = { number: 10 };
            validator.validate(input, SCHEMAS.NUMBER);
        });

        it('should reject a missing required number', () =>
        {
            const input = { number: undefined };
            const test = () => validator.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });

        it('should reject a value that is too small', () =>
        {
            const input = { number: 9 };
            const test = () => validator.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });

        it('should reject a value that is too big', () =>
        {
            const input = { number: 21 };
            const test = () => validator.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });

        it('should reject a value that is not a number', () =>
        {
            const input = { number: '10' };
            const test = () => validator.validate(input, SCHEMAS.NUMBER);

            expect(test).toThrowError(ERRORS.NUMBER);
        });
    });

    describe('Boolean values', () =>
    {
        it('should accept a valid boolean', () =>
        {
            const input = { boolean: true };
            validator.validate(input, SCHEMAS.BOOLEAN);
        });

        it('should reject a missing required boolean', () =>
        {
            const input = { boolean: undefined };
            const test = () => validator.validate(input, SCHEMAS.BOOLEAN);

            expect(test).toThrowError(ERRORS.BOOLEAN);
        });

        it('should reject a value that is not a boolean', () =>
        {
            const input = { boolean: 'true' };
            const test = () => validator.validate(input, SCHEMAS.BOOLEAN);

            expect(test).toThrowError(ERRORS.BOOLEAN);
        });
    });

    describe('Date values', () =>
    {
        it('should accept a valid date', () =>
        {
            const input = { date: new Date() };
            validator.validate(input, SCHEMAS.DATE);
        });

        it('should reject a missing required date', () =>
        {
            const input = { date: undefined };
            const test = () => validator.validate(input, SCHEMAS.DATE);

            expect(test).toThrowError(ERRORS.DATE);
        });

        it('should reject a value that is not a valid date', () =>
        {
            const input = { date: new Date('invalid') };
            const test = () => validator.validate(input, SCHEMAS.DATE);

            expect(test).toThrowError(ERRORS.DATE);
        });

        it('should reject a value that is not a date', () =>
        {
            const input = { date: '2021-01-01' };
            const test = () => validator.validate(input, SCHEMAS.DATE);

            expect(test).toThrowError(ERRORS.DATE);
        });
    });

    describe('UUID values', () =>
    {
        it('should accept a valid uuid', () =>
        {
            const input = { id: '123e4567-e89b-12d3-a456-426614174000' };
            validator.validate(input, SCHEMAS.UUID);
        });

        it('should reject a missing required uuid', () =>
        {
            const input = { id: undefined };
            const test = () => validator.validate(input, SCHEMAS.UUID);

            expect(test).toThrowError(ERRORS.UUID);
        });

        it('should reject a value that is not a valid UUID', () =>
        {
            const input = { id: '123e' };
            const test = () => validator.validate(input, SCHEMAS.UUID);

            expect(test).toThrowError(ERRORS.UUID);
        });

        it('should reject a value that is not a uuid', () =>
        {
            const input = { id: 123 };
            const test = () => validator.validate(input, SCHEMAS.UUID);

            expect(test).toThrowError(ERRORS.UUID);
        });
    });

    describe('Email values', () =>
    {
        it('should accept a valid email', () =>
        {
            const input = { email: 'abc@def.com' };
            validator.validate(input, SCHEMAS.EMAIL);
        });

        it('should reject a missing required email', () =>
        {
            const input = { email: undefined };
            const test = () => validator.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });

        it('should reject a value to be a valid email', () =>
        {
            const input = { email: 'abcd@' };
            const test = () => validator.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });

        it('should reject a value that is too long', () =>
        {
            const input = { email: 'abcd'.repeat(80) + '@def.com' };
            const test = () => validator.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });

        it('should reject a value that is not an email', () =>
        {
            const input = { email: 123 };
            const test = () => validator.validate(input, SCHEMAS.EMAIL);

            expect(test).toThrowError(ERRORS.EMAIL);
        });
    });

    describe('Url values', () =>
    {
        it('should reject an invalid url with protocol', () =>
        {
            const input = { url: 'https://this is an invalid url' };
            const test = () => validator.validate(input, SCHEMAS.URL_HTTPS_FTP);

            expect(test).toThrowError(ERRORS.URL);
        });

        it('should reject an url without protocol', () =>
        {
            const input = { url: 'example.com/folder/file.ext' };
            const test = () => validator.validate(input, SCHEMAS.URL_HTTPS_FTP);

            expect(test).toThrowError(ERRORS.URL);
        });

        it('should accept a valid url when no protocols are configured', () =>
        {
            const input = { url: 'someprotocol://example.com/folder/file.ext' };
            const result = validator.validate(input, SCHEMAS.URL_NO_PROTOCOL);

            expect(result).toBeUndefined();
        });

        it('should accept valid urls with configured protocols', () =>
        {
            const httpsInput = { url: 'https://example.com/folder/file.ext' };
            const httpsResult = validator.validate(httpsInput, SCHEMAS.URL_HTTPS_FTP);

            expect(httpsResult).toBeUndefined();

            const ftpInput = { url: 'ftp://example.com/folder/file.ext' };
            const ftpResult = validator.validate(ftpInput, SCHEMAS.URL_HTTPS_FTP);

            expect(ftpResult).toBeUndefined();
        });

        it('should reject an url with a protocol that is not configured', () =>
        {
            const httpInput = { url: 'http://example.com/folder/file.ext' };
            const test = () => validator.validate(httpInput, SCHEMAS.URL_HTTPS_FTP);

            expect(test).toThrowError(ERRORS.URL);
        });

        it('should reject an url that is too long', () =>
        {
            const input = { url: TOO_LONG_URL };
            const test = () => validator.validate(input, SCHEMAS.URL_NO_PROTOCOL);

            expect(test).toThrowError(ERRORS.URL);
        });
    });

    describe('Array values', () =>
    {
        it('should accept a valid array', () =>
        {
            const input = { list: ['abcde', 'abcd'] };
            validator.validate(input, SCHEMAS.ARRAY);
        });

        it('should reject a missing required array', () =>
        {
            const input = { list: undefined };
            const test = () => validator.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should reject an array that has too little items', () =>
        {
            const input = { list: [] };
            const test = () => validator.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should reject an array with too many items', () =>
        {
            const input = { list: ['abcde', 'abcd', 'xyz'] };
            const test = () => validator.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should reject an array with items that are too short', () =>
        {
            const input = { list: ['ab'] };
            const test = () => validator.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should reject an array with items that are too long', () =>
        {
            const input = { list: ['abcde', 'abcdef'] };
            const test = () => validator.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });

        it('should reject a value that is not an array', () =>
        {
            const input = { list: 'abcde' };
            const test = () => validator.validate(input, SCHEMAS.ARRAY);

            expect(test).toThrowError(ERRORS.ARRAY);
        });
    });

    describe('Strict value', () =>
    {
        it('should reject data with unexpected fields', () =>
        {
            const input = { string: 'abcd', age: 10, length: 10 };
            const test = () => validator.validate(input, SCHEMAS.STRING);

            expect(test).toThrowError(ERRORS.ADDITIONAL_FIELDS);
        });
    });

    describe('Optional values', () =>
    {
        it('should accept all missing optional values', () =>
        {
            const input = {};
            validator.validate(input, SCHEMAS.OPTIONAL);
        });

        it('should accept one optional value', () =>
        {
            const input = { number: 18 };
            validator.validate(input, SCHEMAS.OPTIONAL);
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

            validator.validate(input, SCHEMAS.MIXED_SCHEMA);
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

            const test = () => validator.validate(input, SCHEMAS.MIXED_SCHEMA);

            expect(test).toThrowError(ERRORS.MIXED_SCHEMA);
        });
    });
});
