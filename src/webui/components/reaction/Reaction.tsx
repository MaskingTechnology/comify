
import React from 'react';

import { Column, Icon, Row, Panel, AvatarProps, ButtonProps } from '../../designsystem/module';

import CreatorResponse from '../creatorresponse/CreatorResponse';
import Engagements from '../engagements/Engagements';
import Engagement from '../engagement/Engagement';
import FixedDynamicTwoColumn from '../fixeddynamictwocolumn/FixedDynamicTwoColumn';
import { CommentProps } from '../comment/Comment';
import { ComicProps } from '../comic/Comic';

export type ReactionProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    likes: number;
    reaction: React.ReactElement<CommentProps | ComicProps>;
};

export default function Reaction(props: ReactionProps)
{
    return <Panel>
        <Column gap='medium' align='justify'>
            <FixedDynamicTwoColumn
                left={props.avatar}
                right={<Row align='justify'>
                    <CreatorResponse username={props.username} date={props.responded} />
                    {props.button}
                </Row>}
            />
            <Column gap='small'>
                <Row>
                    {props.reaction}
                </Row>
                <Row>
                    <Engagements>
                        <Engagement icon={<Icon type='heart' />} number={props.likes} />
                    </Engagements>
                </Row>
            </Column>
        </Column>
    </Panel>;
}
