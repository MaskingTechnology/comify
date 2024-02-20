
const InputEvents = {
    PRESSED: 'pressed',
    DRAGGED: 'dragged',
    RELEASED: 'released',
    DROPPED: 'dropped'
} as const;

Object.freeze(InputEvents);

export default InputEvents;
