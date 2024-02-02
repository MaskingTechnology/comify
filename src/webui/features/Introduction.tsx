
import React from 'react';

import getLoginUrl from '../../domain/authentication/getLoginUrl';

import { Button, Column, Image, Panel, Row, Text } from '../designsystem/module';

import { Logo } from '../components/module';

import introductionImage from '../../assets/images/introduction.png';

export default function Feature()
{
    async function getIn()
    {
        const loginUrl = await getLoginUrl();

        location.href = loginUrl;
    }

    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <Row alignX='justify' alignY='top'>
                <Logo />
                <Button type='primary' text='Get in' clickHandler={() => getIn()} />
            </Row>
            <Image source={introductionImage} width='600px' />
            <Text size='large' value='Take or upload a picture. Add speech bubbles. Share with friends.' />
        </Column>
    </Panel>;
}
