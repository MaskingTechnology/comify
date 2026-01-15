
import type { ReactNode } from 'react';
import { NavLink } from "react-router-dom";

import { ClickArea, Column, Row, Ruler, Text } from '@maskingtech/designsystem';

type Tab ={
    readonly name: string;
    readonly route: string;
}

type Props = {
    readonly items: Tab[];
    readonly children?: ReactNode;
};

export default function Component({ items, children }: Props)
{
    return <Column alignX='stretch' gap='medium'>
        <Column alignX='stretch' gap='small'>
            <Row alignX='justify'>
                {
                    items.map(item =>
                        <Column key={item.route} alignX='center'>
                            <ClickArea padding='none'>
                                <NavLink to={item.route}>
                                    {({ isActive }) => (
                                        <Text value={item.name} weight={isActive ? 'bold' : 'normal'} size='large' />
                                    )}
                                </NavLink>
                            </ClickArea>
                        </Column>
                    )
                }
            </Row>
            <Ruler direction='horizontal' size='small' />
        </Column>
        {children}
    </Column>;
}
