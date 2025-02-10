
import { beforeEach, describe, expect, it } from 'vitest';

import fileStore, { FileNotFound } from '^/integrations/filestore';

import { FILES, FILE_STORES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await FILE_STORES.withFile();
});

describe('integrations/filestore/implementation', () =>
{
    describe('.hasFile(path)', () =>
    {
        it('should return true for existing files', async () =>
        {
            const result = await fileStore.hasFile(VALUES.FILENAMES.HELLO);
            expect(result).toBeTruthy();
        });

        it('should return false for non-existing files', async () =>
        {
            const result = await fileStore.hasFile(VALUES.FILENAMES.UNKNOWN);
            expect(result).toBeFalsy();
        });
    });

    describe('.readFile(path)', () =>
    {
        it('should read existing files', async () =>
        {
            const buffer = await fileStore.readFile(VALUES.FILENAMES.HELLO);
            expect(buffer.toString()).toEqual(VALUES.CONTENTS.HELLO);
        });

        it('should not read non-existing files', async () =>
        {
            const promise = fileStore.readFile(VALUES.FILENAMES.UNKNOWN);
            await expect(promise).rejects.toStrictEqual(new FileNotFound(VALUES.FILENAMES.UNKNOWN));
        });
    });

    describe('.writeFile(path)', () =>
    {
        it('should write files', async () =>
        {
            await fileStore.writeFile(VALUES.FILENAMES.GOODBYE, FILES.GOODBYE);

            const buffer = await fileStore.readFile(VALUES.FILENAMES.GOODBYE);
            expect(buffer).toEqual(FILES.GOODBYE);
        });

        it('should overwrite files', async () =>
        {
            await fileStore.writeFile(VALUES.FILENAMES.HELLO, FILES.GOODBYE);

            const buffer = await fileStore.readFile(VALUES.FILENAMES.HELLO);
            expect(buffer).toEqual(FILES.GOODBYE);
        });
    });

    describe('.deleteFile(path)', () =>
    {
        it('should delete existing files', async () =>
        {
            await fileStore.deleteFile(VALUES.FILENAMES.HELLO);

            const promise = fileStore.readFile(VALUES.FILENAMES.HELLO);
            await expect(promise).rejects.toStrictEqual(new FileNotFound(VALUES.FILENAMES.HELLO));
        });

        it('should not delete non-existing files', async () =>
        {
            const promise = fileStore.deleteFile(VALUES.FILENAMES.UNKNOWN);
            await expect(promise).rejects.toStrictEqual(new FileNotFound(VALUES.FILENAMES.UNKNOWN));
        });
    });
});
