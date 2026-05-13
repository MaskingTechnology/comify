
import { Column, Link, Paragraph } from '@maskingtech/designsystem';

export default function Component()
{
    return <Column gap='none' alignX='center'>
        <Paragraph size='small'>
            By getting in, you agree to our <Link url='/terms' target='_blank'>terms of use</Link> and <Link url='/privacy' target='_blank'>privacy policy</Link>.
        </Paragraph>
        <Paragraph size='small'>
            Copyright © 2025 - <Link url='https://masking.tech' target='_blank'>Masking Technology</Link>.
        </Paragraph>
    </Column>;
}
