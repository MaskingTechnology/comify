
import addSpeechBubbleIcon from '../assets/add-speech-bubble.png';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';
import moveIcon from '../assets/move.png';
import resizeIcon from '../assets/resize.png';
import selectImageIcon from '../assets/select-image.png';

const Styling = {

    ICON_ADD_SPEECH_BUBBLE: addSpeechBubbleIcon,
    ICON_SELECT_IMAGE: selectImageIcon,
    ICON_DELETE: deleteIcon,
    ICON_EDIT: editIcon,
    ICON_MOVE: moveIcon,
    ICON_RESIZE: resizeIcon,

    BACKGROUND_COLOR: '#ffffff',

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
