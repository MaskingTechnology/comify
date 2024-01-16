
import MemoryDb from './MemoryDb.js';

export default function create(): MemoryDb
{
    return new MemoryDb();
}
