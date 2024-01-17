
import MemoryFS from './Memory.js';

export default function create(): MemoryFS
{
    return new MemoryFS();
}
