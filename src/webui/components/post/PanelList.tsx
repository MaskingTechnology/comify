
import type PostView from '^/domain/post/view/PostView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem/module';

import NoResults from '../common/NoResults';
import LargePanel from './LargePanel';

export type Props = {
    posts: PostView[];
    followHandler: (relation: RelationView) => Promise<void>;
    rateHandler: (post: PostView) => Promise<boolean>;
    detailsHandler: (post: PostView) => void;
    profileHandler: (relation: RelationView) => void;
    editHandler?: (relation: RelationView) => void;
};

export default function Component({ posts, followHandler, rateHandler, detailsHandler, profileHandler, editHandler }: Props)
{
    if (posts.length === 0)
    {
        return <NoResults />;
    }

    return <Column gap='medium' alignX='stretch'>
        {
            posts.map(post =>
                <LargePanel
                    key={post.id}
                    post={post}
                    followHandler={() => followHandler(post.creator)}
                    rateHandler={() => rateHandler(post)}
                    detailsHandler={() => detailsHandler(post)}
                    profileHandler={() => profileHandler(post.creator)}
                    editHandler={editHandler !== undefined ? () => editHandler(post.creator) : undefined}
                />
            )
        }
    </Column>;
}
