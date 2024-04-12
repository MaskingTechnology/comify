
import PostData from './data/PostData';
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreaseReactionCount(postId: string): Promise<number>
{
    const post = await retrieveData(postId);

    const updatedPost = new PostData(
        post.id,
        post.creatorId,
        post.comicId,
        post.createdAt,
        post.ratingCount,
        post.reactionCount - 1
    );

    await updateData(updatedPost);

    return updatedPost.ratingCount;
}
