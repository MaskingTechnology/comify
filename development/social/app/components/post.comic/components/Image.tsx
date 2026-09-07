
import { Image } from '@maskingtech/designsystem';

import { type Comic } from '^/domain/post.comic';

type Props = {
    readonly comic: Comic;
};

export default function ({ comic }: Props)
{
    return <Image source={comic.image.dataUrl} width='100%' />;
}
