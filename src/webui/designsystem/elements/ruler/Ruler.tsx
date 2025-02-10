
import './Ruler.css';

type Props = {
    readonly direction: 'horizontal' | 'vertical';
    readonly size?: 'small' | 'medium' | 'large';
};

export default function Element({ direction, size = 'medium' }: Props)
{
    const className = 'ruler'
        + ' direction-' + direction
        + ' size-' + size;

    return <div className={className} />;
}
