
import { Column } from '@maskingtech/designsystem';

import Introduction from './components/Introduction';
import LegalInfo from './components/LegalInfo';

import useNavigateLogin from './hooks/useNavigateLogin';

export default function Feature()
{
    const login = useNavigateLogin();

    return <Column gap='medium' alignX='stretch' alignY='top'>
        <Introduction onGetIn={login} />
        <LegalInfo />
    </Column>;
}
