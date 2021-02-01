# Actio Onboarding
Welcome to the Actio onboarding process. The idea behind this document is to give you a quick overview and get you up and running as soon as possible. 
  
# Requirements
Fastest way to get you up and running with the project is by [watching this video](https://www.youtube.com/watch?v=47Xu4gmCrD0&trk=public_post-content_share-embed-video_share-article_title)

Other requirements for the development process may include the installation of the following tools:
- NodeJS(10+)
- Docker
- Azure access
- Optionally: Redis, Kafka, Nifi

So far, there's no way of running the whole platform locally, but there's a cloud environment in the Sybrin Cloud. You can ask Jaco/Jason in the Mojaloop slack to whitelist your IP address and receive the endpoints and credentials.

The project is, for the moment, a monorepo that doesn't have CICD, nor testing. In fact, a deeper evaluation of the source code will show you our Typescript code is more of a hackaraound JS rather than actual Typescript. Fear not, because you're the reason why that will change during the MVP stage(now).

The project is created to interact with the [Mojaloop Switch](https://github.com/mojaloop/documentation)
and it's capable of receiving a Mojaloop standarized Quote, eg:

```{json}
{
  "quoteId": "04893-3938-489478-49484-69678",
  "transactionId": "04893-3938-489478-49484-69678",
  "ILPDestinationAccountAddress": "g.tz.fsp002.msisdn.2558242421235",
  "payer": {
    "partyIdInfo": {
      "partyIdType": "PERSONAL_ID",
      "partyIdentifier": "2558799634560",
      "fspId": "payerfsp"
    },
    "personalInfo": {
      "complexName": {
        "firstName": "Mats",
        "lastName": "Hagman"
      },
      "dateOfBirth": "1983-10-25"
    }
  },
  "payee": {
    "partyIdInfo": {
      "partyIdType": "MSISDN",
      "partyIdentifier": "23320009788",
      "fspId": "payeefsp"
    }
  },
  "PayerICCID": "8964064042106240834722",
  "amountType": "SEND",
  "amount": {
    "amount": "20000",
    "currency": "ZAR"
  },
  "transactionType": {
    "scenario": "TRANSFER",
    "initiator": "PAYER",
    "initiatorType": "CONSUMER"
  },
  "note": ""
}
```

and Nifi will transform the data into this format:

```{json}
{
  TransactionID: "04893-3938-489478-49484-69678",
  HTTPTransactionDate: "Sat, 31 Oct 2020 8:42:35 GMT",
  FSPIOPSource: "fsp001",
  FSPIOPDestination: "fsp002",
  ILPSourceAccountAddress: "g.tz.fsp001.msisdn.2558617728569", // todo
  ILPDestinationAccountAddress: "g.tz.fsp002.msisdn.255824242124235",
  PayerContactNo: "+2558617728568",
  PayeeContactNo: "+2558242421235",
  Amount: "7750.00",
  Fee: "1.00",
  Payer: {
    PartyIDType: "MSISDN",
    PersonalIdentifierType: "NATIONAL_ID_CARD",
    PartyID: "2558617728569",
    PartyName: "Mats Hagman"
  },
  Payee: { PartyName: "ElissaÂ Hooton" },
  SourceAccountBalance: "7800.04",
  SourceAccountTransactionLimit: "1000.00",
  SourceAccountDailyLimit: "1000.00",
  SourceAccountPINDate: "Fri, 30 Oct 2020 8:42:35 GMT",
  PayerDeviceIMEI: "353258077919061",
  PayerICCID: "8964064042106240834722",
  Location: "35.592660, 17.56116",
  TransactionType: {
    AmountType: "SEND",
    TransactionScenario: "TRANSFER",
    TransactionInitiator: "PAYER",
    TransactionInitiatorType: "CONSUMER"
  },
  TransactionAuthenticationType: "OTP"
}
```

For local testing purposes, you can run a local kafka instance(with docker compose running both zookeper and kafka) and a redis instance as well. In the future, a docker-compose may be created for local runs or a full helm chart deployment that can be used in local environments like k3s or KIND. Redis is used in the platform to store historical data for payers and payees. You may run typologies services(at the time of writing, there's typology 11, 27, 28 and 214). Please note that there's no output in the services, since it was proven that using any kind of logging would slow down the speed at which typologies operate by a significat margin of time.
