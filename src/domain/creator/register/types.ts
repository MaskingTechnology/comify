
import { DataModel } from '../types';

type ValidationModel = Pick<DataModel, 'fullName' | 'email' | 'portraitId'>;

export type { ValidationModel };
