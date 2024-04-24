
import { useNavigate } from 'react-router-dom';

import { ApplicationIntroduction, ApplicationLegalInfo } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';

export default function Feature()
{
    const navigate = useNavigate();

    return <Column gap='medium' alignX='stretch' alignY='top'>
        <ApplicationIntroduction getInHandler={() => navigate('/login')} />
        <ApplicationLegalInfo />
    </Column>;
}
