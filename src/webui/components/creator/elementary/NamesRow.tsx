
import { Row } from '^/webui/designsystem';

import NamesColumn from './NamesColumn';

export type Props = {
    readonly fullName: string;
    readonly nickname: string;
};

export default function Component({ fullName, nickname }: Props)
{
    return <Row alignX='justify'>
        <NamesColumn fullName={fullName} nickname={nickname} />
    </Row>;
}
