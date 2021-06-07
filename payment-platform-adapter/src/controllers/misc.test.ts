import axios from 'axios';
import { Context } from 'koa';
import { configuration } from '../config';
import { CustomerCreditTransferInitiation } from '../interfaces/iFRMTransaction';
import { iMLTransaction } from '../interfaces/iMLTransaction';
import { healthcheck, monitorTransaction } from './misc';

describe('test misc functions', () => {
  
  let axioPostSpy: jest.SpyInstance;
  beforeEach(() => {
    axioPostSpy = jest.spyOn(axios, "post").mockImplementation();
  });


  test('should healtcheck return UP', () => {
    const ctx = {
      body: {
        status: 'DOWN',
      },
    };

    const ctxTest = healthcheck(ctx as Context);

    expect(ctxTest.body).toMatchObject({
      status: 'UP',
    });
  });

  test('should monitorTransaction for PAYEE result is VALID', async () => {
    const mlTran = JSON.parse(
      //'{  "quoteId": "guid",  "transactionId": "string",  "transactionRequestId": "string",  "payee": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "string",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "string",        "middleName": "string",        "lastName": "string"      },      "dateOfBirth": "string"    }  },  "payer": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "string",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "string",        "middleName": "string",        "lastName": "string"      },      "dateOfBirth": "string"    }  },  "amountType": "SEND",  "amount": {    "currency": "AED",    "amount": "string"  },  "fees": {    "currency": "AED",    "amount": "string"  },  "transactionType": {    "scenario": "DEPOSIT",    "subScenario": "string",    "initiator": "PAYER",    "initiatorType": "CONSUMER",    "refundInfo": {      "originalTransactionId": "string",      "refundReason": "string"    },    "balanceOfPayments": "string"  },  "geoCode": {    "latitude": "string",    "longitude": "string"  },  "note": "string",  "expiration": "string",  "extensionList": {    "extension": [      {        "key": "string",        "value": "string"      }    ]  }}',
      '{  "quoteId": "ABC123",  "transactionId": "asdf1234",  "transactionRequestId": "string",  "payee": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "+27723748019",      "partySubIdOrType": "string",      "fspId": "bank1",      "extensionList": {        "extension": [          {            "key": "somekey",            "value": "somevalue"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "payeefirstName",        "middleName": "payeemiddleName",        "lastName": "payeelastname"      },      "dateOfBirth": "2021-05-28"    }  },  "payer": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "+27723748020",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "payerfirstName",        "middleName": "payermiddleName",        "lastName": "payerlastname"      },      "dateOfBirth": "2021-05-28"    }  },  "amountType": "SEND",  "amount": {    "currency": "USD",    "amount": 123.45  },  "fees": {    "currency": "USD",    "amount": 12.34  },  "transactionType": {    "scenario": "DEPOSIT",    "subScenario": "string",    "initiator": "PAYEE",    "initiatorType": "CONSUMER",    "refundInfo": {      "originalTransactionId": "string",      "refundReason": "string"    },    "balanceOfPayments": "string"  },  "geoCode": {    "latitude": "string",    "longitude": "string"  },  "note": "string",  "expiration": "string",  "extensionList": {    "extension": [      {        "key": "string",        "value": "string"      }    ]  }}',
    );
    const ctx = {
      request: {
        body: mlTran,
      },
    };

    configuration.apmLogging = true;
    const ctxTest = await monitorTransaction(ctx as Context);
    const expected = JSON.stringify(
      new CustomerCreditTransferInitiation(mlTran),
    ); // .SupplementaryData["payer.merchantClassificationCode"].toString();

    expect(JSON.stringify(ctxTest.body)).toMatch(expected);
    axioPostSpy.mockRestore();
  });

  test('should monitorTransaction for PAYER result is VALID', async () => {
    const mlTran = JSON.parse(
      //'{  "quoteId": "guid",  "transactionId": "string",  "transactionRequestId": "string",  "payee": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "string",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "string",        "middleName": "string",        "lastName": "string"      },      "dateOfBirth": "string"    }  },  "payer": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "string",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "string",        "middleName": "string",        "lastName": "string"      },      "dateOfBirth": "string"    }  },  "amountType": "SEND",  "amount": {    "currency": "AED",    "amount": "string"  },  "fees": {    "currency": "AED",    "amount": "string"  },  "transactionType": {    "scenario": "DEPOSIT",    "subScenario": "string",    "initiator": "PAYER",    "initiatorType": "CONSUMER",    "refundInfo": {      "originalTransactionId": "string",      "refundReason": "string"    },    "balanceOfPayments": "string"  },  "geoCode": {    "latitude": "string",    "longitude": "string"  },  "note": "string",  "expiration": "string",  "extensionList": {    "extension": [      {        "key": "string",        "value": "string"      }    ]  }}',
      '{  "quoteId": "ABC123",  "transactionId": "asdf1234",  "transactionRequestId": "string",  "payee": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "+27723748019",      "partySubIdOrType": "string",      "fspId": "bank1",      "extensionList": {        "extension": [          {            "key": "somekey",            "value": "somevalue"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "payeefirstName",        "middleName": "payeemiddleName",        "lastName": "payeelastname"      },      "dateOfBirth": "2021-05-28"    }  },  "payer": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "+27",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "payerfirstName",        "middleName": "payermiddleName",        "lastName": "payerlastname"      },      "dateOfBirth": "2021-05-28"    }  },  "amountType": "SEND",  "amount": {    "currency": "USD",    "amount": 123.45  },  "fees": {    "currency": "USD",    "amount": 12.34  },  "transactionType": {    "scenario": "DEPOSIT",    "subScenario": "string",    "initiator": "PAYER",    "initiatorType": "CONSUMER",    "refundInfo": {      "originalTransactionId": "string",      "refundReason": "string"    },    "balanceOfPayments": "string"  },  "geoCode": {    "latitude": "string",    "longitude": "string"  },  "note": "string",  "expiration": "string",  "extensionList": {    "extension": [      {        "key": "string",        "value": "string"      }    ]  }}',
    );
    const ctx = {
      request: {
        body: mlTran,
      },
    };
    configuration.apmLogging = false;
    const ctxTest = await monitorTransaction(ctx as Context);
    const expected = JSON.stringify(
      new CustomerCreditTransferInitiation(mlTran),
    ); // .SupplementaryData["payer.merchantClassificationCode"].toString();

    expect(JSON.stringify(ctxTest.body)).toMatch(expected);
    axioPostSpy.mockRestore();
  });

  test('should monitorTransaction result is INVALID', async () => {
    const mlTran = JSON.parse('{"Nothing":"Something"}');
    const ctx = {
      request: {
        body: mlTran,
      },
    };

    const ctxTest = await monitorTransaction(ctx as Context);
    expect(ctxTest.status.toString()).toMatch('500');
  });
});
