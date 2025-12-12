
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import { Column, Ruler } from '@maskingtech/designsystem';
import { CreatorFullNameForm, CreatorNicknameForm, LoadingContainer } from '^/components';
import CreatorProfile from '^/components/creator/Profile';
import { useAppContext } from '^/contexts';

import useUpdateFullName from './hooks/useUpdateFullName';
import useUpdateNickname from './hooks/useUpdateNickname';

export default function Feature()
{
    const updateFullName = useUpdateFullName();
    const [alreadyInUse, updateNickname] = useUpdateNickname();
    const { identity } = useAppContext();

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={identity}>
            <CreatorProfile creator={identity as AggregatedCreatorData} />
            <Ruler direction='horizontal' size='small' />
            <CreatorFullNameForm fullName={(identity as AggregatedCreatorData).fullName} onSubmit={updateFullName} />
            <CreatorNicknameForm nickname={(identity as AggregatedCreatorData).nickname} alreadyInUse={alreadyInUse} onSubmit={updateNickname} />
        </LoadingContainer>
    </Column>;
}
