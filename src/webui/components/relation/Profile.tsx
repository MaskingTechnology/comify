
import type RelationView from '^/domain/relation/view/RelationView';

import CreatorProfile from '../creator/Profile';
import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    followHandler: (relation: RelationView) => Promise<void>;
    editHandler?: (relation: RelationView) => void;
};

export default function Component({ relation, followHandler, editHandler }: Props)
{
    return <FollowRow
        isFollowing={relation.exists}
        isSelf={relation.self}
        followHandler={() => followHandler(relation)}
        editHandler={editHandler !== undefined ? () => editHandler(relation) : undefined}
    >

        <CreatorProfile creator={relation.following} />

    </FollowRow>;
}
