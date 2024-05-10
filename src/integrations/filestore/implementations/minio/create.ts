
import MinioFS from './MinioFS.js';

export default function create(): MinioFS
{
    const endPoint = process.env.MINIO_END_POINT ?? 'undefined';
    const port = Number(process.env.MINIO_PORT_NUMBER ?? 9000);
    const useSSL = process.env.MINIO_USE_SSL === 'true';
    const accessKey = process.env.MINIO_ACCESS_KEY ?? 'undefined';
    const secretKey = process.env.MINIO_SECRET_KEY ?? 'undefined';

    return new MinioFS({ endPoint, port, useSSL, accessKey, secretKey });
}
