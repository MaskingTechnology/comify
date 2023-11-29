
import { MouseEventHandler } from 'react';
import './Button.css';

export type ButtonProps =
    {
        type: "primary" | "secondary" | "disabled";
        text: string;
        onclick?: MouseEventHandler<HTMLButtonElement>;
    };

export default function Button(props: ButtonProps)
{
    return (
        <button onClick={props.onclick} className={props.type} disabled={props.type === "disabled"}>{props.text}</button>
    );
}