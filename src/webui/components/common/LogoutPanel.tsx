
import { Button, Panel, Paragraph, Row } from '../../designsystem/module';

export type Props = {
    logoutHandler: () => void;
};

export default function Component({ logoutHandler }: Props)
{
    return <Panel>
        <Paragraph>
            Are you sure you want to logout?
        </Paragraph>
        <Row alignX='right'>
            <Button text='Yes, log me out' type='primary' clickHandler={logoutHandler} />
        </Row>
    </Panel>;
}
