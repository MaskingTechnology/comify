
import './ClickArea.css';

export type Props = {
    padding?: 'large' | 'medium' | 'small' | 'none';
    clickHandler?: () => void;
    children?: React.ReactNode;
};

export default function Element({ padding, clickHandler, children }: Props)
{
    const className = 'ds-clickarea'
        + ' ds-clickarea-padding-' + (padding ?? 'none');

    return <div className={className} onClick={clickHandler}>
        {children}
    </div>;
}
