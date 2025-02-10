
const CHANNELS =
{
    FIRST: 'first',
    SECOND: 'second'
};

const NAMES =
{
    CREATED: 'created',
    UPDATED: 'updated'
};

export const EVENTS =
{
    FIRST_CREATED: { channel: CHANNELS.FIRST, name: NAMES.CREATED },
    FIRST_UPDATED: { channel: CHANNELS.FIRST, name: NAMES.UPDATED },

    SECOND_CREATED: { channel: CHANNELS.SECOND, name: NAMES.CREATED },
    SECOND_UPDATED: { channel: CHANNELS.SECOND, name: NAMES.UPDATED }
};
