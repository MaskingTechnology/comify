
import { describe, expect, it } from 'vitest';
import { CREATOR0, CREATOR1, REQUESTER1, REQUESTER2, RelationAlreadyExists, establish } from './_fixtures/relation.fixture';

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
        const relation = await establish(REQUESTER2, CREATOR0);

        expect(relation.id).toBeDefined();
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(REQUESTER1, CREATOR1);

        expect(promise).rejects.toStrictEqual(new RelationAlreadyExists);
    });
});
