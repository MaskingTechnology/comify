
import './Image.css';

export type Props = {
    readonly source: string;
    readonly title?: string;
    readonly alt?: string;
    readonly width?: string;
    readonly height?: string;
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
