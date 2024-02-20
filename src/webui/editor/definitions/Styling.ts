
export type BackgroundStyle = 'stretch' | 'fit';

const Styling = {

    BACKGROUND_COLOR: '#ffffff',
    BACKGROUND_STYLE: 'fit' as BackgroundStyle,

    BUBBLE_COLOR: '#ffffff',
    BUBBLE_RADIUS: 10,
    BUBBLE_POINTER_RATIO: 0.3,
    BUBBLE_SHADOW_ENABLED: true,
    BUBBLE_SHADOW_MAGNITUDE: 6,
    BUBBLE_SHADOW_ANGLE: Math.PI * 3.3, // Top right
    BUBBLE_TEXT_FONT: '24px Inter',
    BUBBLE_TEXT_COLOR: '#000000',
    BUBBLE_TEXT_AREA_RATIO: 0.8,
    BUBBLE_LINE_HEIGHT_RATIO: 1.5,

    CAPTION_COLOR: '#ffffff',

    SHADOW_COLOR: '#00000040',

} as const;

Object.freeze(Styling);

export default Styling;
