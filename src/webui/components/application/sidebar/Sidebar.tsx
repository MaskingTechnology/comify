
import type CreatorView from '../../../../domain/creator/view/CreatorView';
import Identity from '../Identity';
import Logo from '../Logo';
import Navigation from '../navigation/Navigation';
import './Sidebar.css';

export type Props = {
    identity: CreatorView;
    logoutHandler: () => void;
};

export default function Component({ identity, logoutHandler }: Props)
{
    return <div className='application-sidebar'>
        <header>
            <Logo />
        </header>
        <Navigation identity={identity} />
        <footer>
            <Identity identity={identity} logoutHandler={logoutHandler} />
        </footer>
    </div>;
}
