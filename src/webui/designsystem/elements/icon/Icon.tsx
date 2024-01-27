
import React from 'react';

import './Icon.css';

export type Props = {
    type: 'attachment' | 'bookmark' | 'box' | 'box-checked' | 'box-crossed' | 'calendar' | 'caution' | 'check' | 'clock' | 'close' | 'cloud'
    | 'comment' | 'diamond' | 'eye' | 'flag' | 'heart' | 'home' | 'info' | 'lock' | 'mail' | 'music' | 'phone' | 'piece' | 'question' | 'rain'
    | 'recycle' | 'search' | 'settings' | 'star' | 'sun' | 'tag' | 'trash' | 'umbrella' | 'unlock' | 'user' | 'video' | 'warning' | 'yinyang';
};

export default function Element({ type }: Props)
{
    return <span className={'ds-icon ds-icon-' + type} />;
}
