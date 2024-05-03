
import './Ruler.css';

export type Props = {
    readonly type: 'horizontal' | 'vertical';
    readonly size?: 'small' | 'medium' | 'large';
};

export default function Element({ type, size }: Props)
{
    const className = 'ds-ruler'
        + ' ds-ruler-' + type
        + ' ds-ruler-' + (size ?? 'medium');

    return <div className={className} />;
}
