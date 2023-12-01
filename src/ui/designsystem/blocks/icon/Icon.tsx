
import './Icon.css';

export type IconProps = {
    size: "small" | "medium" | "large";
    url: string;
};

export default function Icon(props: IconProps)
{
    return (
        <img className={"ds-icon ds-icon-" + props.size} src={props.url} />
    );
}
