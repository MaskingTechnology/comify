
import type ComicView from '^/domain/comic/view/ComicView';

import { Image } from '^/webui/designsystem/module';

export type Props = {
    comic: ComicView;
};

export default function Component({ comic }: Props)
{
    return <Image source={comic.image.dataUrl} width='100%' />;
}
