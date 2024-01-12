
import fileStorage from '../filestorage/implementations/MinioFS';

await fileStorage.connect({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'development',
    secretKey: 'development',
});
