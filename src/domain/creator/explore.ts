
import CreatorView from './CreatorView';
import createView from './createView';

import { creators } from '../dummydata';

export default async function explore(): Promise<CreatorView[]>
{
    const data = Array.from(creators.values());

    return Promise.all(data.map((creator) => createView(creator)));
}
