
import { LoadingContainer } from '^/webui/components';
import CreatorProfile from '^/webui/components/creator/Profile';
import FullNameForm from '^/webui/components/creator/elementary/FullNameForm';
import NicknameForm from '^/webui/components/creator/elementary/NicknameForm';
import { Column } from '^/webui/designsystem';
import { useCreator, useUpdateFullName, useUpdateNickname } from '../hooks';

export default function Feature()
{
    const updateFullName = useUpdateFullName();
    const updateNickname = useUpdateNickname();

    const [relation] = useCreator();

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={relation}>
            {
                relation !== undefined
                    ? <>
                        <CreatorProfile creator={relation.following} />
                        <FullNameForm fullName={relation.following.fullName} onUpdateClick={updateFullName} />
                        <NicknameForm nickname={relation.following.nickname} onUpdateClick={updateNickname} />
                    </>
                    : null
            }
        </LoadingContainer>
    </Column>;
}
