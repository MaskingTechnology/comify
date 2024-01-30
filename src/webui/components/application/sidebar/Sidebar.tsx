
import React from 'react';

import type CreatorView from '../../../../domain/creator/CreatorView';

import CreatorIdentity from '../../creator/Identity';
import Navigation from '../navigation/Navigation';

import Logo from '../Logo';

import './Sidebar.css';

export type Props = {
    identity: CreatorView;
};

export default function Component({ identity }: Props)
{
    return <div className='application-sidebar'>
        <header>
            <Logo />
        </header>
        <Navigation />
        <footer>
            <CreatorIdentity creator={identity} />
        </footer>
    </div>;
}
