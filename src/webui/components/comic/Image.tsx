
import React from 'react';

import { Image } from '../../designsystem/module';

import type ComicView from '../../../domain/comic/ComicView';

import dummyDataUrl from '../../../assets/images/introduction.png';

export type Props = {
    comic: ComicView;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Component({ comic }: Props)
{
    // return <Image source={comic.image.dataUrl} width='100%' />;
    return <Image source={dummyDataUrl} width='100%' />;
}
