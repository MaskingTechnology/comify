
import { useOutletContext } from 'react-router-dom';

import { Column } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import useUpdateFullName from './hooks/useUpdateFullName';
import useUpdateNickname from './hooks/useUpdateNickname';

import FullNameForm from './components/FullNameForm';
import NicknameForm from './components/NicknameForm';

type Context = {
    identity: AggregatedCreatorData;
};

export default function Feature()
{
    const { identity } = useOutletContext<Context>();

    const updateFullName = useUpdateFullName();
    const [alreadyInUse, updateNickname] = useUpdateNickname();

    return <Column gap='medium' alignX='stretch'>
        <FullNameForm fullName={identity.fullName} onSubmit={updateFullName} />
        <NicknameForm nickname={identity.nickname} alreadyInUse={alreadyInUse} onSubmit={updateNickname} />
    </Column>;
}
