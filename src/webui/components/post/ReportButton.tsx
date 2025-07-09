
import { ClickArea } from '^/webui/designsystem';
import ReportIcon from './elementary/ReportIcon';

type Props = {
    readonly onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <ClickArea onClick={onClick}>
        <ReportIcon />
    </ClickArea>;
}
