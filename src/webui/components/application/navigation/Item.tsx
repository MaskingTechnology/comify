
import { NavLink, useLocation } from 'react-router-dom';

import { Image, Row, Text } from '^/webui/designsystem';

import './Item.css';

type Props = {
    readonly title: string;
    readonly to: string;
    readonly activeIcon: string;
    readonly inactiveIcon: string;
};

export default function Component({ title, to, activeIcon, inactiveIcon }: Props)
{
    const location = useLocation();
    const isActive = location.pathname === to;

    return <NavLink className='navigation-item' to={to}>
        <Row gap='medium' alignY='center'>
            <Image source={isActive ? activeIcon : inactiveIcon} width='26px' />
            <Text value={title} type={isActive ? 'primary' : 'secondary'} size='large' weight={isActive ? 'bold' : 'normal'} />
        </Row>
    </NavLink>;
}
