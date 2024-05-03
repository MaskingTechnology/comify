
import './Avatar.css';

export type Props = {
    readonly size?: string;
    readonly source: string;
    readonly alt?: string;
};

export default function Element({ size, source, alt }: Props)
{
    alt = alt ?? 'Avatar';

    return <img
        className='ds-avatar'
        alt={alt}
        src={source}
        width={size}
        height={size}
    />;
}
