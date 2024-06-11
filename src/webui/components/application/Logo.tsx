
import logoImage from '^/webui/assets/images/logo.svg';
import { Image } from '^/webui/designsystem';

type Props = {
    readonly size: 'small' | 'large';
};

export default function Component({ size }: Props)
{
    const height = size === 'small' ? '1.5em' : '2.2em';

    return <Image source={logoImage} height={height} />;
}
