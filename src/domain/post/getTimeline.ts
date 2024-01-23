
import PostView from './PostView';
import createView from './createView';

import { posts } from '../dummydata';

export default async function getTimeline(): Promise<PostView[]>
{
    const data = Array.from(posts.values());

    return Promise.all(data.map((post) => createView(post)));
}
