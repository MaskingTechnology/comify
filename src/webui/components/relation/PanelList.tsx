
import type RelationView from '../../../domain/relation/view/RelationView';
import { Column } from '../../designsystem/module';
import Panel from './Panel.js';

export type Props = {
    relations: RelationView[];
    followHandler: (relation: RelationView) => void;
};

export default function Component({ relations, followHandler }: Props)
{
    return <Column gap='medium' alignX='stretch'>
        {
            relations.map(relation =>
                <Panel
                    key={relation.creator.id}
                    relation={relation}
                    followHandler={() => followHandler(relation)}
                />
            )
        }
    </Column>;
}
