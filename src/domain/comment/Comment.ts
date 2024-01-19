
import CommentData from './CommentData';

export default class Comment extends CommentData
{
    constructor(data: CommentData)
    {
        super(data.id, data.message);
    }
}
