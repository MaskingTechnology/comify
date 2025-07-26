
import type { DataModel } from '../types';

type ValidationModel = Pick<DataModel, 'tenantId' | 'fullName' | 'email' | 'portraitId'>;

export type { ValidationModel };
