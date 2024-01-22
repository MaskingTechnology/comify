
import React from 'react';

import { Column, Panel as DSPanel, Row, AvatarProps, ParagraphProps, ButtonProps } from '../../designsystem/module';

// import Response from '../common/TitledTimeElapsed';
// import AvatarWithContentRight from '../creator/AvatarRow';

export type PanelProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    message: React.ReactElement<ParagraphProps>;
};

export default function Panel(props: PanelProps)
{
    return <DSPanel>
        {/* <Column gap='medium' align='justify'>
            <AvatarWithContentRight
                avatar={props.avatar}
                right={<>
                    <Row align='justify'>
                        <Response username={props.username} date={props.responded} />
                        {props.button}
                    </Row></>
                }
            />
            <Row>
                {props.message}
            </Row>
        </Column> */}
    </DSPanel>;
}
