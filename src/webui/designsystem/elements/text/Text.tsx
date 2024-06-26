
import './Text.css';

type Props = {
    readonly value: string;
    readonly type?: 'primary' | 'secondary';
    readonly size?: 'large' | 'medium' | 'small';
    readonly weight?: 'light' | 'normal' | 'bold';
    readonly wrap?: 'none' | 'normal' | 'break-word';
};

export default function Element({ value, type = 'primary', size = 'medium', weight = 'normal', wrap = 'none' }: Props)
{
    const className = 'text'
        + ' type-' + type
        + ' size-' + size
        + ' weight-' + weight
        + ' wrap-' + wrap;

    return <span className={className}>
        {value}
    </span>;
}
