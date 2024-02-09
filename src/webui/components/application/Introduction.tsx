
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Column, Image, Panel, Row, Text } from '../../designsystem/module';

import { ApplicationLogo } from '../module';

import introductionImage from '../../assets/images/introduction.png';

export default function Feature()
{
    const navigate = useNavigate();

    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <Row alignX='justify' alignY='top'>
                <ApplicationLogo />
                <Button type='primary' text='Get in' clickHandler={() => navigate('/getin')} />
            </Row>
            <Image source={introductionImage} width='600px' />
            <Text size='large' value='Take or upload a picture. Add speech bubbles. Share with friends.' />
        </Column>
    </Panel>;
}
