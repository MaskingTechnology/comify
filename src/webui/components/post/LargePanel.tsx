
import React from 'react';

import type RelationView from '../../../domain/relation/RelationView';
import type PostView from '../../../domain/post/PostView';

import { Column, Panel } from '../../designsystem/module';

import ComicImage from '../comic/Image';
import RelationTimeElapsed from '../relation/TimeElapsed';

import EngagementsRow from './elements/EngagementsRow';

export type Props = {
    post: PostView;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    return <Panel>
        <Column gap='medium'>
            <RelationTimeElapsed relation={props.post.relation} date={props.post.createdAt} followHandler={props.followHandler} />
            <ComicImage comic={props.post.comic} />
            <EngagementsRow post={props.post} />
        </Column>
    </Panel>;
}
