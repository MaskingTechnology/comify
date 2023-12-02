
import React from 'react';

import './Form.css';

import Panel from '../../blocks/panel/Panel.js';

import { TitleProps } from '../../blocks/title/Title.js';
import { MessageProps } from '../../blocks/message/Message.js';
import { ButtonProps } from '../../blocks/button/Button.js';

export type FormProps = {
    title: React.ReactElement<TitleProps>;
    message?: React.ReactElement<MessageProps>;
    children: React.ReactNode;
    aside?: React.ReactNode;
    primaryButton: React.ReactElement<ButtonProps>;
    secondaryButton?: React.ReactElement<ButtonProps>;
};

export default function Form(props: FormProps) 
{
    return <div className='ds-form'>
        <Panel>
            {props.title}
            {props.message}
            <form>
                {props.children}
            </form>
            <div>
                {props.aside}
                {props.secondaryButton}
                {props.primaryButton}
            </div>
        </Panel>
    </div>;
}
