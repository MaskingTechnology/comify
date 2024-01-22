
import React from 'react';

import { Image } from '../../designsystem/module';

export type ComicProps = {
    source: string;
};

export default function Comic(props: ComicProps)
{
    return <Image source={props.source} />;
}
