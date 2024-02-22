
import Editor from '../components/comic/Editor';
import { Column, Paragraph, Title } from '../designsystem/module';

export default function Feature()
{
    const handleCreate = (imageData: string) =>
    {
        console.log('Create comic', imageData);
    };

    return <Column alignX='stretch'>
        <Title size='large'>Create new comic</Title>
        <Paragraph>Come on, make something fun!</Paragraph>
        <Editor createHandler={handleCreate} />
    </Column>;
}
