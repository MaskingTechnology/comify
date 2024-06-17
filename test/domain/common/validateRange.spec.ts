
import { describe, expect, it } from 'vitest';

import validateRange from '^/domain/common/validateRange/feature';
import InvalidRange from '^/domain/common/validateRange/InvalidRange';

import { VALUES } from './fixtures';

describe('domain/common/validateRange', () =>
{
    it('should not accept a too small limit', () =>
    {
        const result = () => validateRange(VALUES.RANGE.LIMIT_TOO_SMALL);

        expect(result).toThrow(InvalidRange);
    });

    it('should not accept a too big limit', () =>
    {
        const result = () => validateRange(VALUES.RANGE.LIMIT_TOO_BIG);

        expect(result).toThrow(InvalidRange);
    });

    it('should not accept a too small offset', () =>
    {
        const result = () => validateRange(VALUES.RANGE.OFFSET_TOO_SMALL);

        expect(result).toThrow(InvalidRange);
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
