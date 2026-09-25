
import crypto from 'node:crypto';

export function generateUUID(): string
{
    return crypto.randomUUID();
}

export function generateHash(input: string): string
{
    return crypto.createHash('sha512').update(input, 'utf8').digest('hex');
}

export function generateKey(): string
{
    const id1 = generateUUID();
    const id2 = generateUUID();
    const id3 = generateUUID();
    const id4 = generateUUID();

    return generateHash(id1 + id2 + id3 + id4);
}
