
import daysjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

daysjs.extend(relativeTime);

export default class DateFormat
{
    static fromNow(date: Date): string
    {
        return daysjs(date).fromNow();
    }
}
