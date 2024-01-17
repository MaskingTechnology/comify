
import React from 'react';

import { Paragraph } from '../../designsystem/module';

export type CommentProps = {
    text: string;
};

export default function Comment(props: CommentProps)
{
    return <Paragraph>
        {props.text}
    </Paragraph>;
}
