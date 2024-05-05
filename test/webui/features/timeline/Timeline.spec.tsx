import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Timeline from '^/webui/features/Timeline';
import { BrowserRouter } from 'react-router-dom';

import database from '^/integrations/database/module';

describe('Timeline feature', async () =>
{
    it('Renders an empty timeline', async () =>
    {
        database.connect();

        render(<Timeline />, { wrapper: BrowserRouter });

        const spinner = screen.getByTestId('ds-spinner');

        await waitForElementToBeRemoved(spinner);

        const results = screen.getByText('No results found');

        expect(results).toBeInTheDocument();
    });
});
