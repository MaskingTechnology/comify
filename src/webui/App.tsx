
import React from 'react';
import Panel from './designsystem/blocks/panel/Panel.js';
import Button from './designsystem/blocks/button/Button.js';
import Icon from './designsystem/blocks/icon/Icon.js';
import Image from './designsystem/blocks/image/Image.js';
import Ruler from './designsystem/blocks/ruler/Ruler.js';
import Title from './designsystem/blocks/title/Title.js';
import Label from './designsystem/blocks/label/Label.js';
import Message from './designsystem/blocks/message/Message.js';
import Link from './designsystem/blocks/link/Link.js';
import TextBox from './designsystem/blocks/textbox/TextBox.js';
import TextArea from './designsystem/blocks/textarea/TextArea.js';
import Select from './designsystem/blocks/select/Select.js';
import Avatar from './designsystem/blocks/avatar/Avatar.js';
import Input from './designsystem/compounds/input/Input.js';
import Form from './designsystem/components/form/Form.js';
import Tab from './designsystem/components/tab/Tabs.js';
import { Home } from './layouts/home/Home.js';

const myFunction = () =>
{
    console.log("Hello world!");
};

export default function App()
{
    const options = new Map<string, string>().set('1', 'One').set('2', 'Two').set('3', 'Three');
    const title = <Title size="large" value="Large title" />;
    const message = <Message value="Message" />;
    const primaryButton = <Button type="primary" text="Primary" clickHandler={myFunction} />;
    const secondaryButton = <Button type="secondary" text="Secondary" clickHandler={myFunction} />;
    const aside = <Message size="small" value="Aside" />;
    const form = <Form title={title} message={message} primaryButton={primaryButton} secondaryButton={secondaryButton} aside={aside}><Input label={<Label size="large" value="Large label" />} element={<TextBox name="Name" value="Textbox" />} /><br /></Form>;
    const tab = <Tab><Input label={<Label size="large" value="Large label" />} element={<TextBox name="Name" value="Textbox" />} /><br /><Input label={<Label size="large" value="Large label" />} element={<TextBox name="Name" value="Textbox" />} /><br /></Tab>;

    return (
        <section>
            <h1>Amazing design system!</h1>
            <h2>Home</h2>
            <Home mainTop={<h1>Top section</h1>} mainBottom={form} sidebarTop={<h1>Top section</h1>} sidebarBottom={<h1>Bottom section</h1>} />
        </section>
    );
}
