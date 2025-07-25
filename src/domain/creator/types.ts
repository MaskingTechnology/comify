
import type { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly tenantId: string;
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitId?: string;
    readonly joinedAt: string;
};

export type { CountOperation, DataModel };
