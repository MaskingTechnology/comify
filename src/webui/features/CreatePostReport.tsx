
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import { CommentForm, ReportRow, } from '^/webui/components';
import { Column, Ruler, Tab, Tabs } from '^/webui/designsystem';
import useReorderList from './hooks/useReorderList';

import useCreatePostReport from './hooks/useCreatePostReport';

type Props = {
    readonly post: AggregatedPostData;
    readonly selected: string;
    readonly handleDone: (reportId?: string) => void;
};

const REMARK_MAX_LENGTH = 200;

export default function Feature({ post, selected, handleDone }: Props)
{
    const reorderlist = useReorderList();
    const createPostReport = useCreatePostReport(post, selected, handleDone);

    return <Column gap='small' alignX='stretch'>
        <ReportRow selected='scam' onReasonChange={reorderlist} />
        <Tabs separator={<Ruler direction='horizontal' size='small' />}>
            <Tab id='comment' title='Comment'>
                <CommentForm limit={REMARK_MAX_LENGTH} onCreate={createPostReport} onCancel={() => handleDone(undefined)} />
            </Tab>
        </Tabs>
    </Column>;

}
