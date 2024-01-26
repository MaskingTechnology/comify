
import React from 'react';

import type PostView from '../../../domain/post/PostView';

import { Column, Panel } from '../../designsystem/module';

import ComicImage from '../comic/Image';
import TimeElapsed from '../relation/TimeElapsed.js';

import EngagementsRow from './elements/EngagementRow';

export type Props = {
    post: PostView;
    followHandler: () => void;
    rateHandler: () => void;
};

export default function Component({ post, followHandler, rateHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={post.createdAt} relation={post.creator} followHandler={followHandler} />
            <ComicImage comic={post.comic} />
            <EngagementsRow ratingCount={post.ratingCount} reactionCount={post.reactionCount} rateHandler={rateHandler} />
        </Column>
    </Panel>;
}
