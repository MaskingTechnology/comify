
import React from 'react';

import { Column, Icon, Row, Panel, AvatarProps, ButtonProps } from '../../designsystem/module';

import Comic from '../comic/Comic';
import CreatorResponse from '../creatorresponse/CreatorResponse';
import Engagements from '../engagements/Engagements';
import Engagement from '../engagement/Engagement';
import FixedDynamicTwoColumn from '../fixeddynamictwocolumn/FixedDynamicTwoColumn';

export type PostLargeProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    image: string;
    likes: number;
    comments: number;
};

export default function PostLarge(props: PostLargeProps)
{
    return <Panel>
        <Column gap='medium' align='justify'>
            <FixedDynamicTwoColumn
                left={props.avatar}
                right={<>
                    <Row align='justify'>
                        <CreatorResponse username={props.username} date={props.responded} />
                        {props.button}
                    </Row>
                </>}
            />
            <Row>
                <Comic source={props.image} />
            </Row>
            <Row>
                <Engagements>
                    <Engagement icon={<Icon type='heart' />} number={props.likes} />
                    <Engagement icon={<Icon type='comment' />} number={props.comments} />
                </Engagements>
            </Row>
        </Column>
    </Panel>;
}
