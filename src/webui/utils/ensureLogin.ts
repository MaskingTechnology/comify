
import getLoginUrl from '../../domain/authentication/getLoginUrl';

export default async function ensureLogin<T>(promise: Promise<T>): Promise<T>
{
    try
    {
        const result = await promise;

        return result;
    }
    catch (error: unknown)
    {
        if (error?.constructor?.name === 'Unauthorized')
        {
            window.location.href = await getLoginUrl();
        }

        throw error;
    }
}
