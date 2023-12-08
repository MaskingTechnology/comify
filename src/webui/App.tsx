
import React from 'react';

import Form from './designsystem/blocks/form/Form.js';
import Title from './designsystem/blocks/title/Title.js';
import Input from './designsystem/compounds/input/Input.js';
import Label from './designsystem/blocks/label/Label.js';
import TextBox from './designsystem/blocks/textbox/TextBox.js';
import Panel from './designsystem/blocks/panel/Panel.js';
import Message from './designsystem/blocks/message/Message.js';
import Textarea from './designsystem/blocks/textarea/TextArea.js';
import Select from './designsystem/blocks/select/Select.js';
import Button from './designsystem/blocks/button/Button.js';
import Ruler from './designsystem/blocks/ruler/Ruler.js';

export default function App()
{
    const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, risus scelerisque ornare cursus, magna mi viverra ipsum, sit amet vestibulum leo velit condimentum lectus. Fusce id dignissim dui. Suspendisse et metus in purus vulputate lacinia ut at nisl. Nullam et quam feugiat, fermentum turpis in, dictum turpis. Aliquam eget tempor orci. Nulla vitae nisi ultrices, mattis sapien ac, egestas libero. Integer turpis nisl, luctus id tellus a, cursus tempus lacus. Cras eleifend ipsum ut mauris lobortis, nec vulputate risus elementum.';
    const values = new Map<string, string>();
    values.set('1', 'Lorem ipsum dolor sit amet');
    values.set('2', 'Consectetur adipiscing elit');
    values.set('3', 'Sed iaculis, risus scelerisque ornare cursus');

    const submitHandler = (event: any) =>
    {
        event.preventDefault();

        console.log(event.target.fullName.value);
    };

    return (
        <Panel>
            <Title value="Dit is de titel" />
            <Message value={message} />
            <Panel type="error"><Message value="Dit is een foutmelding" /></Panel>
            <Panel type="warning"><Message value="Dit is een waarschuwing" /></Panel>
            <Panel type="alert"><Message value="Dit is een opletten" /></Panel>
            <Panel type="success"><Message value="Dit is een succes" /></Panel>
            <Form submitHandler={submitHandler}>
                <Input
                    label={<Label value='Wat is je volledige naam?' />}
                    element={<TextBox name="fullName" placeholder='Full name' />}
                />
                <Input
                    label={<Label value='Schrijf hier je levensverhaal' />}
                    element={<Textarea name="lifeStory" placeholder='Life story' />}
                />
                <Input
                    label={<Label value='Selecteer hier je favo lipsum' />}
                    element={<Select name="favorite" values={values} />}
                />
                <Button type='disabled' text='Doet het niet' />
                <Button type='secondary' text='Cancel' />
                <Button type='primary' text='Primair' />
                <Button type='submit' text='Submit' />
            </Form>
        </Panel >
    );
}
