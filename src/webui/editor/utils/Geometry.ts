
export type Direction = 'vertical' | 'horizontal';
export type Point = { x: number, y: number; };
export type Size = { width: number, height: number; };
export type Vector = { magnitude: number, angle: number; };
export type Area = Point & Size;

export default class Geometry
{
    static getCenterPoint(area: Area): Point
    {
        return {
            x: area.x + area.width / 2,
            y: area.y + area.height / 2
        };
    }

    static translatePoint(point: Point, base: Point): Point
    {
        return {
            x: point.x + base.x,
            y: point.y + base.y
        };
    }

    static rotatePoint(point: Point, angle: number): Point
    {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        return {
            x: point.x * cos - point.y * sin,
            y: point.x * sin + point.y * cos
        };
    }

    static rotateAndTranslatePoint(point: Point, base: Point, angle: number): Point
    {
        const rotated = this.rotatePoint(point, angle);

        return this.translatePoint(rotated, base);
    }

    static getPointDirection(point: Point, area: Area): Direction
    {
        const center = this.getCenterPoint(area);

        const x = Math.abs(point.x - center.x);
        const y = Math.abs(point.y - center.y);

        return x > y ? 'horizontal' : 'vertical';
    }

    static pointInArea(point: Point, area: Area): boolean
    {
        return point.x >= area.x && point.x <= area.x + area.width
            && point.y >= area.y && point.y <= area.y + area.height;
    }
}
