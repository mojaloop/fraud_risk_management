import { ExecuteRequest } from '../../src/classes/execute-request';

const getMockRequest = () => {
  return {
    TransactionID: 'SOMEGUID',
    PayerContactNo: '0828288546',
    PayeeContactNo: '0793456891',
  };
};

describe('Execute Request', () => {
  describe('Constructor', () => {
    it('should validate a complete execute request', () => {
      const mockInit = getMockRequest();

      const result = new ExecuteRequest(mockInit);

      expect(result.PayerContactNo).toEqual(mockInit.PayerContactNo);
      expect(result.PayeeContactNo).toEqual(mockInit.PayeeContactNo);
      expect(result.TransactionID).toEqual(mockInit.TransactionID);
    });

    it('should validate a malformed request, no init passed', () => {
      const expectedErrorMessage = 'Execution request was not received in the request body';
      let expectedError!: Error;
      try {
        const init = null as unknown as Partial<ExecuteRequest>;
        const result = new ExecuteRequest(init);
        fail('Test should have thrown and handled an exception');
      } catch (error) {
        expectedError = error;
      }

      expect(expectedError.message).toEqual(expectedErrorMessage);
    });

    it('should validate a malformed request, no transaction ID', () => {
      const mockInit = getMockRequest();
      mockInit.TransactionID = '';
      const expectedErrorMessage = 'Transaction ID is not present in execution request.';
      let expectedError!: Error;
      try {
        const result = new ExecuteRequest(mockInit);
        fail('Test should have thrown and handled an exception');
      } catch (error) {
        expectedError = error;
      }

      expect(expectedError.message).toEqual(expectedErrorMessage);
    });

    it('should validate a malformed request, no payer contact no', () => {
      const mockInit = getMockRequest();
      mockInit.PayerContactNo = '';
      const expectedErrorMessage = 'PayerContactNo is not present in execution request.';
      let expectedError!: Error;
      try {
        const result = new ExecuteRequest(mockInit);
        fail('Test should have thrown and handled an exception');
      } catch (error) {
        expectedError = error;
      }

      expect(expectedError.message).toEqual(expectedErrorMessage);
    });

    it('should validate a malformed request, no payee contact no', () => {
      const mockInit = getMockRequest();
      mockInit.PayeeContactNo = '';
      const expectedErrorMessage = 'PayeeContactNo is not present in execution request.';
      let expectedError!: Error;
      try {
        const result = new ExecuteRequest(mockInit);
        fail('Test should have thrown and handled an exception');
      } catch (error) {
        expectedError = error;
      }

      expect(expectedError.message).toEqual(expectedErrorMessage);
    });
  });
});
