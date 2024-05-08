
import { ClickArea, Column, Text } from '^/webui/designsystem';

import TimeElapsed from '../../common/TimeElapsed';

type Props = {
    readonly fullName: string;
    readonly date: Date;
    readonly onNameClick: () => void;
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
