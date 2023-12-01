
import './Image.css';

export type ImageProps = {
    url: string;
    type: "picture" | "portrait";
};

export default function Image(props: ImageProps)
{
    return (
        <img className={"ds-image ds-image-" + props.type} src={props.url} />
    );
}
