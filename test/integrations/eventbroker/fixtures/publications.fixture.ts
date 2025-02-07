
import { EVENTS } from './events.fixture';

const DATA =
{
    FIRST_CREATED: 'first-created',
    FIRST_UPDATED: 'first-updated',

    SECOND_CREATED: 'second-created',
    SECOND_UPDATED: 'second-updated'
};

export const PUBLICATIONS =
{
    FIRST_CREATED: { ...EVENTS.FIRST_CREATED, data: DATA.FIRST_CREATED },
    FIRST_UPDATED: { ...EVENTS.FIRST_UPDATED, data: DATA.FIRST_UPDATED },

    SECOND_CREATED: { ...EVENTS.SECOND_CREATED, data: DATA.SECOND_CREATED },
    SECOND_UPDATED: { ...EVENTS.SECOND_UPDATED, data: DATA.SECOND_UPDATED }
};
