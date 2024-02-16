
import Editor from '../components/comic/Editor';
import { Column, Paragraph, Title } from '../designsystem/module';

export default function Feature()
{
    const handleCreate = () => console.log('Create comic');

    return <Column alignX='stretch'>
        <Title size='large'>Create new comic</Title>
        <Paragraph>Come on, make something fun!</Paragraph>
        <Editor createHandler={handleCreate} />
    </Column>;
}
