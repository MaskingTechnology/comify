
import './Panel.css';

export type PanelProps =
    {
        type: "normal" | "alert" | "card";
        children: React.ReactNode;
    };

export default function Panel(props: PanelProps)
{
    return (
        <div className={props.type} >
            {props.children}
        </div>
    );
}
