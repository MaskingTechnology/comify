
import './Ruler.css';

export type Props = {
    readonly direction: 'horizontal' | 'vertical';
    readonly size?: 'small' | 'medium' | 'large';
};

export default function Element({ direction, size }: Props)
{
    const className = 'ruler'
        + ' direction-' + direction
        + ' size-' + (size ?? 'medium');

    return <div className={className} />;
}
