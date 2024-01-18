
import React from 'react';

import Home from '../layouts/home/Home.js';
import { Button, Column, Title, Panel, Paragraph, Link, Row, Image } from '../designsystem/module.js';
import { Logo } from '../components/module.js';

export default function HomePage()
{
    const login = <Panel>
        <Column gap='medium'>
            <Title size='medium'>Let's go!</Title>
            <Button text='Get in' size='large' />
            <Paragraph>Legal disclaimers with <Link url='https://masking.tech' target='_blank'>terms of service</Link> and <Link url='https://masking.tech' target='_blank'>privacy policy</Link>.</Paragraph>
        </Column>
    </Panel>;

    const main = <Column>
        <Row gap='large'>
            <Logo />
            <Logo />
            <Paragraph>Comify - add some text to your images</Paragraph>
        </Row>
        <Image source='https://masking.tech/images/peter.jpg' width='200px' />
        <Paragraph>Comify is a web application that allows you to add text to your images.<br />
            It's a simple tool that allows you to create comics, memes, and other fun stuff.</Paragraph>
    </Column >;

    const aside = <Column>
        {login}
    </Column>;

    return <Home main={main} aside={aside} />;
}
