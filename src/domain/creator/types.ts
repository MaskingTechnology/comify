
import type { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitId?: string;
    readonly tenantId?: string;
    readonly joinedAt: string;
};

export type { CountOperation, DataModel };
