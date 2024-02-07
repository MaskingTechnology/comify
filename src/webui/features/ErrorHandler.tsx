
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Panel, Title, Paragraph } from '../designsystem/module';

export type Props = {
    error: unknown;
};

export default function Feature({ error }: Props)
{
    const navigate = useNavigate();

    const handleError = () =>
    {
        if (error?.constructor?.name === 'Unauthorized')
        {
            navigate('/getin');
        }
    };

    useEffect(() => { handleError(); }, [error]);

    return <Panel type='normal'>
        <Title>Oops...</Title>
        <Paragraph>An unexpected error occurred. Please try again!</Paragraph>
    </Panel>;
}
