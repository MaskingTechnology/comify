
import React from 'react';

import { Image } from '../../designsystem/module';

import type ComicView from '../../../domain/comic/ComicView';

export type ComicProps = {
    comic: ComicView;
};

export default function Component({ comic }: ComicProps)
{
    return <Image source={comic.image.dataUrl} />;
}
