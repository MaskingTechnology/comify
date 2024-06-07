
import './Text.css';

export type Props = {
    readonly value: string;
    readonly type?: 'primary' | 'secondary';
    readonly size?: 'large' | 'medium' | 'small';
    readonly weight?: 'light' | 'normal' | 'bold';
    readonly wrap?: 'none' | 'normal' | 'break-word';
};

export default function Element({ value, type, size, weight, wrap }: Props)
{
    const className = 'text'
        + ' type-' + (type ?? 'primary')
        + ' size-' + (size ?? 'medium')
        + ' weight-' + (weight ?? 'normal')
        + ' wrap-' + (wrap ?? 'none');

    return <span className={className}>
        {value}
    </span>;
}
