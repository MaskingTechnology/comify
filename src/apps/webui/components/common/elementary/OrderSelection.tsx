
import { Dropdown } from '^/webui/designsystem';

type Props = {
    readonly selected?: 'recent' | 'popular';
    readonly onChange?: (oldKey: string, newKey: string) => void;
};

const options = new Map<string, string>();
options.set('recent', 'Most recent');
options.set('popular', 'Most popular');

export default function Component({ selected, onChange }: Props)
{
    return <Dropdown
        options={options}
        selected={selected}
        onChange={onChange}
    />;
}
