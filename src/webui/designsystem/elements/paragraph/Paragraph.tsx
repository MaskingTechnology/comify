
import React from 'react';

import './Paragraph.css';

export type ParagraphProps = {
    size?: 'large' | 'medium' | 'small';
    children: React.ReactNode;
};

export default function Paragraph(props: ParagraphProps)
{
    const size = props.size ?? 'medium';

    return <p className={'ds-paragraph ds-paragraph-size-' + size}>
        {props.children}
    </p>;
}
