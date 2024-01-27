
import React from 'react';

import { Row } from '../../../designsystem/module';

import NamesColumn from './NamesColumn';

export type Props = {
    fullName: string;
    nickName: string;
};

export default function Component({ fullName, nickName }: Props)
{
    return <Row alignX='justify'>
        <NamesColumn fullName={fullName} nickName={nickName} />
    </Row>;
}
