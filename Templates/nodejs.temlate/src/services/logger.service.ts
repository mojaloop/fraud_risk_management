export abstract class LoggerService {
  private static source = '<!ProjectName!>';
  private static timeStamp() {
    const dateObj = new Date();

    let date = dateObj.toISOString();
    date = date.substring(0, date.indexOf('T'));

    let time = dateObj.toLocaleTimeString([], { hour12: false });

    return `${date} ${time}`;
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
    const source: string = '<!ProjectName!>';
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
