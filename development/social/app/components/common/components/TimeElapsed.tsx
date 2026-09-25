
import { Text } from '@maskingtech/designsystem';

import { timeElapsed } from '@comify/common/integrations/utilities/dates';

type Props = {
    readonly date: Date;
    readonly size?: 'large' | 'medium' | 'small';
    readonly weight?: 'light' | 'normal' | 'bold';
};

export default function ({ date, size = 'medium', weight = 'normal' }: Props)
{
    const value = timeElapsed(date);

    return <Text value={value} type='secondary' size={size} weight={weight} />;
}
