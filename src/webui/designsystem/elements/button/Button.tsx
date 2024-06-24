
import './Button.css';

export type Props = {
    readonly type?: 'submit' | 'primary' | 'secondary' | 'disabled';
    readonly size?: 'large' | 'medium' | 'small';
    readonly text: string;
    readonly onClick?: () => void;
};

export default function Element({ type = 'primary', size = 'medium', text, onClick }: Props)
{
    const className = 'button'
        + ' type-' + type
        + ' size-' + size;

    const disabled = type === 'disabled';
    const inputType = type === 'submit' ? 'submit' : 'button';

    return <input type={inputType} onClick={onClick} className={className} disabled={disabled} value={text} />;
}
