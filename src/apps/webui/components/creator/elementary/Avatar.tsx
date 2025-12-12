
import { Avatar } from '@maskingtech/designsystem';
import portraitImage from '^/assets/images/portrait.svg';

type Props = {
    readonly url?: string;
    readonly size: 'small' | 'medium' | 'large';
};

function getWidth(size: string): string
{
    switch (size)
    {
        case 'small': return '1.7em';
        case 'medium': return '2.2em';
        case 'large': return '3.7em';
        default: return '';
    }
}

export default function Component({ url, size }: Props)
{
    const source = url ?? portraitImage;
    const width = getWidth(size);

    return <Avatar source={source} width={width} />;
}
