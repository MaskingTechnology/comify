
import { Metrics } from '../definitions';
import retrieveByPost from '../_retrieveByPost';
import toModel from '../_toModel';

export default async function run(postId: string): Promise<Metrics>
{
    const data = await retrieveByPost(postId);

    return toModel(data);
}

export { default as PostMetricsNotFound } from '../_retrieveByPost/PostMetricsNotFound';
