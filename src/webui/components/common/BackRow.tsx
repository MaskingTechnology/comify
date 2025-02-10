

import { Row } from '^/webui/designsystem';

import BackButton from './BackButton';

type Props = {
    readonly canGoBack: boolean;
    readonly onBackClick: () => void;
};

export default function Component({ canGoBack, onBackClick }: Props)
{
    return <Row alignX='justify' gap='small'>
        {canGoBack && <BackButton onClick={onBackClick} />}
    </Row>;
}
