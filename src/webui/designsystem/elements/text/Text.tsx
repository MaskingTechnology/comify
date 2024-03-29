
import './Text.css';

export type Props = {
    value: string;
    type?: 'primary' | 'secondary';
    size?: 'large' | 'medium' | 'small';
    weight?: 'light' | 'normal' | 'bold';
    wrap?: 'none' | 'normal' | 'break-word';
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
