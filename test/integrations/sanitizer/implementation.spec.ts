
import { describe, expect, it } from 'vitest';

import sanitizer from '^/integrations/sanitizer/module';

import { VALUES } from './fixtures';

describe('integrations/validation/implementation', () =>
{
    describe('Sanitize', () =>
    {
        it('should leave non-string values unchanged', () =>
        {
            const result = sanitizer.sanitize(VALUES.INPUT.NON_STRING_VALUES);

            expect(result).toEqual(VALUES.OUTPUT.NON_STRING_VALUES);
        });

        it('should sanitize large HTML strings', () =>
        {
            const result = sanitizer.sanitize({ large: VALUES.INPUT.LARGE_HTML_STRING });

            expect(result).toEqual({ large: VALUES.OUTPUT.LARGE_HTML_STRING });
        });

        it('should NOT sanitize nested objects', () =>
        {
            const result = sanitizer.sanitize(VALUES.INPUT.NESTED_OBJECT);

            expect(result).toEqual(VALUES.OUTPUT.NESTED_OBJECT);
        });

        it('should NOT sanitize string arrays', () =>
        {
            const result = sanitizer.sanitize(VALUES.INPUT.OBJECT_WITH_STRING_ARRAY);

            expect(result).toEqual(VALUES.OUTPUT.OBJECT_WITH_STRING_ARRAY);
        });
    });
});
