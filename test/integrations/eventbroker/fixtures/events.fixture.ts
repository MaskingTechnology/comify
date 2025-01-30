
const EVENT_CHANNELS =
{
    FIRST: 'first',
    SECOND: 'second'
};

const EVENT_NAMES =
{
    CREATED: 'created',
    UPDATED: 'updated'
};

const EVENT_DATA =
{
    FIRST_CREATED: 'first-created',
    FIRST_UPDATED: 'first-updated',

    SECOND_CREATED: 'second-created',
    SECOND_UPDATED: 'second-updated'
};

export const EVENTS =
{
    FIRST_CREATED: { channel: EVENT_CHANNELS.FIRST, name: EVENT_NAMES.CREATED, data: EVENT_DATA.FIRST_CREATED },
    FIRST_UPDATED: { channel: EVENT_CHANNELS.FIRST, name: EVENT_NAMES.UPDATED, data: EVENT_DATA.FIRST_UPDATED },

    SECOND_CREATED: { channel: EVENT_CHANNELS.SECOND, name: EVENT_NAMES.CREATED, data: EVENT_DATA.SECOND_CREATED },
    SECOND_UPDATED: { channel: EVENT_CHANNELS.SECOND, name: EVENT_NAMES.UPDATED, data: EVENT_DATA.SECOND_UPDATED }
};
