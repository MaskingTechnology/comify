
import type { BaseDataModel, CountOperation } from '../definitions';

type Data = BaseData &
{
    readonly tenantId: string;
    readonly id: string;
    readonly creatorId: string;
    readonly comicId?: string;
    readonly commentId?: string;
    readonly parentId?: string;
    readonly createdAt: string;
};

export type { CountOperation, DataModel };
