export abstract class LoggerService {

  static error(message: string) {
    console.error(message);
  }
  
  static log(message: string) {
    console.log(message);
  }
}
