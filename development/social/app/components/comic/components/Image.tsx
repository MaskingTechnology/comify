
import type { Comic } from '^/domain/comic';

import { Image } from '@maskingtech/designsystem';

type Props = {
    readonly comic: Comic;
};

export default function Component({ comic }: Props)
{
    return <Image source={comic.image.dataUrl} width='100%' />;
}
