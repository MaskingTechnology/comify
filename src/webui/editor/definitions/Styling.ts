
const Styling = {

    BACKGROUND_COLOR: '#ffffff',

    BUBBLE_COLOR: '#ffffff',
    BUBBLE_RADIUS: 10,
    BUBBLE_POINTER_RATIO: 0.3,
    BUBBLE_SHADOW_MAGNITUDE: 6,
    BUBBLE_SHADOW_ANGLE: Math.PI * 3.2, // Top right (225 degrees)

    CAPTION_COLOR: '#ffffff',

    SHADOW_COLOR: '#00000040',

} as const;

Object.freeze(Styling);

export default Styling;
