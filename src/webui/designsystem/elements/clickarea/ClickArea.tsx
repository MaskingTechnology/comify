
import './ClickArea.css';

export type Props = {
    padding?: 'large' | 'medium' | 'small' | 'none';
    onClick?: () => void;
    children?: React.ReactNode;
};

export default function Element({ padding, onClick, children }: Props)
{
    const className = 'ds-clickarea'
        + ' ds-clickarea-padding-' + (padding ?? 'none');

    return <div className={className} onClick={onClick}>
        {children}
    </div>;
}
