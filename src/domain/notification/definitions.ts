
export const RECORD_TYPE = 'notification';

export const Types = {
    STARTED_FOLLOWING: 'started-following',
    RATED_POST: 'rated-post',
    RATED_REACTION: 'rated-reaction',
    ADDED_REACTION: 'added-reaction'
} as const;

type TypeKeys = keyof typeof Types;

export type Type = typeof Types[TypeKeys]; 
