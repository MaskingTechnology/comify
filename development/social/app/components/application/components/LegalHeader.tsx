
import { Panel, ClickArea } from '@maskingtech/designsystem';

import Logo from './Logo';

type Props = {
    readonly onGoHome: () => void;
};

export default function ({ onGoHome }: Props)
{
    return <Panel type='transparent' padding='small'>
        <ClickArea onClick={onGoHome}>
            <Logo size='small' />
        </ClickArea>
    </Panel>;
}
