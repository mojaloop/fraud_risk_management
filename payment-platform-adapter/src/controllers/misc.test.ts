import { Context } from 'koa';
import { CustomerCreditTransferInitiation } from '../interfaces/iFRMTransaction';
import { iMLTransaction } from '../interfaces/iMLTransaction';
import { healthcheck, monitorTransaction } from './misc';

describe('test misc functions', () => {
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

  test('should monitorTransaction result is VALID', () => {
    const mlTran = JSON.parse(
      '{  "quoteId": "guid",  "transactionId": "string",  "transactionRequestId": "string",  "payee": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "string",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "string",        "middleName": "string",        "lastName": "string"      },      "dateOfBirth": "string"    }  },  "payer": {    "partyIdInfo": {      "partyIdType": "MSISDN",      "partyIdentifier": "string",      "partySubIdOrType": "string",      "fspId": "string",      "extensionList": {        "extension": [          {            "key": "string",            "value": "string"          }        ]      }    },    "merchantClassificationCode": "merchCode",    "name": "string",    "personalInfo": {      "complexName": {        "firstName": "string",        "middleName": "string",        "lastName": "string"      },      "dateOfBirth": "string"    }  },  "amountType": "SEND",  "amount": {    "currency": "AED",    "amount": "string"  },  "fees": {    "currency": "AED",    "amount": "string"  },  "transactionType": {    "scenario": "DEPOSIT",    "subScenario": "string",    "initiator": "PAYER",    "initiatorType": "CONSUMER",    "refundInfo": {      "originalTransactionId": "string",      "refundReason": "string"    },    "balanceOfPayments": "string"  },  "geoCode": {    "latitude": "string",    "longitude": "string"  },  "note": "string",  "expiration": "string",  "extensionList": {    "extension": [      {        "key": "string",        "value": "string"      }    ]  }}',
    );
    const ctx = {
      request: {
        body: mlTran,
      },
    };

    const ctxTest = monitorTransaction(ctx as Context);
    const expected = JSON.stringify(
      new CustomerCreditTransferInitiation(mlTran),
    ); // .SupplementaryData["payer.merchantClassificationCode"].toString();

    expect(JSON.stringify(ctxTest.body)).toMatch(expected);
  });

  test('should monitorTransaction result is INVALID', () => {
    const mlTran = JSON.parse('{"Nothing":"Something"}');
    const ctx = {
      request: {
        body: mlTran,
      },
    };

    const ctxTest = monitorTransaction(ctx as Context);
    expect(ctxTest.status.toString()).toMatch('500');
  });
});
