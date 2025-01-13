
import { BaseDataModel } from '../types';

type ImageData = {
    readonly dataUrl: string;
};

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

export type { DataModel, Image, ImageData, MetaData };
