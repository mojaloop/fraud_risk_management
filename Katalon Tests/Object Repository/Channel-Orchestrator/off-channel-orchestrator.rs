<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>off-channel-orchestrator</name>
   <tag></tag>
   <elementGuidId>41161b8f-b270-441a-98e1-e6ebeb800423</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <connectionTimeout>0</connectionTimeout>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\n    \&quot;TransactionID\&quot;: \&quot;025f8eca-693f-4fcf-83ea-8392837e1b25\&quot;,\n    \&quot;ILPSourceAccountAddress\&quot;: \&quot;g.tz.fsp001.msisdn.2558617728568\&quot;,\n    \&quot;ILPDestinationAccountAddress\&quot;: \&quot;g.tz.fsp002.msisdn.2558799634560\&quot;,\n    \&quot;Payer\&quot;: {\n        \&quot;PartyIDType\&quot;: \&quot;MSISDN\&quot;,\n        \&quot;PartyID\&quot;: \&quot;22507008181\&quot;,\n        \&quot;PartyName\&quot;: [\n            \&quot;Mats\&quot;,\n            \&quot;Hagman\&quot;\n        ],\n        \&quot;PersonalIdentifierType\&quot;: \&quot;NATIONAL_ID_CARD\&quot;\n    },\n    \&quot;FSPIOPSource\&quot;: \&quot;payerfsp\&quot;,\n    \&quot;FSPIOPDestination\&quot;: \&quot;payeefsp\&quot;,\n    \&quot;TransactionType\&quot;: {\n        \&quot;AmountType\&quot;: \&quot;SEND\&quot;,\n        \&quot;TransactionScenario\&quot;: \&quot;TRANSFER\&quot;,\n        \&quot;TransactionInitiator\&quot;: \&quot;PAYER\&quot;,\n        \&quot;TransactionInitiatorType\&quot;: \&quot;CONSUMER\&quot;\n    },\n    \&quot;Amount\&quot;: \&quot;100\&quot;,\n    \&quot;additionalFields\&quot;: [\n        \&quot;quoteId\&quot;,\n        \&quot;payer.persoanlInfo.complexName.lastName\&quot;,\n        \&quot;payer.personalInfo.dateOfBirth\&quot;,\n        \&quot;payee.partyIdInfo.partyIdType\&quot;,\n        \&quot;payee.partyIdInfo.partyIdentifier\&quot;,\n        \&quot;amount.currency\&quot;,\n        \&quot;note\&quot;\n    ],\n    \&quot;TransactionAuthenticationType\&quot;: \&quot;OTP\&quot;,\n    \&quot;SourceAccountBalance\&quot;: \&quot;20000.00\&quot;,\n    \&quot;SourceAccountDailyLimit\&quot;: \&quot;2000.00\&quot;,\n    \&quot;PayerContactNo\&quot;: \&quot;+2558617728568\&quot;,\n    \&quot;SourceAccountPINDate\&quot;: \&quot;Mon, 14 Dec 2020 8:42:35 GMT\&quot;,\n    \&quot;Location\&quot;: \&quot;35.591818, 17.57770\&quot;,\n    \&quot;Fee\&quot;: \&quot;1.00\&quot;,\n    \&quot;PayeeContactNo\&quot;: \&quot;+2558799634560\&quot;,\n    \&quot;Payee\&quot;: {\n        \&quot;PartyName\&quot;: \&quot;Donte Kirwan\&quot;\n    },\n    \&quot;HTTPTransactionDate\&quot;: \&quot;1619003809685\&quot;,\n    \&quot;PayerDeviceIMEI\&quot;: \&quot;353258077919061\&quot;,\n    \&quot;SourceAccountTransactionLimit\&quot;: \&quot;1000.00\&quot;,\n    \&quot;missingFields\&quot;: [\n        \&quot;ILPSourceAccountAddress\&quot;,\n        \&quot;ILPDestinationAccountAddress\&quot;,\n        \&quot;PayerContactNo\&quot;,\n        \&quot;PayeeContactNo\&quot;,\n        \&quot;Fee\&quot;,\n        \&quot;Payer.PersonalIdentifierType\&quot;,\n        \&quot;Payee.PartyName\&quot;,\n        \&quot;SourceAccountBalance\&quot;,\n        \&quot;SourceAccountTransactionLimit\&quot;,\n        \&quot;SourceAccountDailyLimit\&quot;,\n        \&quot;SourceAccountPINDate\&quot;,\n        \&quot;PayerDeviceIMEI\&quot;,\n        \&quot;PayerICCID\&quot;,\n        \&quot;Location\&quot;,\n        \&quot;TransactionAuthenticationType\&quot;\n    ]\n}&quot;,
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
   <restRequestMethod>GET</restRequestMethod>
   <restUrl>${url}off-channel-orchestrator${Namespace}/execute</restUrl>
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
      <id>017fcc40-014e-4349-ac31-1f8a2c80e3d1</id>
      <masked>false</masked>
      <name>url</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.Namespace</defaultValue>
      <description></description>
      <id>43dabfc1-e9da-45d2-9256-26499318742e</id>
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


println('checking if status code is 200 okay')
WS.verifyResponseStatusCode(response, 200)
assertThat(response.getStatusCode()).isEqualTo(200)

</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
