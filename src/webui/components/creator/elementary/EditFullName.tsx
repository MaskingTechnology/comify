
import ChangeButton from '^/webui/components/common/ChangeButton';
import { Row, Text, TextBox } from '^/webui/designsystem';

export type Props = {
    fullName: string;
    onChangeClick: () => void;
};

export default function Component({ fullName, onChangeClick }: Props)
{
    return <Row alignX='left' alignY='center'>
        <Text value='full Name' size='medium' weight='bold' />
        <TextBox name='full Name' value={fullName} size='small' />
        <ChangeButton onClick={onChangeClick}></ChangeButton>
    </Row>;
}
