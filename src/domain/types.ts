
export type BaseDataModel = {
    readonly id: string;
};

export type CountOperation = 'increase' | 'decrease';

export type Range = {
    offset: number;
    limit: number;
};
