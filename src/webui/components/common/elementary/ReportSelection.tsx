
import { Dropdown } from '^/webui/designsystem';

type Props = {
    readonly selected?: 'content' | 'scam';
    readonly onChange?: (oldKey: string, newKey: string) => void;
};

const options = new Map<string, string>();
options.set('content', 'Inappropiate content');
options.set('scam', 'Scam, fraud or spam');

export default function Component({ selected, onChange }: Props)
{
    return <Dropdown
        options={options}
        selected={selected}
        onChange={onChange}
    />;
}
