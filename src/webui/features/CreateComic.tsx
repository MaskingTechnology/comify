
import Editor from '../components/comic/Editor';
import { Column } from '../designsystem/module';

export default function Feature()
{
    const handleCreate = (imageData: string) =>
    {
        console.log('Create comic', imageData);
    };

    return <Column alignX='stretch'>
        <Editor createHandler={handleCreate} />
    </Column>;
}
