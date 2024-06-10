
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { Ruler } from '^/webui/designsystem';

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
        <div className='content'>
            <div className='logo'>
                <Logo />
            </div>
            <Navigation identity={identity} />
            <div className='identity'>
                <Identity identity={identity} onLogout={onLogout} />
            </div>
        </div>
        <Ruler direction='vertical' size='medium' />
    </div>;
}
