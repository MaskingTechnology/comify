
import Requester from './Requester';

// This instance is used as a placeholder for the requester.
// It is used when calling functions that require a requester.
// The authentication middleware will replace this instance with the actual requester.

const johnDoe = new Requester('placeholder', 'Placeholder', 'placeholder');

export default johnDoe;
