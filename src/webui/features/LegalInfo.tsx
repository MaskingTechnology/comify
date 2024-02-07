
import React from 'react';

import { Column, Link, Paragraph } from '../designsystem/module';

export default function Feature()
{
    return <Column gap='none' alignX='center'>
        <Paragraph size='small'>
            By getting in, you agree to our <Link url='#' target='_blank'>terms of service</Link> and <Link url='#' target='_blank'>privacy policy</Link>.
        </Paragraph>
        <Paragraph size='small'>
            Copyright © 2024 - <Link url='#' target='_blank'>Masking Technology</Link>.
        </Paragraph>
    </Column>;
}
