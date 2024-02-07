
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Column, Image, Link, Panel, Paragraph, Row, Text } from '../designsystem/module';

import { ApplicationLogo } from '../components/module';

import introductionImage from '../../assets/images/introduction.png';

export default function Feature()
{
    const navigate = useNavigate();

    return <Column gap='medium' alignX='stretch' alignY='top'>
        <Panel>
            <Column gap='medium' alignX='stretch'>
                <Row alignX='justify' alignY='top'>
                    <ApplicationLogo />
                    <Button type='primary' text='Get in' clickHandler={() => navigate('/getin')} />
                </Row>
                <Image source={introductionImage} width='600px' />
                <Text size='large' value='Take or upload a picture. Add speech bubbles. Share with friends.' />
            </Column>
        </Panel>
        <Column gap='none' alignX='center'>
            <Paragraph size='small'>
                By getting in, you agree to our <Link url='#' target='_blank'>terms of service</Link> and <Link url='#' target='_blank'>privacy policy</Link>.
            </Paragraph>
            <Paragraph size='small'>
                Copyright © 2024 - <Link url='#' target='_blank'>Masking Technology</Link>.
            </Paragraph>
        </Column>
    </Column>;
}
