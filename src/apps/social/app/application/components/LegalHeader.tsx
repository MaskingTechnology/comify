
import { Panel, ClickArea } from '@maskingtech/designsystem';

import Logo from './Logo';

type Props = {
    readonly onGoBack: () => void;
};

export default function Component({ onGoBack }: Props)
{
    return <Panel type='transparent' padding='small'>
        <ClickArea onClick={onGoBack}>
            <Logo size='small' />
        </ClickArea>
    </Panel>;
}
