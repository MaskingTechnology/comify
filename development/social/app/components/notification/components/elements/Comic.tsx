
import { ClickArea, Image, Row, Text } from '@maskingtech/designsystem';

import type { Comic } from '^/domain/comic';

type Props = {
    readonly comic: Comic;
    readonly message: string;
    readonly onClick: () => void;
};

export default function Component({ comic, message, onClick }: Props)
{
    return <Row gap='medium' alignX='justify'>
        <Text value={message} />
        <ClickArea onClick={onClick} >
            <Image source={comic.image.dataUrl} width='150px' />
        </ClickArea>
    </Row>;
}
