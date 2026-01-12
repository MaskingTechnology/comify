
import FileStore, { MinioDriver, MemoryDriver } from '@theshelf/filestore';

function setUpMemory(): MemoryDriver
{
    return new MemoryDriver();
}

function setUpMinio(): MinioDriver
{
    return new MinioDriver({
        endPoint: process.env.MINIO_END_POINT ?? '',
        port: Number(process.env.MINIO_PORT_NUMBER) ?? 9000,
        useSSL: process.env.MINIO_USE_SSL === 'true',
        accessKey: process.env.MINIO_ROOT_USER ?? '',
        secretKey: process.env.MINIO_ROOT_PASSWORD ?? ''
    });
}

const driver = process.env.FILE_STORE_DRIVER === 'minio'
    ? setUpMinio()
    : setUpMemory();

export default new FileStore(driver);
