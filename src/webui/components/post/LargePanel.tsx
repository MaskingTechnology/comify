
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';
import type PostView from '../../../domain/post/PostView';

import { Column, Panel } from '../../designsystem/module';

import Comic from '../comic/Comic';
import TimeElapsedRow from '../creator/TimeElapsedRow';
import EngagementsRow from './EngagementsRow';

export type Props = {
    post: PostView;
    followHandler: (creator: CreatorView) => void;
};

export default function Component(props: Props)
{
    const post = props.post;
    const creator = post.creator;
    const comic = post.comic;
    const followHandler = props.followHandler;

    return <Panel>
        <Column gap='medium'>
            <TimeElapsedRow creator={creator} date={post.createdAt} followHandler={followHandler} />
            <Comic comic={comic} />
            <EngagementsRow post={post} />
        </Column>
    </Panel>;
}
