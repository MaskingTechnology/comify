
import { Border, ClickArea, Column, Text } from '@maskingtech/designsystem';

import type { DataModel as CommentData } from '^/domain/comment';

type Props = {
    readonly comment: CommentData;
    readonly message: string;
    readonly onClick: () => void;
};

export default function Component({ comment, message, onClick }: Props)
{
    return <Column alignX='stretch' alignY='justify' gap='medium'>
        <Text value={message} />
        <ClickArea onClick={onClick} >
            <Border size='small' padding='small'>
                <Text size='small' wrap='normal' value={comment.message} />
            </Border>
        </ClickArea>
    </Column>;
}
