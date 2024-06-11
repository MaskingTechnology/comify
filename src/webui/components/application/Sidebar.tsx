
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { Cell, Column, Row, Ruler } from '^/webui/designsystem';

import Identity from './Identity';
import Logo from './Logo';
import Menu from './Menu';

type Props = {
    readonly identity: CreatorView;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignY='stretch' gap='large'>
        <Column gap='large'>
            <Cell sizing='fixed'>
                <Logo size='large' />
            </Cell>
            <Cell sizing='fluid'>
                <Menu identity={identity} />
            </Cell>
            <Cell sizing='fixed'>
                <Identity identity={identity} onLogout={onLogout} />
            </Cell>
        </Column>
        <Ruler direction='vertical' size='medium' />
    </Row>;
}
