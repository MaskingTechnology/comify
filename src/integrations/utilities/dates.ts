
import daysjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

daysjs.extend(relativeTime);

export function timeElapsed(date: Date): string
{
    return daysjs(date).fromNow();
}
