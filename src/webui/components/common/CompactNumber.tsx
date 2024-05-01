
import { Text } from '^/webui/designsystem';

export type Props = {
    value: number;
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
};

const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

export default function Component({ value, size, weight }: Props)
{
    size ??= 'medium';
    weight ??= 'normal';

    return <Text
        value={formatter.format(value)}
        size={size}
        weight={weight}
    />;
}
