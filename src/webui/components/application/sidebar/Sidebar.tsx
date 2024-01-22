
import React from 'react';

import { Avatar } from '../../../designsystem/module';

import CreatorIdentity from '../../creator/Identity';

import Logo from '../Logo';
import Navigation from '../navigation/Navigation';
import NavigationItem from '../navigation/Item';

import './Sidebar.css';

const avatarMedium = <Avatar source='https://masking.tech/images/peter.jpg' size='medium' />;

export type NavigationItem = {
    icon: string;
    title: string;
    to: string;
};

export type SidebarProps = {
    navigation: NavigationItem[];
};

export default function Sidebar(props: SidebarProps)
{
    return <div className='application-sidebar'>
        <header>
            <Logo />
        </header>
        <Navigation>
            {props.navigation.map(item =>
            {
                return <NavigationItem key={item.to} icon={item.icon} title={item.title} to={item.to} />;
            })}
        </Navigation>
        <footer>
            <CreatorIdentity avatar={avatarMedium} username='Peter van Vliet' nickname='ErrorA' />
        </footer>
    </div>;
}
