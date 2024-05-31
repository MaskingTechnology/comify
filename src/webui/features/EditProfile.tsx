
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

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
            <CreatorProfile creator={identity as CreatorView} />
            <CreatorFullNameForm fullName={(identity as CreatorView).fullName} onUpdateClick={updateFullName} />
            <CreatorNicknameForm nickname={(identity as CreatorView).nickname} alreadyInUse={alreadyInUse} onUpdateClick={handler} />
        </LoadingContainer>
    </Column>;
}
