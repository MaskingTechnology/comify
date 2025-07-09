
import { Row } from '^/webui/designsystem';

import ReportSelection from './elementary/ReportSelection';

type Props = {
    readonly selected?: 'content' | 'scam';
    readonly onReasonChange?: (oldKey: string, newKey: string) => void;
};

export default function Component({ selected, onReasonChange }: Props)
{
    return <Row alignX='justify'>
        <ReportSelection
            key='reports'
            selected={selected}
            onChange={onReasonChange}
        />
    </Row>;
}
