
import { Column } from '@maskingtech/designsystem';
import { ApplicationIntroduction, ApplicationLegalInfo } from '^/webui/components';

import useNavigateHome from './hooks/useNavigateHome';

export default function Feature()
{
    const navigateHome = useNavigateHome();

    return <Column gap='medium' alignX='stretch' alignY='top'>
        <ApplicationIntroduction onGetIn={navigateHome} />
        <ApplicationLegalInfo />
    </Column>;
}
