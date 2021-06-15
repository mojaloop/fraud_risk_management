<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>send typology result to Scoring Engine</name>
   <tag></tag>
   <elementGuidId>fa854379-d71c-413b-bf71-68a8f2bf3fef</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <connectionTimeout>-1</connectionTimeout>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\n  \&quot;typology\&quot;:\&quot;typology-28\&quot;,\n  \&quot;transactionID\&quot;:\&quot;073a5299-7018-4c78-8ec7-af3afc0b50d0\&quot;,\n  \&quot;createDate\&quot;: \&quot;10/10/2020\&quot;,\n  \&quot;processedDate\&quot;: \&quot;10/10/2020\&quot;,\n  \&quot;score\&quot;: 0.5,\n  \&quot;typologyNumber\&quot;: 28,\n  \&quot;textResult\&quot;: \&quot;Typology 28 score is 0.5\&quot;,\n  \&quot;Reason\&quot;: \&quot;Typology 28 score is 0.5\&quot;\n}&quot;,
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
   <maxResponseSize>-1</maxResponseSize>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>POST</restRequestMethod>
   <restUrl>${url}off-channel-decisioning-processor${Namespace}/typology-scoring</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceEndpoint></soapServiceEndpoint>
   <soapServiceFunction></soapServiceFunction>
   <socketTimeout>-1</socketTimeout>
   <useServiceInfoFromWsdl>true</useServiceInfoFromWsdl>
   <variables>
      <defaultValue>GlobalVariable.url</defaultValue>
      <description></description>
      <id>fd3e9841-db9e-4b4b-abb4-c9be6ddb4f4b</id>
      <masked>false</masked>
      <name>url</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.Namespace</defaultValue>
      <description></description>
      <id>b446397e-160a-45d2-b41a-e61bc8ddb790</id>
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

println('checking response code')
RequestObject request = WSResponseManager.getInstance().getCurrentRequest()
ResponseObject response = WSResponseManager.getInstance().getCurrentResponse() 

WS.verifyResponseStatusCode(response, 200)
assertThat(response.getStatusCode()).isEqualTo(200)  
println('actual response code >> '+response)

WS.verifyElementPropertyValue(response, 'message', &quot;Transaction is Negative for Fraud/Risk&quot;)
WS.verifyElementPropertyValue(response, 'score', 0.5)


def jsonSlurper = new JsonSlurper()
def jsonResponse = jsonSlurper.parseText(response.getResponseText())

println('transaction message >> ' + jsonResponse.message)
println('transaction score >> ' + jsonResponse.score)

</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
