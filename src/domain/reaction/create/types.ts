
import { DataModel } from '../types';

type ValidationModel = Pick<DataModel, 'creatorId' | 'postId' | 'reactionId' | 'comicId' | 'commentId'>;

export type { ValidationModel };
