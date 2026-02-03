
import { Select } from '@maskingtech/designsystem';

type Props = {
    readonly selected?: 'recent' | 'popular';
    readonly onChange?: (newKey: string) => void;
};

const options = new Map<string, string>();
options.set('recent', 'Most recent');
options.set('popular', 'Most popular');

export default function Component({ selected, onChange }: Props)
{
    return <Select border='none' name='order'
        options={options}
        value={selected}
        onChange={event => { if (onChange !== undefined) onChange(event.target.value); }}
    />;
}
