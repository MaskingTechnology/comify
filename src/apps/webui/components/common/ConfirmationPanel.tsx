
import { Button, Panel, Paragraph, Row } from '@maskingtech/designsystem';

type Props = {
    readonly message: string;
    readonly onConfirm: () => void;
    readonly onCancel: () => void;
};

export default function Component({ message, onConfirm, onCancel }: Props)
{
    return <Panel>
        <Paragraph>
            {message}
        </Paragraph>
        <Row alignX='right'>
            <Button text='No' type='secondary' onClick={onCancel} />
            <Button text='Yes' type='primary' onClick={onConfirm} />
        </Row>
    </Panel>;
}
