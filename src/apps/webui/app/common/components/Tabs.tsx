
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Column, Tabs } from '@maskingtech/designsystem';

type Tab ={
    readonly title: string;
    readonly route: string;
}

type Props = {
    readonly items: Tab[];
    readonly children?: ReactNode;
};

export default function Component({ items, children }: Props)
{
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname.includes(path);

    return <Column alignX='stretch' gap='medium'>

        <Tabs>
            {
                items.map(item =>
                    <Tabs.Tab key={item.title} title={item.title} active={isActive(item.route)} onClick={() => navigate(item.route)} />
                )
            }
        </Tabs>
        
        {children}

    </Column>;
}
