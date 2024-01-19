
import React from 'react';

import { Button, Column, Title, Panel, Paragraph, Link, Image } from '../designsystem/module';
import { HomeLayout } from '../layouts/module';
import { Logo } from '../components/module';

const main = <Column>
    <Logo />
    <Image source='https://masking.tech/images/peter.jpg' width='200px' />
    <Paragraph>Comify is a web application that allows you to add text to your images.<br />
        It is a simple tool that allows you to create comics, memes, and other fun stuff.</Paragraph>
</Column >;

const login = <Panel>
    <Column gap='medium'>
        <Title size='medium'>Let us go!</Title>
        <Button text='Get in' size='large' />
        <Paragraph>Legal disclaimers with <Link url='https://masking.tech' target='_blank'>terms of service</Link> and <Link url='https://masking.tech' target='_blank'>privacy policy</Link>.</Paragraph>
    </Column>
</Panel>;

const aside = <Column>
    {login}
</Column>;

export default function Home()
{
    return <HomeLayout main={main} aside={aside} />;
}
