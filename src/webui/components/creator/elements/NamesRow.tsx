
import React from 'react';

import { Row } from '../../../designsystem/module';

import NamesColumn from './NamesColumn';

export type Props = {
    fullName: string;
    nickName: string;
};

export default function Component(props: Props)
{
    return <Row alignX='justify'>
        <NamesColumn fullName={props.fullName} nickName={props.nickName} />
    </Row>;
}
