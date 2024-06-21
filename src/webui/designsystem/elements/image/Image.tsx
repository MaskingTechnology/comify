
import './Image.css';

export type Props = {
    readonly source: string;
    readonly title?: string;
    readonly alt?: string;
    readonly width?: string;
    readonly height?: string;
    readonly fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
};

export default function Element({ source, title, alt, width, height, fit = 'contain' }: Props)
{
    const className = 'image'
        + ' fit-' + fit;

    const style = { width, height };

    return <img
        className={className}
        title={title}
        alt={alt}
        style={style}
        src={source}
    />;
}
