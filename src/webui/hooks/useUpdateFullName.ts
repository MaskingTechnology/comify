
import johnDoe from '^/domain/authentication/johnDoe';
import updateFullName from '^/domain/creator/updateFullName';

export function useUpdateFullName()
{
    return async (fullName: string) => 
    {
        return updateFullName(johnDoe, fullName);
    };
}
