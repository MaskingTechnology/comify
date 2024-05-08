
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
    const className = 'ds-text'
        + ' ds-text-' + (type ?? 'primary')
        + ' ds-text-size-' + (size ?? 'medium')
        + ' ds-text-weight-' + (weight ?? 'normal')
        + ' ds-text-wrap-' + (wrap ?? 'none');

    return <span className={className}>
        {value}
    </span>;
}
