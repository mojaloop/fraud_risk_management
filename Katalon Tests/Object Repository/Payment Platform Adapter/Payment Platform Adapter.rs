<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>Payment Platform Adapter</name>
   <tag></tag>
   <elementGuidId>c80dd038-a1a7-4841-ac47-8b5cd33161ce</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <connectionTimeout>0</connectionTimeout>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\n  \&quot;quoteId\&quot;: \&quot;ABC123\&quot;,\n  \&quot;transactionId\&quot;: \&quot;asdf1234\&quot;,\n  \&quot;transactionRequestId\&quot;: \&quot;string\&quot;,\n  \&quot;payee\&quot;: {\n    \&quot;partyIdInfo\&quot;: {\n      \&quot;partyIdType\&quot;: \&quot;MSISDN\&quot;,\n      \&quot;partyIdentifier\&quot;: \&quot;+27723748019\&quot;,\n      \&quot;partySubIdOrType\&quot;: \&quot;string\&quot;,\n      \&quot;fspId\&quot;: \&quot;bank1\&quot;,\n      \&quot;extensionList\&quot;: {\n        \&quot;extension\&quot;: [\n          {\n            \&quot;key\&quot;: \&quot;somekey\&quot;,\n            \&quot;value\&quot;: \&quot;somevalue\&quot;\n          }\n        ]\n      }\n    },\n    \&quot;merchantClassificationCode\&quot;: \&quot;merchCode\&quot;,\n    \&quot;name\&quot;: \&quot;string\&quot;,\n    \&quot;personalInfo\&quot;: {\n      \&quot;complexName\&quot;: {\n        \&quot;firstName\&quot;: \&quot;payeefirstName\&quot;,\n        \&quot;middleName\&quot;: \&quot;payeemiddleName\&quot;,\n        \&quot;lastName\&quot;: \&quot;payeelastname\&quot;\n      },\n      \&quot;dateOfBirth\&quot;: \&quot;2021-05-28\&quot;\n    }\n  },\n  \&quot;payer\&quot;: {\n    \&quot;partyIdInfo\&quot;: {\n      \&quot;partyIdType\&quot;: \&quot;MSISDN\&quot;,\n      \&quot;partyIdentifier\&quot;: \&quot;+27723748020\&quot;,\n      \&quot;partySubIdOrType\&quot;: \&quot;string\&quot;,\n      \&quot;fspId\&quot;: \&quot;string\&quot;,\n      \&quot;extensionList\&quot;: {\n        \&quot;extension\&quot;: [\n          {\n            \&quot;key\&quot;: \&quot;string\&quot;,\n            \&quot;value\&quot;: \&quot;string\&quot;\n          }\n        ]\n      }\n    },\n    \&quot;merchantClassificationCode\&quot;: \&quot;merchCode\&quot;,\n    \&quot;name\&quot;: \&quot;string\&quot;,\n    \&quot;personalInfo\&quot;: {\n      \&quot;complexName\&quot;: {\n        \&quot;firstName\&quot;: \&quot;payerfirstName\&quot;,\n        \&quot;middleName\&quot;: \&quot;payermiddleName\&quot;,\n        \&quot;lastName\&quot;: \&quot;payerlastname\&quot;\n      },\n      \&quot;dateOfBirth\&quot;: \&quot;2021-05-28\&quot;\n    }\n  },\n  \&quot;amountType\&quot;: \&quot;SEND\&quot;,\n  \&quot;amount\&quot;: {\n    \&quot;currency\&quot;: \&quot;USD\&quot;,\n    \&quot;amount\&quot;: 123.45\n  },\n  \&quot;fees\&quot;: {\n    \&quot;currency\&quot;: \&quot;USD\&quot;,\n    \&quot;amount\&quot;: 12.34\n  },\n  \&quot;transactionType\&quot;: {\n    \&quot;scenario\&quot;: \&quot;DEPOSIT\&quot;,\n    \&quot;subScenario\&quot;: \&quot;string\&quot;,\n    \&quot;initiator\&quot;: \&quot;PAYER\&quot;,\n    \&quot;initiatorType\&quot;: \&quot;CONSUMER\&quot;,\n    \&quot;refundInfo\&quot;: {\n      \&quot;originalTransactionId\&quot;: \&quot;string\&quot;,\n      \&quot;refundReason\&quot;: \&quot;string\&quot;\n    },\n    \&quot;balanceOfPayments\&quot;: \&quot;string\&quot;\n  },\n  \&quot;geoCode\&quot;: {\n    \&quot;latitude\&quot;: \&quot;string\&quot;,\n    \&quot;longitude\&quot;: \&quot;string\&quot;\n  },\n  \&quot;note\&quot;: \&quot;string\&quot;,\n  \&quot;expiration\&quot;: \&quot;string\&quot;,\n  \&quot;extensionList\&quot;: {\n    \&quot;extension\&quot;: [\n      {\n        \&quot;key\&quot;: \&quot;string\&quot;,\n        \&quot;value\&quot;: \&quot;string\&quot;\n      }\n    ]\n  }\n}&quot;,
  &quot;contentType&quot;: &quot;application/json&quot;,
  &quot;charset&quot;: &quot;UTF-8&quot;
}</httpBodyContent>
   <httpBodyType>text</httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-Type</name>
      <type>Main</type>
      <value>application/json</value>
   </httpHeaderProperties>
   <katalonVersion>7.9.1</katalonVersion>
   <maxResponseSize>0</maxResponseSize>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>POST</restRequestMethod>
   <restUrl>${url}off-payment-platform-adapter${Namespace}/execute</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceEndpoint></soapServiceEndpoint>
   <soapServiceFunction></soapServiceFunction>
   <socketTimeout>0</socketTimeout>
   <useServiceInfoFromWsdl>true</useServiceInfoFromWsdl>
   <variables>
      <defaultValue>GlobalVariable.url</defaultValue>
      <description></description>
      <id>62bd6e85-d581-4080-83c7-ef3c80e69994</id>
      <masked>false</masked>
      <name>url</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable._meshednamespace</defaultValue>
      <description></description>
      <id>0c355c83-a8bd-4fbf-b950-7a0fa2956611</id>
      <masked>false</masked>
      <name>Namespace</name>
   </variables>
   <verificationScript>import static org.assertj.core.api.Assertions.*

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webservice.verification.WSResponseManager

