
import React from 'react';

import { Image } from '../../designsystem/module';

import type Comic from '../../../domain/client/views/Comic';

export type ComicProps = {
    comic: Comic;
};

export default function Component(props: ComicProps)
{
    const image = props.comic.image;

    return <Image source={image.dataUrl} />;
}
