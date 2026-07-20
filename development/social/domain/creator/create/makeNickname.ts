
import generateNickname from '../_generateNickname';

export default async function makeNickname(tenantId: string, nickname: string): Promise<string>
{
    return generateNickname(tenantId, nickname);
}
