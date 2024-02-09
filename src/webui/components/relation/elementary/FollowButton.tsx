
import { Button } from '../../../designsystem/module';

export type Props = {
    isFollowing: boolean;
    followHandler: () => void;
};

export default function Component({ isFollowing, followHandler }: Props)
{
    return <Button
        type={isFollowing ? 'disabled' : 'secondary'}
        text={isFollowing ? 'Following' : 'Follow'}
        clickHandler={followHandler}
    />;
}
