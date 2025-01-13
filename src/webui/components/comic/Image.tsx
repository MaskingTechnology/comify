
import type { AggregatedData as AggregatedComicData } from '^/domain/comic/aggregate';

import { Image } from '^/webui/designsystem';

type Props = {
    readonly comic: AggregatedComicData;
};

export default function Component({ comic }: Props)
{
    return <Image source={comic.image.dataUrl} width='100%' />;
}
