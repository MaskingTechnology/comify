
import './Image.css';

export type Props = {
    readonly source: string;
    readonly title?: string;
    readonly alt?: string;
    readonly width?: string;
    readonly height?: string;
    readonly fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
};

export default function Element({ source, title, alt, width, height, fit }: Props)
{
    const className = 'image'
        + ' fit-' + (fit ?? 'contain');

    return <img
        className={className}
        title={title}
        alt={alt}
        width={width}
        height={height}
        src={source}
    />;
}
