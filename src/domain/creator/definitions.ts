
export const RECORD_TYPE = 'creator';
export const IMAGE_TYPE = 'portrait';

export const SortFields = {
    POPULARITY: 'popularity',
    JOINED_AT: 'joinedAt'
} as const;

type Keys = keyof typeof SortFields;

export type SortFields = typeof SortFields[Keys];
