
import crypto from 'crypto';

export function generateKey()
{
    return crypto.randomUUID();
}
