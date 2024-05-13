
import ChangeButton from '^/webui/components/common/ChangeButton';
import { Row, Text, TextBox } from '^/webui/designsystem';

export type Props = {
    nickname: string;
    onChangeClick: () => void;
};

export default function Component({ nickname, onChangeClick }: Props)
{
    return <Row alignX='left' alignY='center'>
        <Text value='nickname' size='medium' weight='bold' />
        <TextBox name='nickname' value={nickname} size='small' />
        <ChangeButton onClick={onChangeClick}></ChangeButton>
    </Row>;
}
