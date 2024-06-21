
import { ReactNode } from 'react';
import './ClickArea.css';

export type Props = {
    readonly padding?: 'large' | 'medium' | 'small' | 'none';
    readonly onClick?: () => void;
    readonly children?: ReactNode;
};

export default function Element({ padding, onClick, children }: Props)
{
    const className = 'clickarea'
        + ' padding-' + (padding ?? 'none');

    return <div className={className} onClick={onClick}>
        {children}
    </div>;
}
