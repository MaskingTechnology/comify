
import React from 'react';

import { ButtonProps } from '../designsystem/elements/button/Button.js';
import { Column, Icon, Row, Text } from '../designsystem/designsystem.js';
import Reactions from './Reactions.js';
import Reaction from './Reaction.js';
import DateFormat from '../../integrations/dateformat/DateFormat.js';

export type ComicThumbnailProps = {
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    image: string;
    likes: number;
    comments: number;
};

export default function ComicThumbnail(props: ComicThumbnailProps)
{
    const respondedText = DateFormat.fromNow(props.responded);

    return <Column gap='small' align='justify'>
        <Row>
            <img src={props.image} alt='Comic' />
        </Row>
        <Row align='justify'>
            <Reactions>
                <Reaction icon={<Icon type='heart' />} number={props.likes} />
                <Reaction icon={<Icon type='comment' />} number={props.comments} />
            </Reactions>
            <Text value={respondedText} />
        </Row>
    </Column>;
}
