
import { Paragraph } from '@maskingtech/designsystem';

type Props = {
    readonly text: string;
};

export default function ({ text }: Props)
{
    return <Paragraph>
        {text}
    </Paragraph>;
}
