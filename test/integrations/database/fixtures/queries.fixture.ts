
import { RecordQuery } from '^/integrations/database/module';

import { RECORDS } from './records.fixture';

const { CALZONE, VEGETARIAN, HAWAII } = RECORDS.PIZZAS;

export const QUERIES: Record<string, RecordQuery> =
{
    EMPTY: {},
    NO_MATCH: { name: { EQUALS: 'Not existing' } },

    EQUALS: { size: { EQUALS: 20 } },
    NOT_EQUALS: { folded: { NOT_EQUALS: false } },
    LESS_THAN: { price: { LESS_THAN: 10 } },
    LESS_THAN_OR_EQUALS: { price: { LESS_THAN_OR_EQUALS: 10 } },
    GREATER_THAN: { price: { GREATER_THAN: 12 } },
    GREATER_THAN_OR_EQUALS: { price: { GREATER_THAN_OR_EQUALS: 12 } },
    IN: { size: { IN: [16, 20, 25] } },
    NOT_IN: { size: { NOT_IN: [15, 16, 20, 30] } },
    CONTAINS: { name: { CONTAINS: 'her' } },
    STARTS_WITH: { name: { STARTS_WITH: 'Ha' } },
    ENDS_WITH: { name: { ENDS_WITH: 'one' } },
    AND: {
        'AND':
            [
                {
                    'name': { EQUALS: HAWAII.name },
                    'size': { NOT_EQUALS: 30 }
                }
            ]
    },
    OR: {
        'OR':
            [
                { 'name': { EQUALS: VEGETARIAN.name } },
                { 'size': { EQUALS: 18 } }
            ]
    },
    AND_OR: {
        'AND':
            [
                { 'name': { EQUALS: CALZONE.name } },
                {
                    'OR':
                        [
                            { 'size': { EQUALS: 2 } },
                            { 'folded': { EQUALS: true } }
                        ]
                }
            ]
    },
    OR_AND: {
        'OR':
            [
                { 'size': { EQUALS: 18 } },
                {
                    'AND':
                        [
                            { 'folded': { EQUALS: false } },
                            { 'price': { GREATER_THAN: 11 } },
                            { 'price': { LESS_THAN: 13 } }
                        ]
                }
            ]
    },
    AND_NO_RESULT: {
        'AND':
            [
                {
                    'name': { EQUALS: HAWAII.name },
                    'size': { NOT_EQUALS: 20 }
                }
            ]
    },
    OR_NO_RESULT: {
        'OR':
            [
                { 'name': { EQUALS: 'Not existing' } },
                { 'size': { EQUALS: 21 } }
            ]
    }
};