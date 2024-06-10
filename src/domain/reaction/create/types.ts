
import { DataModel } from '../types';

type ValidationModel = Pick<DataModel, 'creatorId' | 'postId' | 'comicId' | 'commentId'>;

export type { ValidationModel };
