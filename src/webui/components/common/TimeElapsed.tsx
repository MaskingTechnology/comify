
import { timeElapsed } from '^/integrations/utilities/dates';
import { Text } from '^/webui/designsystem';

type Props = {
    readonly date: string;
    readonly size?: 'large' | 'medium' | 'small';
    readonly weight?: 'light' | 'normal' | 'bold';
};

export default function Component({ date, size, weight }: Props)
{
    size ??= 'medium';
    weight ??= 'normal';

    const value = timeElapsed(date);

    return <Text value={value} type='secondary' size={size} weight={weight} />;
}
