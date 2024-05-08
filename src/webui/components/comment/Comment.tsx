
import { Paragraph } from '^/webui/designsystem';

type Props = {
    readonly text: string;
};

export default function Component({ text }: Props)
{
    return <Paragraph>
        {text}
    </Paragraph>;
}
