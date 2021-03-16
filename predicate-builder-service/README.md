# Predicate Builder Service

The Predicate builder service is currently a NodeJs REST-API service that ingests a defined predicate structure and an undefined data object, that would then produce a result based on the data provided.

At the moment this services both responds to the API request with the desired result as well as publishes the result to the desired Kafka topic. This is temporary until further notice.

## Available Calls

Please see the section below  on **Data Structures** to see the definitions of the request object that is expected by the service.

### GET - Online

The online get request will respond with a message stating that the service is running and online.
As a note, any get requests will return the online message since this service only uses POST for execution.

**Example:**  
Request:

``` http
http://{{host}}:{{port}}/Online
```

Response:  

``` text
Predicate Builder Service is online.
```

### POST - Execute

Executes the passed in PredicateExecutionRequest and responds with the desired output only. The outcome is published to the provided Kafka Topic.

**Example:**  

Request:

``` http
http://{{host}}:{{port}}/execute
```

Request Body:

``` json
{
    "outputTopic": "test-topic",
    "outputIfTrue": "SomeValue",
    "outputIfFalse": "AnotherValue",
    "data": {
        "transaction": {
            "amount": 350,
            "amt": 350,
            "payer": {
                "partyIDType": "D"
            }
        }
    },
    "predicates": [
        {
            "logicalOperator": "AND",
            "dataPropertyPath": "data.transaction.amount",
            "operator": "GREATERTHAN",
            "not": false,
            "value": "300"
        },
        {
            "logicalOperator": "AND",
            "dataPropertyPath": "transaction.amt",
            "operator": "GREATERTHAN",
            "not": false,
            "value": "300"
        },
        {
            "logicalOperator": "AND",
            "dataPropertyPath": "transaction.payer.partyIDType",
            "operator": "EQUALS",
            "not": false,
            "value": "N",
            "nestedPredicate": {
                "logicalOperator": "OR",
                "predicates": [
                    {
                        "logicalOperator": "AND",
                        "dataPropertyPath": "transaction.payer.partyIDType",
                        "not": false,
                        "operator": "EQUALS",
                        "value": "P"
                    },
                    {
                        "logicalOperator": "OR",
                        "dataPropertyPath": "transaction.payer.partyIDType",
                        "not": false,
                        "operator": "EQUALS",
                        "value": "D"
                    }
                ]
            }
        }
    ]
}
```

Response:

``` text
SomeValue
```

Kafka Producer Output:

``` text
Topic: test-topic
Message: "{"topic":"test-topic", "result": "SomeValue"}"
```

### POST - Debug

This executes the PredicateExecutionRequest the same as the above execute method but instead of only responding with the desired result it provides debug information with regards to the incoming request as well as the logic it executed to get the result.

Request:

``` http
http://{{host}}:{{port}}/debug
```

Request Body:

``` json
{
    "outputTopic": "test-topic",
    "outputIfTrue": "SomeValue",
    "outputIfFalse": "AnotherValue",
    "data": {
        "transaction": {
            "amount": 350,
            "amt": 350,
            "payer": {
                "partyIDType": "D"
            }
        }
    },
    "predicates": [
        {
            "logicalOperator": "AND",
            "dataPropertyPath": "data.transaction.amount",
            "operator": "GREATERTHAN",
            "not": false,
            "value": "300"
        },
        {
            "logicalOperator": "AND",
            "dataPropertyPath": "transaction.amt",
            "operator": "GREATERTHAN",
            "not": false,
            "value": "300"
        },
        {
            "logicalOperator": "AND",
            "dataPropertyPath": "transaction.payer.partyIDType",
            "operator": "EQUALS",
            "not": false,
            "value": "N",
            "nestedPredicate": {
                "logicalOperator": "OR",
                "predicates": [
                    {
                        "logicalOperator": "AND",
                        "dataPropertyPath": "transaction.payer.partyIDType",
                        "not": false,
                        "operator": "EQUALS",
                        "value": "P"
                    },
                    {
                        "logicalOperator": "OR",
                        "dataPropertyPath": "transaction.payer.partyIDType",
                        "not": false,
                        "operator": "EQUALS",
                        "value": "D"
                    }
                ]
            }
        }
    ]
}
```

Response:

``` text
Paths:
[transaction.amount, transaction.amt, transaction.payer.partyIDType, transaction.payer.partyIDType,
transaction.payer.partyIDType]

Function:
(data.transaction.amount > "300" && data.transaction.amt > "300" && (data.transaction.payer.partyIDType === "N" ||
(data.transaction.payer.partyIDType === "P" || data.transaction.payer.partyIDType === "D")))

Result: SomeValue
```

Kafka Producer Output:

``` text
Topic: test-topic
Message: "{"topic":"test-topic", "result": "SomeValue"}"
```


## Data Structures

Please advise the examples mentioned in the above **Available Calls** section to provide a better understanding.

### Classes

**Predicate Execution Request:**  

``` ts
/**
 * @class PredicateExecutionRequest
 * The request object expected when calling the Predicate Builder Service
 */
class PredicateExecutionRequest(){
    // The topic that the result should be published to
    outputTopic: string;
    // The value that should be returned if the predicate is evaluated as TRUE, if no value is passed "true" is returned
    outputIfTrue?: "SomeValue"; 
    // The value that should be returned if the predicate is evaluated as FALSE, if no value is passed "false" is returned
    outputIfFalse?: "AnotherValue";
    // The data object that could be in any structure, this will be navigated by the service to find and evaluate the values
    data: any;
    // The collection of predicates to be executed on the above provided data object
    predicates: Predicate[]
}
```

**Predicate:**  

``` ts
/**
 * @class PredicateExecutionRequest
 * A predicate that would be executed on the data object
 */
class Predicate {
  // The logical operator that would be used to determine the relation from this predicate to the prior predicate in the collection
  logicalOperator: LogicalOperator;
  // The path that would be used to navigate the data object to evaluate the value against the provided below value
  dataPropertyPath: string;
  // The operator that would be applied on the dataPropertyPath and the below provided value
  operator: Operator;
  // The value that would be compared to the value in the data object
  value: string;
  // Applies the not to the evaluation to "invert" the evaluation
  //i.e. to be used to get a NOT EQUALS
  not: boolean;
  // A set of nested predicates to define deeper logic within this particular predicate
  // i.e. To concatenate some OR predicates to get a result
  nestedPredicate?: NestedPredicate;
}
```

**Nested Predicate:**  

``` ts
class NestedPredicate {
  // The logical operator that would be used to determine the relation to the parent predicate for all the child predicates
  logicalOperator: LogicalOperator;
  // The predicates that should be used as child predicates for the more complicated operations
  predicates: Predicate[];
}
```

### Enums

**Logical Operator:**  

``` ts
enum LogicalOperator {
  'AND' = 'AND',
  'OR' = 'OR',
}
```

**Operator:**  

``` ts
enum Operator{
    EQUALS = "EQUALS",
    CONTAINS = "CONTAINS",
    ISNULL = "ISNULL",
    STARTSWITH = "STARTSWITH",
    ENDSWITH = "ENDSWITH",
    GREATERTHAN = "GREATERTHAN",
    GREATERTHANANDEQUALS = "GREATERTHANANDEQUALS",
    LESSTHAN = "LESSTHAN",
    LESSTHANANDEQUALS = "LESSTHANANDEQUALS",
}
```
