
import MinioFS from './MinioFS.js';

const DEFAULT_END_POINT = 'localhost';
const DEFAULT_PORT_NUMBER = 9000;
const DEFAULT_ACCESS_KEY = 'development';
const DEFAULT_SECRET_KEY = 'development';

export default function create(): MinioFS
{
    const endPoint = process.env.MINIO_END_POINT ?? DEFAULT_END_POINT;
    const port = Number(process.env.MINIO_PORT_NUMBER ?? DEFAULT_PORT_NUMBER);
    const useSSL = process.env.MINIO_USE_SSL === 'true';
    const accessKey = process.env.MINIO_ACCESS_KEY ?? DEFAULT_ACCESS_KEY;
    const secretKey = process.env.MINIO_SECRET_KEY ?? DEFAULT_SECRET_KEY;

    return new MinioFS({ endPoint, port, useSSL, accessKey, secretKey });
}
