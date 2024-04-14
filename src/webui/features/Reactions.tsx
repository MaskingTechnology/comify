
import { useEffect, useState } from 'react';
import johnDoe from '../../domain/authentication/johnDoe';
import PostView from '../../domain/post/view/PostView';
import getReactionsByPost from '../../domain/reaction/getByPost';
import ReactionView from '../../domain/reaction/view/ReactionView';
import { Loading, OrderAndAddRow } from '../components/module';
import ReactionsList from '../components/reaction/PanelList';
import { Column } from '../designsystem/module';
import awaitData from '../utils/awaitData';

export type Props = {
    post: PostView;
};

export default function Feature({ post }: Props)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);

    const getReactions = () => getReactionsByPost(johnDoe, post.id);

    useEffect(() => awaitData(getReactions, setReactions), []);

    if (reactions === undefined)
    {
        return <Loading />;
    }

    return <Column alignX='stretch'>
        <OrderAndAddRow selected='recent' postId={post.id} />
        <ReactionsList reactions={reactions} />
    </Column>;
}
