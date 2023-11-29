
import { describe, expect, it } from 'vitest';

import {
    HELLO_FILE_NAME, HELLO_FILE_CONTENT,
    GOODBYE_FILE_NAME, GOODBYE_FILE_BUFFER,
    UNKNOWN_FILE_NAME,
    createMemoryFS, FileNotFound
} from './_fixtures/MemoryFS.fixture.js';

describe('MemoryFS', () =>
{
    describe('.readFile(path)', () =>
    {
        it('should read existing files', async () =>
        {
            const fileStorage = await createMemoryFS();

            const buffer = await fileStorage.readFile(HELLO_FILE_NAME);

            expect(buffer.toString()).toEqual(HELLO_FILE_CONTENT);
        });

        it('should not read non-existing files', async () =>
        {
            const fileStorage = await createMemoryFS();

            const readFile = async () => fileStorage.readFile(UNKNOWN_FILE_NAME);

            expect(readFile).rejects.toStrictEqual(new FileNotFound(UNKNOWN_FILE_NAME));
        });
    });

    describe('.storeFile(path)', () =>
    {
        it('should store files', async () =>
        {
            const fileStorage = await createMemoryFS();

            await fileStorage.storeFile(GOODBYE_FILE_NAME, GOODBYE_FILE_BUFFER);

            const buffer = await fileStorage.readFile(GOODBYE_FILE_NAME);

            expect(buffer).toEqual(GOODBYE_FILE_BUFFER);
        });
    });

    describe('.deleteFile(path)', () =>
    {
        it('should delete existing files', async () =>
        {
            const fileStorage = await createMemoryFS();

            await fileStorage.deleteFile(HELLO_FILE_NAME);

            const readFile = async () => fileStorage.readFile(HELLO_FILE_NAME);

            expect(readFile).rejects.toStrictEqual(new FileNotFound(HELLO_FILE_NAME));
        });

        it('should not delete non-existing files', async () =>
        {
            const fileStorage = await createMemoryFS();

            const deleteFile = async () => fileStorage.deleteFile(UNKNOWN_FILE_NAME);

            expect(deleteFile).rejects.toStrictEqual(new FileNotFound(UNKNOWN_FILE_NAME));
        });
    });
});
