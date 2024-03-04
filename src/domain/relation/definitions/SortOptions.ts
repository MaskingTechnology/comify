
export const SortOptions = {
    POPULAR: 'popular',
    RECENT: 'recent'
} as const;

Object.freeze(SortOptions);

type Keys = keyof typeof SortOptions;

export type SortOptions = typeof SortOptions[Keys];

export default SortOptions;
