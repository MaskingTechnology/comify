
import React from 'react';

import { Row } from '../../../designsystem/module';

import { PanelProps as ReactionPanelProps } from '../../reaction/Panel';

export type EngagementsProps = {
    children?: React.ReactElement<ReactionPanelProps>[] | React.ReactElement<ReactionPanelProps>;
};

export default function Engagements(props: EngagementsProps)
{
    return <Row gap='medium'>
        {props.children}
    </Row>;
}
