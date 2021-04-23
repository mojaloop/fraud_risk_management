export abstract class LoggerService {
  private static source = 'Channel-Orchestrator';
  private static timeStamp() {
    const dateObj = new Date();

    let date = dateObj.toISOString();
    date = date.substring(0, date.indexOf('T'));

    const time = dateObj.toLocaleTimeString([], { hour12: false });

    return `${date} ${time}`;
  }
  

  static async trace(message: string, serviceOperation?: string) {
    console.trace(
      `[${LoggerService.timeStamp()}][${LoggerService.source}${
        serviceOperation ? ' - ' + serviceOperation : ''
      }][TRACE] - ${message}`,
    );
  }

  static async log(message: string, serviceOperation?: string) {
    console.log(
      `[${LoggerService.timeStamp()}][${LoggerService.source}${
        serviceOperation ? ' - ' + serviceOperation : ''
      }][INFO] - ${message}`,
    );
  }

  static async warn(message: string, serviceOperation?: string) {
    console.warn(
      `[${LoggerService.timeStamp()}][${LoggerService.source}${
        serviceOperation ? ' - ' + serviceOperation : ''
      }][WARN] - ${message}`,
    );
  }

  static async error(
    message: string | Error,
    innerError?: Error,
    serviceOperation?: string,
  ) {
    const source = 'Channel-Orchestrator';
    let errMessage = typeof message === 'string' ? message : message.stack;

    if (innerError) {
      errMessage += `\r\n${innerError.stack}`;
    }

    console.error(
      `[${LoggerService.timeStamp()}][${LoggerService.source}${
        serviceOperation ? ' - ' + serviceOperation : ''
      }][ERROR] - ${errMessage}`,
    );
  }
}
