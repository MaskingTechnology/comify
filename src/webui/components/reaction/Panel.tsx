
import React from 'react';

import { Column, Icon, Row, Panel as DSPanel, AvatarProps, ButtonProps } from '../../designsystem/module';

// import Response from '../common/TitledTimeElapsed';
// import Engagements from '../common/engagements/Engagements';
// import Engagement from '../common/engagements/Engagement';
// import AvatarWithContentRight from '../creator/AvatarRow';
import { CommentProps } from '../comment/Comment';
import { ComicProps } from '../comic/Image';

export type PanelProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    likes: number;
    reaction: React.ReactElement<CommentProps | ComicProps>;
};

export default function Panel(props: PanelProps)
{
    return <DSPanel>
        {/* <Column gap='medium' align='justify'>
            <AvatarWithContentRight
                avatar={props.avatar}
                right={<Row align='justify'>
                    <Response username={props.username} date={props.responded} />
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
        </Column> */}
    </DSPanel>;
}
