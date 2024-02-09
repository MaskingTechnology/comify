
import type CreatorView from '../../../../domain/creator/view/CreatorView';
import CreatorIdentity from '../../creator/Identity';
import Logo from '../Logo';
import Navigation from '../navigation/Navigation';
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
        <Navigation identity={identity} />
        <footer>
            <CreatorIdentity creator={identity} />
        </footer>
    </div>;
}
