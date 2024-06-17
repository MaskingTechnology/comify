
import { describe, expect, it } from 'vitest';

import validateRange from '^/domain/common/validateRange/feature';
import InvalidRange from '^/domain/common/validateRange/InvalidRange';

import { VALUES } from './fixtures';

describe('domain/common/validateRange', () =>
{
    it('should not accept invalid ranges', () =>
    {
        const test1 = () => validateRange(VALUES.RANGE.LIMIT_TOO_SMALL);
        const test2 = () => validateRange(VALUES.RANGE.LIMIT_TOO_BIG);
        const test3 = () => validateRange(VALUES.RANGE.OFFSET_TOO_SMALL);

        expect(test1).toThrow(InvalidRange);
        expect(test2).toThrow(InvalidRange);
        expect(test3).toThrow(InvalidRange);
    });

    it('should accept valid ranges', () =>
    {
        validateRange(VALUES.RANGE.LOWER_BOUNDS);
        validateRange(VALUES.RANGE.UPPER_BOUNDS);
    });
});
