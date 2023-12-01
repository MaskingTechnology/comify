
import './Panel.css';

export type PanelProps = {
    type: "normal" | "alert" | "border";
    children?: React.ReactNode;
};

export default function Panel(props: PanelProps)
{
    return (
        <div className={"ds-panel ds-panel-" + props.type}>
            {props.children}
        </div>
    );
}
