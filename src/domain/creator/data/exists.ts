
import retrieveByNickname from './retrieveByNickname';

export default async function exists(nickname: string): Promise<boolean>
{
    const creatorData = await retrieveByNickname(nickname);

    return creatorData !== undefined;
}
