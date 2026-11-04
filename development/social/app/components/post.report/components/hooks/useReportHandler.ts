
import { useCallback, useRef, useState } from 'react';

export type ReportHandler = (reason: string, remark: string) => Promise<void>;
export type CancelHandler = () => void;

export default function useReportHandler(onReport: ReportHandler, onCancel: CancelHandler)
{
    const reasonRef = useRef<HTMLSelectElement>(null);
    const remarkRef = useRef<HTMLTextAreaElement>(null);
    const [reporting, setReporting] = useState(false);

    const handleReport = useCallback(async () =>
    {
        setReporting(true);

        const reason = reasonRef.current?.value ?? '';
        const remark = remarkRef.current?.value ?? '';

        await onReport(reason, remark);

        setReporting(false);

    }, [onReport, reasonRef, remarkRef]);

    const handleCancel = useCallback(() =>
    {
        setReporting(false);

        onCancel();

    }, [onCancel]);

    return [reasonRef, remarkRef, reporting, handleReport, handleCancel] as const;
}
