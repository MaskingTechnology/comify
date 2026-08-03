
import { FULL_NAME_MAX_LENGTH, type FullName } from '../definitions';

export default function (fullName: FullName): string
{
    return fullName.substring(0, FULL_NAME_MAX_LENGTH);
}
