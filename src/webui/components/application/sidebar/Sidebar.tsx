
import React from 'react';

import type Creator from '../../../../domain/client/views/Creator';

import IdentityRow from '../../creator/IdentityRow';
import Navigation from '../navigation/Navigation';
import NavigationItem from '../navigation/Item';

import Logo from '../Logo';

import './Sidebar.css';

export type NavigationItem = {
    icon: string;
    title: string;
    to: string;
};

export type Props = {
    navigation: NavigationItem[];
    identity: Creator;
};

export default function Component(props: Props)
{
    const navigation = props.navigation;
    const identity = props.identity;

    return <div className='application-sidebar'>
        <header>
            <Logo />
        </header>
        <Navigation>
            {navigation.map(item =>
            {
                return <NavigationItem key={item.to} icon={item.icon} title={item.title} to={item.to} />;
            })}
        </Navigation>
        <footer>
            <IdentityRow creator={identity} />
        </footer>
    </div>;
}
