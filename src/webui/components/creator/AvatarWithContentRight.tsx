
import React from 'react';

import { Row, Column, AvatarProps } from '../../designsystem/module';

export type AvatarWithColumnRightProps = {
    avatar: React.ReactElement<AvatarProps>;
    right: React.ReactNode;
};

export default function AvatarWithContentRight(props: AvatarWithColumnRightProps)
{
    return <Row>
        {props.avatar}
        <Column gap='small' align='justify' stretch={true}>
            {props.right}
        </Column>
    </Row>;
}
