
import React from 'react';

import { Row } from '../../../designsystem/module';
import { ReactionProps } from '../../module.js';

export type EngagementsProps = {
    children?: React.ReactElement<ReactionProps>[] | React.ReactElement<ReactionProps>;
};

export default function Engagements(props: EngagementsProps)
{
    return <Row gap='medium'>
        {props.children}
    </Row>;
}
