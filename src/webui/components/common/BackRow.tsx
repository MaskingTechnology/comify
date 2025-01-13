

import { Row } from '^/webui/designsystem';

import BackButton from './BackButton';

type Props = {
    readonly onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <Row alignX='justify' gap='small'>
        <BackButton onClick={onClick} />
    </Row>;
}
