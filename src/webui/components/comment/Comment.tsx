
import { Paragraph } from '^/webui/designsystem';

export type Props = {
    readonly text: string;
};

export default function Component({ text }: Props)
{
    return <Paragraph>
        {text}
    </Paragraph>;
}
