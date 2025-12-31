
import { ClickArea, Image, Row, Text } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedComicData } from '^/domain/comic/aggregate';

type Props = {
    readonly comic: AggregatedComicData;
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
