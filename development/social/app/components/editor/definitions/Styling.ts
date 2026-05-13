
import addSpeechBubbleIcon from '../assets/add-speech-bubble.png';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';
import instructionsImage from '../assets/instructions.png';
import moveIcon from '../assets/move.png';
import resizeIcon from '../assets/resize.png';
import selectImageIcon from '../assets/select-image.png';
import takePictureIcon from '../assets/take-picture.png';

const Styling = {

    ICON_ADD_SPEECH_BUBBLE: addSpeechBubbleIcon,
    ICON_SELECT_IMAGE: selectImageIcon,
    ICON_TAKE_PICTURE: takePictureIcon,
    ICON_DELETE: deleteIcon,
    ICON_EDIT: editIcon,
    ICON_MOVE: moveIcon,
    ICON_RESIZE: resizeIcon,

    BACKGROUND_IMAGE: instructionsImage,

    BUBBLE_COLOR: '#ffffff',
    BUBBLE_TEXT_FONT: '24px Inter',
    BUBBLE_TEXT_COLOR: '#000000',
    BUBBLE_TEXT_AREA_RATIO: 0.8,
    BUBBLE_LINE_HEIGHT_RATIO: 1.5,
    BUBBLE_INITIAL_WIDTH: 200,
    BUBBLE_INITIAL_HEIGHT: 100,

    SPEECH_BUBBLE_RADIUS: 10,
    SPEECH_BUBBLE_POINTER_RATIO: 0.3,

    CAPTION_COLOR: '#ffffff',

    SHADOW_BLUR: 5,
    SHADOW_COLOR: '#00000040',

} as const;

Object.freeze(Styling);

export default Styling;
