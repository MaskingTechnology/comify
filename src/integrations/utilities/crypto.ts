
import crypto from 'crypto';

function generateUUID(): string
{
    return crypto.randomUUID();
}

function hashFast(input: string): string
{
    return crypto.createHash('sha512').update(input, 'utf8').digest('hex');
}

export function generateHash(input: string): string
{
    return hashFast(input);
}

export function generateId(): string
{
    return generateUUID();
}

export function generateKey(): string
{
    const id1 = generateUUID();
    const id2 = generateUUID();
    const id3 = generateUUID();
    const id4 = generateUUID();

    return hashFast(id1 + id2 + id3 + id4);
}
