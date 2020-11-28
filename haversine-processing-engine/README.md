# Haversine Processing Engine

This service provides a [haversine validation](https://en.wikipedia.org/wiki/Haversine_formula) for the distance between two actions, where an action is a Quote, Transfer or party lookup.


## Contents:
- [Running Locally](#running-locally)
- [Incoming Data](#incoming-data)

## Running Locally
To run Locally you'll need to provide connection variables to an Apache Kafka. These variables are `TOPIC`, `KAFKA_ENDPOINT`, `PARTITION` and `AUTO_COMMIT`. For development, the application is able to read a `.env` file located at the root of the project. There is an `.env.template` file that can be used as a base for your configuration.

## Incoming Data
Data received via the especified kafka topic will need the following format:
```
  lastLocation: number[],
  previousLoaction: number[],
  firstTransactionTime: string,
  secondTransactionTime: string,
  maxSpeed: number,
  requestId: string

```

ex.:
```
{
  lastLocation: [ 110.234, 123.495 ],
  previousLocation: [ 15.680, -80.134 ],
  firstTransactionTime: 2020-10-29T17:48:56.028Z,
  secondTransactionTime: 2020-11-28T17:48:56.028Z,
  maxSpeed: 500,
  requestId: '3e800afc-9afa-472a-9746-d70209aa2c19'
}
```

## Output
the Haversing engine will output a Kafka message that needs to be processed by Tremor.
Ex. messages:
```
[HAVERSINE-RESULT] haversine for 3e800afc-9afa-472a-9746-d70209aa2c19 is false
[HAVERSINE-RESULT] haversine for 74dc41e8-72bd-4617-b6bb-25ff058691b1 is true
```
