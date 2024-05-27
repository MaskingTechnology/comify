
import './Button.css';

export type Props = {
    readonly type?: 'submit' | 'primary' | 'secondary' | 'disabled';
    readonly size?: 'large' | 'medium' | 'small';
    readonly text: string;
    readonly onClick?: () => void;
};

export default function Element({ type, size, text, onClick }: Props)
{
    type ??= 'primary';
    size ??= 'medium';

    const className = 'ds-button'
        + ' ds-button-' + type
        + ' ds-button-size-' + size;

    const disabled = type === 'disabled';
    const inputType = type === 'submit' ? 'submit' : 'button';

    const clickHandler = onClick === undefined
        ? () => { }
        : onClick;

    return <input type={inputType} onClick={clickHandler} className={className} disabled={disabled} value={text} />;
}
