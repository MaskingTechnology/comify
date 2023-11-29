
import React from 'react';
import Panel from './designsystem/blocks/panel/Panel.js';
import Button from './designsystem/blocks/button/Button.js';

export default function App()
{
    return (
        <section>
            <h1>Amazing buttons</h1>
            <Panel type="normal" >
                <Button type="primary" />
                <Button type="secondary" />
                <Button type="disabled" />
            </Panel>
        </section>
    );
}
