
import { Button, Column, Panel, Row, Select, TextArea } from '@maskingtech/designsystem';

import useReportHandler, { type CancelHandler, type ReportHandler } from './hooks/useReportHandler';

type Props = {
    readonly remarkLimit?: number;
    readonly onReport: ReportHandler;
    readonly onCancel: CancelHandler;
};

const REASON_OPTIONS = new Map<string, string>();
REASON_OPTIONS.set('scam-fraud-or-spam', 'Scam, fraud or spam');
REASON_OPTIONS.set('inappropriate-content', 'Inappropriate content');

export default function ({ remarkLimit, onReport, onCancel }: Props)
{
    const [reasonRef, remarkRef, reporting, handleReport, handleCancel] = useReportHandler(onReport, onCancel);

    return <Panel>
        <Column alignX='stretch'>
            <Select name='reason' ref={reasonRef} options={REASON_OPTIONS} />
            <TextArea name='remark' ref={remarkRef} placeholder='Add a remark (optional)' limit={remarkLimit} rows={5} cols={200} />
            <Row alignX='right'>
                <Button type='secondary' text='Cancel' onClick={handleCancel} />
                <Button type={reporting ? 'disabled' : 'primary'} text={reporting ? 'Reporting' : 'Report'} onClick={handleReport} />
            </Row>
        </Column>
    </Panel>;
}
