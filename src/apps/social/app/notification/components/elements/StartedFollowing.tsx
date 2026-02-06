
import { Paragraph, Text } from '@maskingtech/designsystem';

type Props = {
    readonly isFollowing: boolean;
};

export default function Component({ isFollowing }: Props)
{
    const message = 'I started following you.'
        + (isFollowing ? '' : ' Hit the Follow button to follow me back.');

    return <Paragraph>
        <Text value={message} />
    </Paragraph>;
}
