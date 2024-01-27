
import React from 'react';

import type CreatorView from '../../../../domain/creator/CreatorView';

import CreatorIdentity from '../../creator/Identity';
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
    identity: CreatorView;
};

export default function Component({ navigation, identity }: Props)
{
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
            <CreatorIdentity creator={identity} />
        </footer>
    </div>;
}
