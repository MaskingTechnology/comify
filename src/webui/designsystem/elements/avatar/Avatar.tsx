
import './Avatar.css';

export type Props = {
    readonly size?: string;
    readonly source: string;
};

export default function Element({ size, source }: Props)
{
    return <img
        className='ds-avatar'
        src={source}
        width={size}
        height={size}
    />;
}
