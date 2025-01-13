
import { RecordData } from '^/integrations/database';

import { RECORDS } from './records.fixture';

const { MARGHERITA, CALZONE, PEPPERONI, VEGETARIAN, HAWAII } = RECORDS.PIZZAS;

export const RESULTS: Record<string, RecordData[]> =
{
    EQUAL: [CALZONE, HAWAII],
    NOT_EQUAL: [CALZONE, VEGETARIAN],
    LESS_THAN: [VEGETARIAN],
    LESS_THAN_OR_EQUALS: [VEGETARIAN, HAWAII],
    GREATER_THAN: [PEPPERONI],
    GREATER_THAN_OR_EQUALS: [MARGHERITA, PEPPERONI],
    IN: [CALZONE, HAWAII],
    NOT_IN: [PEPPERONI],
    CONTAINS: [MARGHERITA],
    STARTS_WITH: [HAWAII],
    ENDS_WITH: [CALZONE],
    AND: [HAWAII],
    OR: [PEPPERONI, VEGETARIAN],
    AND_OR: [CALZONE],
    OR_AND: [MARGHERITA, PEPPERONI],

    SORTED_ASCENDING: [CALZONE, HAWAII, MARGHERITA, PEPPERONI, VEGETARIAN],
    SORTED_DESCENDING: [VEGETARIAN, CALZONE, HAWAII, PEPPERONI, MARGHERITA],
    SORTED_MULTIPLE_SAME: [VEGETARIAN, HAWAII, CALZONE, PEPPERONI, MARGHERITA],
    SORTED_MULTIPLE_DIFFERENT: [VEGETARIAN, CALZONE, HAWAII, PEPPERONI, MARGHERITA],

    LIMITED_BY_NUMBER: [MARGHERITA, CALZONE],
    LIMITED_BY_OFFSET: [PEPPERONI, VEGETARIAN, HAWAII]
};
