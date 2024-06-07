
import introductionImage from '^/webui/assets/images/introduction.png';
import { Button, Column, Image, Panel, Row, Text } from '^/webui/designsystem';

import Logo from './Logo';

type Props = {
    readonly onGetIn: () => void;
};

export default function Component({ onGetIn }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <Row alignX='justify' alignY='top' gap='medium' wrap='wrap'>
                <Logo />
                <Button type='primary' text='Get in' onClick={onGetIn} />
            </Row>
            <Image source={introductionImage} fit='contain' />
            <Text size='large' wrap='normal' value='Take or upload a picture. Add speech bubbles. Share with friends.' />
        </Column>
    </Panel>;
}
