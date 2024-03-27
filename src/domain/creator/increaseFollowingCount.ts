
import CreatorData from './data/CreatorData';
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseFollowingCount(creatorId: string): Promise<number>
{
    const creator = await retrieveData(creatorId);

    const updatedCreator = new CreatorData(
        creator.id,
        creator.fullName,
        creator.nickname,
        creator.email,
        creator.portraitId,
        creator.joinedAt,
        creator.popularity,
        creator.postCount,
        creator.followerCount,
        creator.followingCount + 1
    );

    await updateData(updatedCreator);

    return updatedCreator.followingCount;
}
