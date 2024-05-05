import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Timeline from '^/webui/features/Timeline';
import { BrowserRouter } from 'react-router-dom';

import database from '^/integrations/database/module';

describe('Timeline feature', async () =>
{
    it('Renders the timeline', async () =>
    {
        database.connect();

        render(<Timeline />, { wrapper: BrowserRouter });
    });
});
