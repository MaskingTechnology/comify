
const LIMIT =
{
    TOO_SMALL: 0,
    TOO_BIG: 31,
    UPPER_BOUND: 30,
    LOWER_BOUND: 10,
};

const OFFSET =
{
    TOO_SMALL: -1,
    LOWER_BOUND: 0,
};

export const VALUES =
{
    RANGE:
    {
        LIMIT_TOO_SMALL: { limit: LIMIT.TOO_SMALL, offset: OFFSET.LOWER_BOUND },
        LIMIT_TOO_BIG: { limit: LIMIT.TOO_BIG, offset: OFFSET.LOWER_BOUND },
        OFFSET_TOO_SMALL: { limit: LIMIT.LOWER_BOUND, offset: OFFSET.TOO_SMALL },
        LOWER_BOUNDS: { limit: LIMIT.LOWER_BOUND, offset: OFFSET.LOWER_BOUND },
        UPPER_BOUNDS: { limit: LIMIT.UPPER_BOUND, offset: OFFSET.LOWER_BOUND },
    }
};
