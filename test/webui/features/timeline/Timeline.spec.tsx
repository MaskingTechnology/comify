
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import Timeline from '^/webui/features/Timeline';

import { DATABASES, FILE_STORES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withPostsAndCreators(),
        FILE_STORES.empty()
    ]);
});

describe('Timeline feature', async () =>
{
    it('Should render the timeline for the user', async () =>
    {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<Timeline />} />
                </Routes>
            </MemoryRouter>
        );

        await waitForElementToBeRemoved(() => document.querySelector('.spinner'));

        const buttonElement = screen.getByText('No results found');

        expect(buttonElement).toBeInTheDocument();
    });
});
