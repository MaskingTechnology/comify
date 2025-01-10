
export const RECORD_TYPE = 'notification';

export const Types = {
    STARTED_FOLLOWING: 'started-following',
    RATED_POST: 'rated-post',
    RATED_REACTION: 'rated-reaction',
    ADDED_REACTION_POST: 'added-reaction-post',
    ADDED_REACTION_REACTION: 'added-reaction-reaction'
} as const;

type TypeKeys = keyof typeof Types;

export type Type = typeof Types[TypeKeys]; 
