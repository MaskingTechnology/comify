
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { CreatorFullNameForm, CreatorNicknameForm, LoadingContainer } from '^/webui/components';
import CreatorProfile from '^/webui/components/creator/Profile';
import { useAppContext } from '^/webui/contexts';
import { Column, Ruler } from '^/webui/designsystem';

import useUpdateFullName from './hooks/useUpdateFullName';
import useUpdateNickname from './hooks/useUpdateNickname';

export default function Feature()
{
    const updateFullName = useUpdateFullName();
    const { alreadyInUse, handler } = useUpdateNickname();
    const { identity } = useAppContext();

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={identity}>
            <CreatorProfile creator={identity as CreatorView} />
            <Ruler direction='horizontal' size='small' />
            <CreatorFullNameForm fullName={(identity as CreatorView).fullName} onUpdateClick={updateFullName} />
            <CreatorNicknameForm nickname={(identity as CreatorView).nickname} alreadyInUse={alreadyInUse} onUpdateClick={handler} />
        </LoadingContainer>
    </Column>;
}
