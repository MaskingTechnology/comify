
import johnDoe from '^/domain/authentication/johnDoe';
import updateNickname from '^/domain/creator/updateNickname';

export function useUpdateNickname()
{
    return async (nickname: string) => 
    {

        return updateNickname(johnDoe, nickname);
    };
}
