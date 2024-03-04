
import CreatorData from './data/CreatorData';
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseComicCount(creatorId: string): Promise<void>
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
        creator.postCount + 1,
        creator.followerCount,
        creator.followingCount
    );

    return updateData(updatedCreator);
}
