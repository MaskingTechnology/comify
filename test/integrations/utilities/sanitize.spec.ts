
import { describe, expect, it } from 'vitest';

import { sanitize } from '^/integrations/utilities/sanitize';

import { VALUES } from './fixtures';

describe('integrations/sanitization/implementation', () =>
{
    it('should leave non-string values unchanged', () =>
    {
        const result = sanitize(VALUES.INPUT.NON_STRING_VALUES);

        expect(result).toEqual(VALUES.OUTPUT.NON_STRING_VALUES);
    });

    it('should sanitize large HTML strings', () =>
    {
        const result = sanitize({ large: VALUES.INPUT.LARGE_HTML_STRING });

        expect(result).toEqual({ large: VALUES.OUTPUT.LARGE_HTML_STRING });
    });

    it('should NOT sanitize nested objects', () =>
    {
        const result = sanitize(VALUES.INPUT.NESTED_OBJECT);

        expect(result).toEqual(VALUES.OUTPUT.NESTED_OBJECT);
    });

    it('should NOT sanitize string arrays', () =>
    {
        const result = sanitize(VALUES.INPUT.OBJECT_WITH_STRING_ARRAY);

        expect(result).toEqual(VALUES.OUTPUT.OBJECT_WITH_STRING_ARRAY);
    });
});
