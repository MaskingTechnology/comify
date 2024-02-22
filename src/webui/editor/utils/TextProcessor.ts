
import { Area } from './Geometry';

export default class TextProcessor
{
    static finInArea(text: string, lineHeight: number, area: Area, context: CanvasRenderingContext2D): string[]
    {
        const lines = text.trim().split('\n');
        const result: string[] = [];

        for (const line of lines)
        {
            const words = line.split(' ');
            const maxWidth = area.width;

            let currentLine = '';
            let testLine = '';

            for (const word of words)
            {
                testLine = currentLine + word + ' ';

                if (context.measureText(testLine).width > maxWidth)
                {
                    result.push(currentLine.trim());

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
