
import eraseData from './eraseData';

export type Data = {
    readonly id: string;
};

export default async function feature(data: Data): Promise<void>
{
    return eraseData(data.id);
}
