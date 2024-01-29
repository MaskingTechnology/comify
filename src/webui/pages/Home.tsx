
import React from 'react';

import { Button, Column, Row, Panel, Image, Text, Paragraph, Link } from '../designsystem/module';

import { HomeLayout } from '../layouts/module';

import { Logo } from '../components/module';

import introductionImage from '../../assets/images/introduction.png';

export default function Page()
{
    return <HomeLayout>
        <Column gap='medium' alignX='stretch' alignY='top'>
            <Panel>
                <Column gap='medium' alignX='stretch'>
                    <Row alignX='justify' alignY='top'>
                        <Logo />
                        <Button type='primary' text='Get in' />
                    </Row>
                    <Image source={introductionImage} width='600px' />
                    <Text size='large' value='Take or upload a picture. Add speech bubbles. Share with friends.' />
                </Column>
            </Panel>
            <Row alignX='center'>
                <Paragraph size='small'>
                    By getting in, you agree to our <Link url='#' target='_blank'>terms of service</Link> and <Link url='#' target='_blank'>privacy policy</Link>.
                    Copyright © 2024 - <Link url='#' target='_blank'>Masking Technology</Link>.
                </Paragraph>
            </Row>
        </Column>
    </HomeLayout>;
}
