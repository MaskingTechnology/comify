
import { useLocation, useNavigate } from 'react-router-dom';

import { Menu } from '@maskingtech/designsystem';

type Item ={
    readonly title: string;
    readonly route: string;
    readonly activeIcon: string;
    readonly inactiveIcon: string;
}

type Props = {
    readonly vertical: boolean;
    readonly items: Item[];
};

export default function Component({ vertical, items }: Props)
{
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname.includes(path);

    return <Menu orientation={vertical ? 'vertical' : 'horizontal'}>
        {
            items.map(item =>
                <Menu.Item
                    key={item.title}
                    title={item.title}
                    active={isActive(item.route)}
                    activeIcon={item.activeIcon}
                    inactiveIcon={item.inactiveIcon}
                    orientation={vertical ? 'horizontal' : 'vertical'} // Opposite direction
                    onClick={() => navigate(item.route)}
                />
            )
        }
    </Menu>;
}
