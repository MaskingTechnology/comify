
import CreatorData from '../creator/data/CreatorData';
import Requester from './Requester';

export default function createRequester(creator: CreatorData): Requester
{
    return new Requester(creator.id, creator.fullName, creator.nickname);
}
