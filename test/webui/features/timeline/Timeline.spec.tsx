
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import Routes from '^/webui/Routes';
import { AppContext } from '^/webui/contexts';
import { DATABASES, FILE_STORES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withPostsAndCreators(),
        FILE_STORES.empty()
    ]);
});

const identity: CreatorView =
{
    id: '1',
    fullName: 'My identity',
    nickname: 'myidentity',
    joinedAt: '2021-01-01T00:00:00Z',
    postCount: 1,
    followerCount: 0,
    followingCount: 0
};

function setIdentity(identity?: CreatorView)
{
    return identity;
}

const context = { identity, setIdentity };

describe('Timeline feature', async () =>
{
    it('Should render the timeline for the user', async () =>
    {
        render(
            <AppContext.Provider value={context}>
                <MemoryRouter initialEntries={["/timeline"]}>
                    <Routes />
                </MemoryRouter>
            </AppContext.Provider>
        );

        await waitForElementToBeRemoved(() => document.querySelector('.spinner'));

        const buttonElement = screen.getByText('No results found');

        expect(buttonElement).toBeInTheDocument();
    });
});
