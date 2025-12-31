
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import { Cell, Column, Row, Ruler } from '@maskingtech/designsystem';

import Identity from './Identity';
import Logo from './Logo';
import Menu from './Menu';

type Props = {
    readonly identity: AggregatedCreatorData;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignY='stretch' alignX='justify' gap='large'>
        <Column gap='large' alignX='stretch'>
            <Cell sizing='fixed'>
                <Logo size='large' />
            </Cell>
            <Cell sizing='fluid'>
                <Menu vertical={true} identity={identity} />
            </Cell>
            <Cell sizing='fixed'>
                <Identity identity={identity} onLogout={onLogout} />
            </Cell>
        </Column>
        <Ruler direction='vertical' size='medium' />
    </Row>;
}
