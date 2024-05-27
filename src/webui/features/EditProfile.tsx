
import { CreatorFullNameForm, CreatorNicknameForm, LoadingContainer } from '^/webui/components';
import CreatorProfile from '^/webui/components/creator/Profile';
import { Column } from '^/webui/designsystem';
import { useAppContext } from '../contexts';
import { useUpdateFullName, useUpdateNickname } from '../hooks';

export default function Feature()
{
    const updateFullName = useUpdateFullName();
    const { alreadyInUse, handler } = useUpdateNickname();
    const { identity } = useAppContext();

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={identity}>
            {
                identity !== undefined
                    ? <>
                        <CreatorProfile creator={identity} />
                        <CreatorFullNameForm fullName={identity.fullName} onUpdateClick={updateFullName} />
                        <CreatorNicknameForm nickname={identity.nickname} alreadyInUse={alreadyInUse} onUpdateClick={handler} />
                    </>
                    : null
            }
        </LoadingContainer>
    </Column>;
}
