
import { Column } from '@maskingtech/designsystem';
import { useOutletContext } from 'react-router-dom';

import { type Creator } from '^/domain/creator';

import FullNameForm from './components/FullNameForm';
import NicknameForm from './components/NicknameForm';
import useUpdateFullName from './hooks/useUpdateFullName';
import useUpdateNickname from './hooks/useUpdateNickname';

type Context = {
    identity: Creator;
};

export default function ()
{
    const { identity } = useOutletContext<Context>();

    const updateFullName = useUpdateFullName();
    const [alreadyInUse, updateNickname] = useUpdateNickname();

    return <Column gap='medium' alignX='stretch'>
        <FullNameForm fullName={identity.fullName} onSubmit={updateFullName} />
        <NicknameForm nickname={identity.nickname} alreadyInUse={alreadyInUse} onSubmit={updateNickname} />
    </Column>;
}
