
import type { Area } from './Geometry';

export default class TextProcessor
{
    static fitInArea(text: string, lineHeight: number, area: Area, context: CanvasRenderingContext2D): string[]
    {
        const lines = text.trim().split('\n');
        const result: string[] = [];

        for (const line of lines)
        {
            const words = line.split(' ');
            const maxWidth = area.width;

            let currentLine = '';

            for (const word of words)
            {
                const testLine = currentLine + word + ' ';
                const measurement = context.measureText(testLine);

                if (measurement.width > maxWidth)
                {
                    currentLine = currentLine.trim();

                    if (currentLine.length > 0)
                    {
                        result.push(currentLine);
                    }

                    currentLine = word + ' ';
                }
                else
                {
                    currentLine = testLine;
                }
            }

            result.push(currentLine.trim());
        }

        const lineFitCount = Math.floor(area.height / lineHeight);

        return result.slice(0, lineFitCount);
    }
}
