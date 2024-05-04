
import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import Button from '^/webui/designsystem/elements/button/Button';

describe('Button', async () =>
{
    it('Bla bla button', async () =>
    {
        const props = {
            text: 'test',
            onClick: () => { console.log('click'); }
        };

        const button = Button(props);

        render(button);

        const buttonElement = screen.getByRole('button');

        buttonElement.click();
        expect(buttonElement).toBeDefined();
    });
});
