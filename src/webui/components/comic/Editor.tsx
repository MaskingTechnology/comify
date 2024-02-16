
import { Button, Column, Panel, Row } from '../../designsystem/module';

export type Props = {
    createHandler: () => void;
};

export default function Editor({ createHandler }: Props)
{
    return <Panel>
        <Column alignX='stretch'>
            <canvas id="editor" />
            <Row alignX='right'>
                <Button text="Create" clickHandler={createHandler} />
            </Row>
        </Column>
    </Panel>;
}
