
import { Border, Column, Text } from '^/webui/designsystem';

type Props = {
    readonly comment: string;
};

export default function Component({ comment }: Props)
{

    return <Column alignX='stretch' alignY='justify' gap='medium'>
        <Text value='I like your reaction.' />
        <Border size='small' padding='small'>
            <Text size='small' wrap='normal' value={comment} />
        </Border>
    </Column>;
}
