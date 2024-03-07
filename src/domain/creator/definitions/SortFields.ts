
export const SortFields = {
    POPULARITY: 'popularity',
    JOINED_AT: 'joinedAt'
} as const;

Object.freeze(SortFields);

type Keys = keyof typeof SortFields;

export type SortFields = typeof SortFields[Keys];

export default SortFields;
