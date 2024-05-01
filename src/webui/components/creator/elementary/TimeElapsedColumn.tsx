
import { ClickArea, Column, Text } from '^/webui/designsystem/module';

import TimeElapsed from '../../common/TimeElapsed';

export type Props = {
    fullName: string;
    date: Date;
    onNameClick: () => void;
};

export default function Component({ fullName, date, onNameClick }: Props)
{
    return <Column alignY='justify' gap='none'>
        <ClickArea onClick={onNameClick}>
            <Text value={fullName} size='medium' weight='bold' />
        </ClickArea>
        <TimeElapsed date={date} size='small' />
    </Column>;
}
