
import { useNavigate } from 'react-router-dom';

import { Column } from '../designsystem/module';

import { ApplicationIntroduction, ApplicationLegalInfo } from '../components/module';

export default function Feature()
{
    const navigate = useNavigate();

    return <Column gap='medium' alignX='stretch' alignY='top'>
        <ApplicationIntroduction getInHandler={() => navigate('/login')} />
        <ApplicationLegalInfo />
    </Column>;
}
