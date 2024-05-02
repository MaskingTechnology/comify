
import { timeElapsed } from '^/integrations/utilities/dates';
import { Text } from '^/webui/designsystem';

export type Props = {
    date: Date;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

export default function Component({ date, size, weight }: Props)
{
    size ??= 'medium';
    weight ??= 'normal';

    const value = timeElapsed(date);

    return <Text value={value} type='secondary' size={size} weight={weight} />;
}
