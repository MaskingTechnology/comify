
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import Home from '^/webui/features/Home';
import Login from '^/webui/features/Login';

describe('Home feature', async () =>
{
    it('Renders the Home page and redirect to login', async () =>
    {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </MemoryRouter>
        );

        const user = userEvent.setup();

        const buttonElement = screen.getByDisplayValue('Get in');

        expect(buttonElement).toBeInTheDocument();

        await user.click(buttonElement);

        const redirect = screen.getByText('Redirecting...');

        expect(redirect).toBeInTheDocument();
    });
});
