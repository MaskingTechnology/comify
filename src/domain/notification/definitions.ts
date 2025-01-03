
export const RECORD_TYPE = 'notification';

export const TypesEnum = {
    STARTED_FOLLOWING: 'started-following',
    RATED_POST: 'rated-post',
    RATED_REACTION: 'rated-reaction',
    ADDED_REACTION: 'added-reaction'
} as const;

type TypeKeys = keyof typeof TypesEnum;

export type Types = typeof TypesEnum[TypeKeys]; 
