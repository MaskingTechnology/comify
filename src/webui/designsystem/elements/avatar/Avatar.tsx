
import './Avatar.css';

type Props = {
    readonly source: string;
    readonly title?: string;
    readonly alt?: string;
    readonly width?: string;
    readonly height?: string;
    readonly fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
};

export default function Element({ source, title, alt = 'Avatar', width, height, fit = 'contain' }: Props)
{
    const className = 'avatar'
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
