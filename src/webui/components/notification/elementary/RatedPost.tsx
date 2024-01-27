
import React from 'react';

import { Row, Image, Text } from '../../../designsystem/module';

export type Props = {
    comicDataUrl: string;
};

export default function Component({ comicDataUrl }: Props)
{
    return <Row gap='medium'>
        <Image source={comicDataUrl} width='150px' />
        <Text value='Liked your comic!' />
    </Row>;
}
