
import React from 'react';

import { Row } from '../../../designsystem/module';

import NamesColumn from './NamesColumn';

export type Props = {
    fullName: string;
    nickname: string;
};

export default function Component({ fullName, nickname }: Props)
{
    return <Row alignX='justify'>
        <NamesColumn fullName={fullName} nickname={nickname} />
    </Row>;
}
