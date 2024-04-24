
import { ClickArea, Column, Text } from '^/webui/designsystem/module';

import TimeElapsed from '../../common/TimeElapsed';

export type Props = {
    fullName: string;
    date: Date;
    profileHandler: () => void;
};

export default function Component({ fullName, date, profileHandler }: Props)
{
    return <Column alignY='justify' gap='none'>
        <ClickArea clickHandler={profileHandler}>
            <Text value={fullName} size='medium' weight='bold' />
        </ClickArea>
        <TimeElapsed date={date} size='small' />
    </Column>;
}
