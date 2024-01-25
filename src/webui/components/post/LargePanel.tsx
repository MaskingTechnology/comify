
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

export default function Component(props: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={props.post.createdAt} relation={props.post.creator} followHandler={props.followHandler} />
            <ComicImage comic={props.post.comic} />
            <EngagementsRow ratingCount={props.post.ratingCount} reactionCount={props.post.reactionCount} rateHandler={props.rateHandler} />
        </Column>
    </Panel>;
}
