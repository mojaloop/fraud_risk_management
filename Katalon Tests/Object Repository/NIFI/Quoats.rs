<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>Quoats</name>
   <tag></tag>
   <elementGuidId>d7271447-65c1-4329-aba7-87dea411ed94</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <connectionTimeout>0</connectionTimeout>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\n    \&quot;TransactionID\&quot;: \&quot;{{$guid}}\&quot;,\n    \&quot;HTTPTransactionDate\&quot;: \&quot;{{$isoTimestamp}}\&quot;,\n    \&quot;FSPIOPSource\&quot;: \&quot;fsp001\&quot;,\n    \&quot;FSPIOPDestination\&quot;: \&quot;fsp002\&quot;,\n    \&quot;ILPSourceAccountAddress\&quot;: \&quot;g.tz.fsp001.msisdn.2558617728568\&quot;,\n    \&quot;ILPDestinationAccountAddress\&quot;: \&quot;g.tz.fsp002.msisdn.2558799634560\&quot;,\n    \&quot;PayerContactNo\&quot;: \&quot;+2558617728568\&quot;,\n    \&quot;PayeeContactNo\&quot;: \&quot;+2558799634560\&quot;,\n    \&quot;Amount\&quot;: \&quot;230.00\&quot;,\n    \&quot;Fee\&quot;: \&quot;1.00\&quot;,\n    \&quot;Payer\&quot;: {\n        \&quot;PartyIDType\&quot;: \&quot;PERSONAL_ID\&quot;,\n        \&quot;PersonalIdentifierType\&quot;: \&quot;NATIONAL_ID_CARD\&quot;,\n        \&quot;PartyID\&quot;: \&quot;5706257071089\&quot;,\n        \&quot;PartyName\&quot;: \&quot;Random McGuyver\&quot;\n    },\n    \&quot;Payee\&quot;: {\n        \&quot;PartyName\&quot;: \&quot;Donte Kirwan\&quot;\n    },\n    \&quot;SourceAccountBalance\&quot;: \&quot;20000.00\&quot;,\n    \&quot;SourceAccountTransactionLimit\&quot;: \&quot;1000.00\&quot;,\n    \&quot;SourceAccountDailyLimit\&quot;: \&quot;2000.00\&quot;,\n    \&quot;SourceAccountPINDate\&quot;: \&quot;Mon, 14 Dec 2020 8:42:35 GMT\&quot;,\n    \&quot;PayerDeviceIMEI\&quot;: \&quot;353258077919061\&quot;,\n    \&quot;PayerICCID\&quot;: \&quot;8964064042106240834721\&quot;,\n    \&quot;Location\&quot;: \&quot;35.591818, 17.57770\&quot;,\n    \&quot;TransactionAuthenticationType\&quot;: \&quot;OTP\&quot;,\n    \&quot;TransactionType\&quot;: {\n        \&quot;AmountType\&quot;: \&quot;TRANSFER\&quot;,\n        \&quot;TransactionScenario\&quot;: \&quot;PAYER\&quot;,\n        \&quot;TransactionInitiator\&quot;: \&quot;PAYER\&quot;,\n        \&quot;TransactionInitiatorType\&quot;: \&quot;CONSUMER\&quot;\n    }\n}&quot;,
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
   <restUrl>http://20.49.174.200:9091/quotes</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceEndpoint></soapServiceEndpoint>
   <soapServiceFunction></soapServiceFunction>
   <socketTimeout>0</socketTimeout>
   <useServiceInfoFromWsdl>true</useServiceInfoFromWsdl>
   <verificationScript>import static org.assertj.core.api.Assertions.*

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webservice.verification.WSResponseManager

import groovy.json.JsonSlurper
import internal.GlobalVariable as GlobalVariable

RequestObject request = WSResponseManager.getInstance().getCurrentRequest()

ResponseObject response = WSResponseManager.getInstance().getCurrentResponse()

WS.verifyResponseStatusCode(response, 201)
assertThat(response.getStatusCode()).isEqualTo(201)
println('actual response code >> '+response)
</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
