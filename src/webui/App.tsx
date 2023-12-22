// Missing empty line
import React from 'react';

import Avatar from './designsystem/elements/avatar/Avatar';
import Button from './designsystem/elements/button/Button';
import Column from './designsystem/elements/column/Column';
import Form from './designsystem/elements/form/Form';
import Icon from './designsystem/elements/icon/Icon';
import Image from './designsystem/elements/image/Image';
import Input from './designsystem/elements/input/Input';
import Label from './designsystem/elements/label/Label';
import Link from './designsystem/elements/link/Link';
import Panel from './designsystem/elements/panel/Panel';
import Paragraph from './designsystem/elements/paragraph/Paragraph';
import Row from './designsystem/elements/row/Row';
import Ruler from './designsystem/elements/ruler/Ruler.js';
import Select from './designsystem/elements/select/Select';
import Textarea from './designsystem/elements/textarea/TextArea';
import TextBox from './designsystem/elements/textbox/TextBox';
import Title from './designsystem/elements/title/Title';

const lastNameOptions = new Map<string, string>();
lastNameOptions.set('vanvliet', 'van Vliet');
lastNameOptions.set('other', 'Other (specify in the description)');

export default function App()
{
    return <>
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
            <Form>
                <Input label={<Label value="First name" />} element={<TextBox name="firstname" value="Peter" />} />
                <Input label={<Label value="Last name" />} element={<Select name="lastname" values={lastNameOptions} />} />
                <Input label={<Label value="Description" />} element={<Textarea name="description" placeholder="Juicy details are accepted..." />} />
                <Row align="right" gap="small">
                    <Button type="secondary" text="Cancel" />
                    <Button type="submit" text="Submit" />
                </Row>
            </Form>
            <Ruler type="horizontal" />
            <Paragraph size="small">
                By submitting this form you agree that this form is useless.
            </Paragraph>
        </Panel>
    </>;
}
