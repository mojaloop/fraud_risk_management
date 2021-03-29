import { LoggerService } from './logger.service';

describe('Logger Service', () => {
    describe('Log', () => {
      let consoleLogSpy: jest.SpyInstance;
  
      beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      });
  
      it('should be able to log to console', () => {
        const msg = 'Should be logged';
  
        LoggerService.log(msg);
  
        expect(consoleLogSpy).toBeCalledWith(msg);
      });
    });
    describe('Error', () => {
      let consoleErrorSpy: jest.SpyInstance;
  
      beforeEach(() => {
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      });
  
      it('should be able to log to console', () => {
        const msg = 'Should display error';
  
        LoggerService.error(msg);
  
        expect(consoleErrorSpy).toBeCalledWith(msg);
      });
    });
});
