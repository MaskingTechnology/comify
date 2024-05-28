
import type { DataModel as CreatorData } from '../creator/types';
import Requester from './Requester';

export default function createRequester(creator: CreatorData): Requester
{
    return new Requester(creator.id, creator.fullName, creator.nickname);
}
