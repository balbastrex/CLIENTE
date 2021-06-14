export class logService {
    info = (message: string) => {
        console.info(message);
    }
    error = (message: string) => {
        console.error(message);
    }
    warn = (message: string) => {
        console.warn(message);
    }
}