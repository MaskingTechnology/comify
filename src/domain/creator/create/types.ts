
import type { DataModel } from '../types';

type ValidationModel = Pick<DataModel, 'fullName' | 'email' | 'tenantId' | 'portraitId'>;

export type { ValidationModel };
