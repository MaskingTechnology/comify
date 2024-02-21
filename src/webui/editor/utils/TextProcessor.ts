
import { Area } from './Geometry';

export default class TextProcessor
{
    static finInArea(text: string, lineHeight: number, area: Area, context: CanvasRenderingContext2D): string[]
    {
        const lines = text.split('\n');
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
                    currentLine = currentLine.trim();

                    if (currentLine.length > 1)
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
