
import { describe, expect, it } from 'vitest';

import validateRange, { InvalidRange } from '^/domain/common/validateRange';

import { VALUES } from './fixtures';

describe('domain/common/validateRange', () =>
{
    it('should not accept a too small limit', () =>
    {
        const execution = () => validateRange(VALUES.RANGE.LIMIT_TOO_SMALL);

        expect(execution).toThrow(InvalidRange);
    });

    it('should not accept a too big limit', () =>
    {
        const execution = () => validateRange(VALUES.RANGE.LIMIT_TOO_BIG);

        expect(execution).toThrow(InvalidRange);
    });

    it('should not accept a too small offset', () =>
    {
        const execution = () => validateRange(VALUES.RANGE.OFFSET_TOO_SMALL);

        expect(execution).toThrow(InvalidRange);
    });

    it('should accept valid lower bounds', () =>
    {
        validateRange(VALUES.RANGE.LOWER_BOUNDS);
    });

    it('should accept valid upper bounds', () =>
    {
        validateRange(VALUES.RANGE.UPPER_BOUNDS);
    });
});
