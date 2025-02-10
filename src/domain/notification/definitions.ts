
export const RECORD_TYPE = 'notification';

export const Types = {
    STARTED_FOLLOWING: 'started-following',
    RATED_POST: 'rated-post',
    REACTED_TO_POST: 'added-reaction'
} as const;

type TypeKeys = keyof typeof Types;

export type Type = typeof Types[TypeKeys]; 
