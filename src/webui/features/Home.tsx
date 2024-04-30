

import { ApplicationIntroduction, ApplicationLegalInfo } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useNavigateHome } from '^/webui/hooks/module';

export default function Feature()
{
    const navigateHome = useNavigateHome();

    return <Column gap='medium' alignX='stretch' alignY='top'>
        <ApplicationIntroduction getInHandler={navigateHome} />
        <ApplicationLegalInfo />
    </Column>;
}
