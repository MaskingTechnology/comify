
import React from 'react';

import
{
    Tabs, Tab, Selection,
    Avatar, Button, Column, Form, Icon, Input, Label, Link, Panel, Paragraph, Row, Ruler, Select, TextArea, TextBox, Title
} from './designsystem/module';

const lastNameOptions = new Map<string, string>();
lastNameOptions.set('vanvliet', 'van Vliet');
lastNameOptions.set('other', 'Other (specify in the description)');

const storyOptions = new Map<string, string>();
storyOptions.set('lorem', 'Lorem Ipsum');
storyOptions.set('other', 'Other, not better');

function handleFormSubmit(event: React.FormEvent<HTMLFormElement>)
{
    event.preventDefault();
    console.log('Form submitted');
}

function handleFormCancel(event: React.MouseEvent<HTMLInputElement, MouseEvent>)
{
    event.preventDefault();
    console.log('Form canceled');
}

function handleSelectionChange(oldKey: string, newKey: string)
{
    console.log('Selection changed to ' + newKey);
}

export default function App()
{
    return <div className='ds'>
        <Tabs separator={<Ruler type="horizontal" />}>
            <Tab title="Useless form">
                <Panel>
                    <Title>
                        Hello World <Avatar source="https://masking.tech/images/peter.jpg" size="small" />
                    </Title>
                    <Paragraph>
                        This is a beautiful design system made by <Link url="https://masking.tech" target="_blank">Masking Technology</Link>
                    </Paragraph>
                    <Panel type="warning">
                        <Icon type="warning" /> Only fill this form if your first name is Peter
                    </Panel>
                    <Form submitHandler={handleFormSubmit}>
                        <Input label={<Label value="First name" />} element={<TextBox name="firstname" value="Peter" />} />
                        <Input label={<Label value="Last name" />} element={<Select name="lastname" options={lastNameOptions} />} />
                        <Input label={<Label value="Description" />} element={<TextArea name="description" placeholder="Juicy details are accepted..." />} />
                        <Row align="right" gap="small">
                            <Button type="secondary" text="Cancel" clickHandler={handleFormCancel} />
                            <Button type="submit" text="Submit" />
                        </Row>
                    </Form>
                    <Ruler type="horizontal" />
                    <Paragraph size="small">
                        By submitting this form you agree that this form is useless.
                    </Paragraph>
                </Panel>
            </Tab>
            <Tab title="Boring story">
                <Selection options={storyOptions} changeHandler={handleSelectionChange}></Selection>
                <Column gap="none" align="center">
                    <Title>Lorem Ipsum</Title>
                    <Row gap="large">
                        <Paragraph>
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry.<br />
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,<br />
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br />
                            It has survived not only five centuries, but also the leap into electronic typesetting,<br />
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset<br />
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like<br />
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </Paragraph>
                        <Avatar source="https://masking.tech/images/peter.jpg" size='large' />
                    </Row>
                </Column>
            </Tab>
        </Tabs>
    </div>;
}
