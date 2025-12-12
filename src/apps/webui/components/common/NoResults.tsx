
import { Image, Panel, Row, Text } from '@maskingtech/designsystem';
import noResultImage from '^/assets/images/noresult.svg';

export default function Component()
{
    return <Panel type='transparent' padding='large'>
        <Row alignX='center' alignY='center' gap='medium'>
            <Image source={noResultImage} alt='No results' height='40px' />
            <Text size='large' weight='light' type='secondary' value='No results found' />
        </Row>
    </Panel>;
}
