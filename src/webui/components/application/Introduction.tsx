
import introductionImage from '../../assets/images/introduction.png';
import { Button, Column, Image, Panel, Row, Text } from '../../designsystem/module';
import { ApplicationLogo } from '../module';

export type Props = {
    getInHandler: () => void;
};

export default function Component({ getInHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <Row alignX='justify' alignY='top'>
                <ApplicationLogo />
                <Button type='primary' text='Get in' clickHandler={getInHandler} />
            </Row>
            <Image source={introductionImage} width='600px' />
            <Text size='large' value='Take or upload a picture. Add speech bubbles. Share with friends.' />
        </Column>
    </Panel>;
}
