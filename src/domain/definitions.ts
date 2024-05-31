
export const SortOrder = {
    POPULAR: 'popular',
    RECENT: 'recent'
} as const;

type SortOrderKeys = keyof typeof SortOrder;

export type SortOrder = typeof SortOrder[SortOrderKeys];
