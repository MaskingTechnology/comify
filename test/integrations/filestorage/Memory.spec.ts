
import { describe, expect, it } from 'vitest';
import
{
    FileNotFound,
    GOODBYE_FILE_BUFFER,
    GOODBYE_FILE_NAME,
    HELLO_FILE_CONTENT,
    HELLO_FILE_NAME,
    UNKNOWN_FILE_NAME,
    setUpMemoryFS
} from './_fixtures/Memory.fixture.js';

describe('MemoryFS', () =>
{
    describe('.hasFile(path)', () =>
    {
        it('should return true for existing files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            const hasFile = await fileStorage.hasFile(HELLO_FILE_NAME);

            expect(hasFile).toBe(true);
        });

        it('should return false for non-existing files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            const hasFile = await fileStorage.hasFile(UNKNOWN_FILE_NAME);

            expect(hasFile).toBe(false);
        });
    });

    describe('.readFile(path)', () =>
    {
        it('should read existing files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            const buffer = await fileStorage.readFile(HELLO_FILE_NAME);

            expect(buffer.toString()).toEqual(HELLO_FILE_CONTENT);
        });

        it('should not read non-existing files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            const readFile = async () => fileStorage.readFile(UNKNOWN_FILE_NAME);

            expect(readFile).rejects.toStrictEqual(new FileNotFound(UNKNOWN_FILE_NAME));
        });
    });

    describe('.writeFile(path)', () =>
    {
        it('should write files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            await fileStorage.writeFile(GOODBYE_FILE_NAME, GOODBYE_FILE_BUFFER);

            const buffer = await fileStorage.readFile(GOODBYE_FILE_NAME);

            expect(buffer).toEqual(GOODBYE_FILE_BUFFER);
        });

        it('should overwrite files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            await fileStorage.writeFile(HELLO_FILE_NAME, GOODBYE_FILE_BUFFER);

            const buffer = await fileStorage.readFile(HELLO_FILE_NAME);

            expect(buffer).toEqual(GOODBYE_FILE_BUFFER);
        });
    });

    describe('.deleteFile(path)', () =>
    {
        it('should delete existing files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            await fileStorage.deleteFile(HELLO_FILE_NAME);

            const readFile = async () => fileStorage.readFile(HELLO_FILE_NAME);

            expect(readFile).rejects.toStrictEqual(new FileNotFound(HELLO_FILE_NAME));
        });

        it('should not delete non-existing files', async () =>
        {
            const fileStorage = await setUpMemoryFS();

            const deleteFile = async () => fileStorage.deleteFile(UNKNOWN_FILE_NAME);

            expect(deleteFile).rejects.toStrictEqual(new FileNotFound(UNKNOWN_FILE_NAME));
        });
    });
});
