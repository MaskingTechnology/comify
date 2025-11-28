
import { NavLink } from 'react-router-dom';

import { Column, Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly vertical: boolean;
    readonly title: string;
    readonly to: string;
    readonly activeIcon: string;
    readonly inactiveIcon: string;
};

export default function Component({ vertical, title, to, activeIcon, inactiveIcon }: Props)
{
    const Container = vertical ? Row : Column;

    const gapSize = vertical ? 'medium' : 'small';
    const alignX = vertical ? 'left' : 'center';
    const iconSize = vertical ? '1.6em' : '2em';
    const textSize = vertical ? 'large' : 'small';

    return <NavLink style={{ 'textDecoration': 'none' }} to={to}>
        {({ isActive }) => (
            <Container gap={gapSize} alignX={alignX} alignY='center'>
                <Image source={isActive ? activeIcon : inactiveIcon} width={iconSize} />
                <Text value={title} type={isActive ? 'primary' : 'secondary'} size={textSize} weight={isActive ? 'bold' : 'normal'} />
            </Container>
        )}
    </NavLink>;
}
