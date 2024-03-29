
import type CommentData from '../data/CommentData';
import CommentView from './CommentView';

export default async function createView(data: CommentData): Promise<CommentView>
{
    return new CommentView(data.id, data.message);
}
