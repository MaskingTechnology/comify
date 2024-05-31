
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/feature';

import Identity from '../Identity';
import Logo from '../Logo';
import Navigation from '../navigation/Navigation';
import './Sidebar.css';

type Props = {
    readonly identity: CreatorView;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <div className='application-sidebar'>
        <header>
            <Logo />
        </header>
        <Navigation identity={identity} />
        <footer>
            <Identity identity={identity} onLogout={onLogout} />
        </footer>
    </div>;
}
