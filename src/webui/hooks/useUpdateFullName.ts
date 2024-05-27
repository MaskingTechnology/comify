
import johnDoe from '^/domain/authentication/johnDoe';
import updateFullName from '^/domain/creator/updateFullName';
import { useAppContext } from '../contexts';

export function useUpdateFullName()
{
    const { setIdentity } = useAppContext();

    return async (fullName: string) => 
    {
        const updatedCreator = await updateFullName(johnDoe, fullName);

        setIdentity(updatedCreator);
    };
}
