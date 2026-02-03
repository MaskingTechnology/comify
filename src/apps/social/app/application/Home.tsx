
import { Column } from '@maskingtech/designsystem';

import Introduction from './components/Introduction';
import LegalInfo from './components/LegalInfo';

import useNavigateHome from './hooks/useNavigateHome';

export default function Feature()
{
    const navigateHome = useNavigateHome();

    return <Column gap='medium' alignX='stretch' alignY='top'>
        <Introduction onGetIn={navigateHome} />
        <LegalInfo />
    </Column>;
}
