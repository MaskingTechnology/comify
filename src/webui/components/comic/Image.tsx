
import React from 'react';

import { Image } from '../../designsystem/module';

import type ComicView from '../../../domain/comic/ComicView';

export type Props = {
    comic: ComicView;
};

export default function Component({ comic }: Props)
{
    return <Image source={comic.image.dataUrl} />;
}
