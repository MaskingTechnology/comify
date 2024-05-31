
import { BaseDataModel } from '../types';

type MetaData = {
    readonly filename: string;
    readonly mimeType: string;
    readonly size: number;
};

type DataModel = BaseDataModel & MetaData &
{
    readonly storageKey: string;
};

type Image = MetaData &
{
    readonly buffer: Buffer;
};

export type { DataModel, Image, MetaData };
