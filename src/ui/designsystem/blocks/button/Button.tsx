
import './Button.css';

export type ButtonProps = {
    type: "primary" | "secondary" | "disabled";
};

export default function Button(props: ButtonProps)
{
    return (
        <button>Click me</button>
    );
}