import groovy.json.JsonSlurper
import internal.GlobalVariable as GlobalVariable

RequestObject request = WSResponseManager.getInstance().getCurrentRequest()

ResponseObject response = WSResponseManager.getInstance().getCurrentResponse()

WS.verifyResponseStatusCode(response, 200)
assertThat(response.getStatusCode()).isEqualTo(200)
println('actual response code >> '+response)

WS.verifyElementPropertyValue(response, 'GroupHeader.InitiatingParty.Name', &quot;payerfirstName payermiddleName payerlastname&quot;)
WS.verifyElementPropertyValue(response, 'GroupHeader.InitiatingParty.Identification.Identification', &quot;&quot;)
WS.verifyElementPropertyValue(response, 'GroupHeader.InitiatingParty.Identification.Other.PrivateIdentification.DateAndPlaceOfBirth.Birthdate', &quot;2021-06-11&quot;)
WS.verifyElementPropertyValue(response, 'GroupHeader.InitiatingParty.Identification.Other.PrivateIdentification.DateAndPlaceOfBirth.CountryOfBirth', &quot;ZAR&quot;)
WS.verifyElementPropertyValue(response, 'GroupHeader.InitiatingParty.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate', &quot;2021-06-11&quot;)
WS.verifyElementPropertyValue(response, 'GroupHeader.InitiatingParty.Identification.ContactDetails.MobileNumber', &quot;+277-23748020&quot;)
WS.verifyElementPropertyValue(response, 'PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification', &quot;asdf1234&quot;)
WS.verifyElementPropertyValue(response, 'PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.Other.Identification', &quot;+27723748019&quot;)
WS.verifyElementPropertyValue(response, 'PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate', &quot;2021-06-11&quot;)</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
