
import './Label.css';

export type Props = {
    readonly value: string;
};

export default function Element({ value }: Props)
{
    return <label className="ds-label">
        {value}
    </label>;
}
