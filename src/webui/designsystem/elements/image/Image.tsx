
import './Image.css';

export type Props = {
    source: string;
    title?: string;
    alt?: string;
    width?: string;
    height?: string;
};

export default function Element({ source, title, alt, width, height }: Props)
{
    return <img
        title={title}
        alt={alt}
        width={width}
        height={height}
        src={source}
    />;
}
