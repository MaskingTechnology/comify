
import FileStore, { MemoryDriver, S3Driver } from '@theshelf/filestore';

function setUpMemory(): MemoryDriver
{
    return new MemoryDriver();
}

function setUpMinio(): S3Driver
{
    const config = {
        bucketName:  process.env.S3_BUCKET_NAME ?? '',
        clientConfig: {
            region: process.env.S3_REGION ?? 'local',
            credentials: {
                accessKeyId: process.env.S3_ROOT_USER ?? '',
                secretAccessKey: process.env.S3_ROOT_PASSWORD ?? ''
            },
            forcePathStyle: true,
            endpoint: process.env.S3_END_POINT ?? ''
        }
    };

    return new S3Driver(config);
}

export const driver = process.env.FILE_STORE_DRIVER === 's3'
    ? setUpMinio()
    : setUpMemory();

export default new FileStore(driver);
