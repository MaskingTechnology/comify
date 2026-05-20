
import { Text } from '@maskingtech/designsystem';

type Props = {
    readonly value: number;
    readonly size?: 'large' | 'medium' | 'small';
    readonly weight?: 'light' | 'normal' | 'bold';
};

const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

export default function Component({ value, size = 'medium', weight = 'normal' }: Props)
{
    return <Text
        value={formatter.format(value)}
        size={size}
        weight={weight}
    />;
}
