
import noResultImage from '^/webui/assets/images/noresult.svg';
import { Image, Panel, Row, Text } from '^/webui/designsystem';

export default function Component()
{
    return <Panel type='transparent' padding='large'>
        <Row alignX='center' alignY='center' gap='medium'>
            <Image source={noResultImage} alt='No results' height='40px' />
            <Text size='large' weight='light' type='secondary' value='No results found' />
        </Row>
    </Panel>;
}
