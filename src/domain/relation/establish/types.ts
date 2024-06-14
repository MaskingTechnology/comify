
import { DataModel } from '../types';

type ValidationModel = Pick<DataModel, 'followerId' | 'followingId'>;

export type { ValidationModel };
