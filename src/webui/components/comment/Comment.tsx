
import { Paragraph } from '../../designsystem/module';

export type Props = {
    text: string;
};

export default function Component({ text }: Props)
{
    return <Paragraph>
        {text}
    </Paragraph>;
}
