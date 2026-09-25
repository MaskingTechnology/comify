
export type BaseRecord = {
    readonly id: string;
};

export const SortOrders = {
    POPULAR: 'popular',
    RECENT: 'recent'
} as const;

type SortOrderKeys = keyof typeof SortOrders;

export type SortOrder = typeof SortOrders[SortOrderKeys];

export const CONTEXT_ID = 'social';
