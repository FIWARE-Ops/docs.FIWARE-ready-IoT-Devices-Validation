# How to apply

1.  Read the reference guide, which will help you to apply and perform the different tests needed to evaluate your
    solution.
2.  If it is needed, set up the validation environment.
3.  Execute tests according to the test workflow using the appropriate public instances or using your own deployed
    instance.
4.  Fill in the
    [**FIWARE-ready** IoT Device Manual Template](https://docs.google.com/document/d/1Ur9JG2rzSsImVJpmz05aXXv2exRvmCvGgRo869mjWaw/edit?usp=sharing)
    with the information about how to use your component within FIWARE ecosystem.
5.  Go to `http://marketplace.fiware.org/apply`. Register, and then apply by providing all your company information.
    Then, under the **solution/service** section, choose **FIWARE-ready IoT Device** under **category** and a proper
    domain of application.
6.  You might be asked to provide extra information or to have an interview with **FIWARE-ready** IoT Device reviewers
    who might require extra information about your solution or even a real-time simulation of the entire process so that
    they can take an objective validation decision.
7.  **FIWARE-ready** IoT Device reviewers will evaluate the documentation provided and any hardware provided will
    perform themselves the tests.

In the event that your application is correct and satisfies all the requirements, congratulations you are now part of
the FIWARE Marketplace! The product will be updated to the **FIWARE-ready** IoT Devices list of commercially available
products. As a result of the validation process, an official document signed by FIWARE will acredite the result of this
process together with a document with the results obtained during the process

# FIWARE IoT platform

Regarding IoT, the FIWARE platform offers two major software components:

-   [FIWARE Context Broker](https://github.com/telefonicaid/fiware-orion): It is the main access point for developers
    using the [NGSI](https://fiware.github.io/specifications/OpenAPI/ngsiv2) Interface. Developers can retrieve the
    current context of an IoT device as a series of attributes of an entity. Developers may also send commands to
    devices by updating command-related attributes, provided they have access rights for those operations.
-   [FIWARE IoT Agents](https://github.com/Fiware/catalogue/tree/master/iot-agents). These components deal with
    southbound communications from the FIWARE Context Broker to IoT devices and also translate northbound communications
    from the device specific protocol into NGSI commands. This allows IoT integrators to connect devices, receive
    measurements and send commands.

![](../img/01.png)

Any IoT standard or proprietary protocol can be connected to FIWARE via the IoT Agent components. Currently FIWARE
provides IoT Agents for:

-   [IoT Agent for JSON](https://github.com/telefonicaid/iotagent-json) - a bridge between HTTP/MQTT messaging (with a
    JSON payload) and NGSI
-   [IoT Agent for LWM2M](https://github.com/telefonicaid/lightweightm2m-iotagent) - a bridge between the
    [Lightweight M2M](https://www.omaspecworks.org/what-is-oma-specworks/iot/lightweight-m2m-lwm2m/) protocol and NGSI
-   [IoT Agent for Ultralight](https://github.com/telefonicaid/iotagent-ul) - a bridge between HTTP/MQTT messaging (with
    an UltraLight2.0 payload) and NGSI
-   [IoT Agent for LoRaWAN](https://github.com/Atos-Research-and-Innovation/IoTagent-LoRaWAN) - a bridge between the
    [LoRaWAN](https://www.thethingsnetwork.org/docs/lorawan/) protocol and NGSI
-   [IoT Agent for OPC-UA](https://github.com/Engineering-Research-and-Development/iotagent-opcua) - a bridge between
    the [OPC Unified Architecture](http://www.opcua.us/) protocol and NGSI
-   [IoT Agent for Sigfox](https://github.com/telefonicaid/sigfox-iotagent) - a bridge between the
    [Sigfox](https://www.sigfox.com/en) protocol and NGSI

-   The [OpenMTC](https://github.com/OpenMTC/OpenMTC) Incubated Generic Enabler brings an open source implementation of
    the OneM2M standard. A northbound interface with the Orion Context Broker is implemented as part of the product.

There is also an [IoT Agent library](https://github.com/telefonicaid/iotagent-node-lib/) for developing your own IoT
Agent to cover any other possible IoT Standard not covered by the existing enablers.

New IoT Agents are being added over time, and the current supported set of protocols can be found within the
[FIWARE Catalogue](https://github.com/Fiware/catalogue/tree/master/iot-agents)


# Test Scenarios

<h4>Create a service</h4>

-   Objective: Verify that the implementation is capable of creating a new IoT service.
-   Applicability: Optional
-   Pass/Fail Criteria: The new IoT service is successfully created in the context broker.

<h4>Register a device</h4>

-   Objective: Verify that the IoT device implementation has been registered in the context broker.
-   Applicability: Mandatory
-   Pass/Fail Criteria: The context broker sends a status code message indicating that the device has been registered.
    No error message is received.

<h4>Get a device</h4>

-   Objective: Verify that it is possible to retrieve the list of existing devices.
-   Applicability: Optional
-   Pass/Fail Criteria: The registered devices appear in the list.

<h4>Send the measurement</h4>

-   Objective: Verify that the device implementation is able to send measurements.
-   Applicability: Mandatory
-   Pass/Fail Criteria: The measurements are accessible in the Context Broker.

<h4>Read the measurement</h4>

-   Objective: Verify that the device implementation is able to read measurements from the Context Broker.
-   Applicability: Optional
-   Pass/Fail Criteria: The device implementation is able to retrieve the measurements.

Please, save all the communication established with the IoT Stack software APIs during the execution of each of the
tests (responses you get).

<h4>Fill in the _"FIWARE-Ready"_ IoT Device Manual Template</h4>

Fill the template named
[_"FIWARE-Ready"_ IoT Device Manual Template](https://docs.google.com/document/d/1g_ic6Vy5g9i04Oe-kyFf8gxvP2862IVCGH9KJIqKuYk/edit).
This template requires you to describe how your hardware device communicates with FIWARE. If any sections within the
template do not make sense or not apply to your implementation, please explain the reason(s) in its corresponding place.
This document will be the basic one used by the user to configure and use your components, therefore, you should
describe in details how to connect the device to Orion Context Broker to send context information. If you have any
questions regarding the information in this template, you are welcome to contact the _"FIWARE-Ready"_ IoT Devices
Program reviewers [IoTReady@lists.fiware.org​](mailto:I​oTReady@lists.fiware.org​).

<h4>Fill in the information of your product into the marketplace</h4>

You can go to the marketplace and select [Apply](http://marketplace.fiware.org/apply) to upload a new component to be
validated. It goes to the ​ web page in which you can select **Start a new application**.

![](../img/02.png)

If you want to validate several _"FIWARE-Ready"_ IoT Devices please remember to fill in multiple seaparate applications.
This information will describe us how your hardware device communicates with FIWARE.

![](../img/03.png)

You can see that the status is Draft which means that it is not sent to the reviewers yet. Additionally, you have the
possibility to delete this application if it was not delivered for validation yet. If you click on **Fill** button in
the **Company information** box, the form requests you to introduce the name and logo of the company, address, city,
country and contact email. All of them all mandatory to validate your _"FIWARE-Ready"_ IoT Device. If you click on
**Fill** button in the **Solution/Service information** box, the form request you to fill in the technical detail about
your solution in order that the reviewers can validate the solution. It is very important that you provide the URL to
download software drivers/libraries/components, tutorial and guidelines facilitating the integration with FIWARE.
Concretely, you should put here the ​URL to the filled template that we presented in section 4.4​. Additionally, you
must provide ​files or screenshots of the responses you have obtained during the testing against the IoT Stack software
APIs in all Testing Workflow tests. This content should be introduced in \_Additional documentation describing how the
solution/technology uses or integrates with FIWARE.

<h4>Submit application</h4>

Once that you finish with the process to introduce the data, you can submit the data to start the validation process.

![](../img/04.png)

_"FIWARE-Ready"_ IoT Device Program reviewers will evaluate the provided documentation and contact with you in case any
clarification is required. The result of this evaluation will be a Test Report that will be published in the marketplace
application page. Once the evaluation is finished, you have successfully completed the _"FIWARE-Ready"_ IoT Device
Program, and your device will be published on the list of _"FIWARE-Ready"_ IoT Devices commercial devices available at
[FIWARE Marketplace](​http://marketplace.fiware.org)​. Once the product is validated you will also be able to publish in
your own web the program logo and specific instructions to connect your product to FIWARE ecosystems (based on a
template we will provide as well).

# Public testing infrastructure

The public testing infrastructure is accessible at the following locations:

<table border="1">
<thead>
<tr>
<th>Protocol/Payload</th>
<th>URL</th>
<th>Port type</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="4">JSON</td>
<td>https://iot-ready-json.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-json.lab.fiware.org:27896</td>
<td>Data provisioning</td>
</tr>
<tr>
<td>tcp://iot-ready-json.lab.fiware.org:27897</td>
<td>Mosquitto</td>
</tr>
<tr>
<td>https://iot-ready-json.lab.fiware.org:21026</td>
<td>Orion Context Broker</td>
</tr>
<tr>
<td rowspan="4">UltraLight 2.0</td>
<td>https://iot-ready-ul.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-ul.lab.fiware.org:27896</td>
<td>Data provisioning</td>
</tr>
<tr>
<td>tcp://iot-ready-ul.lab.fiware.org:27898</td>
<td>Mosquitto</td>
</tr>
<tr>
<td>https://iot-ready-ul.lab.fiware.org:21026</td>
<td>Orion Context Broker</td>
</tr>
</tbody>
</table>

# Postman Examples

Postman [collection](https://documenter.getpostman.com/view/3940441/S1ENxJ6g) have been prepared for test scenario. The
collection uses variables, public (default) ones are in the collection. You can override them (except endpoints).

## UltraLight 2.0 over HTTP

The following tests could be run to verify a device capable of sending messages in the Ultralight 2.0 format over HTTP:

### Check the Orion Version (Optional)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:21026/version' | python -m json.tool
```

#### Response

```json
{
    "orion": {
        "compile_time": "Mon Feb 25 15:15:27 UTC 2019",
        "compiled_by": "root",
        "compiled_in": "37fdc92c3e97",
        "doc": "https://fiware-orion.rtfd.io/en/2.2.0/",
        "git_hash": "5a46a70de9e0b809cce1a1b7295027eea0aa757f",
        "release_date": "Mon Feb 25 15:15:27 UTC 2019",
        "uptime": "0 d, 5 h, 27 m, 55 s",
        "version": "2.2.0"
    }
}
```

### Check the UltraLight Agent health (Optional)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/about' | python -m json.tool
```

#### Response

```json
{
    "baseRoot": "/",
    "libVersion": "2.8.0-next",
    "port": 24061,
    "version": "1.8.0-next"
}
```

### Create a service

#### Request

```bash
curl -i -X POST \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/services' \
  -H 'Content-Type: application/json' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /http' \
  -d '{
        "services": [{
        "apikey": "ulhttpkey",
        "cbroker": "https://iot-ready-ul.lab.fiware.org:21026",
        "entity_type": "IoT-Ready-Type",
        "resource": "/iot/d"}]
     }'
```

#### Response

```text
HTTP/1.1 201 Created
Server: nginx/1.15.10
Date: Thu, 11 Apr 2019 15:54:25 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 2
Connection: keep-alive
X-Powered-By: Express
Fiware-Correlator: c31b2d53-b5ef-4b44-9e1a-ca2bc35b1386
ETag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
```

### List a service (Optional)

List of services will be empty if you missed previously step (if you use default service)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/services' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /http' | python -m json.tool
```

#### Response

```json
{
    "count": 1,
    "services": [
        {
            "__v": 0,
            "_id": "5caf63313ec3c500111335c9",
            "apikey": "ulhttpkey",
            "attributes": [],
            "commands": [],
            "entity_type": "IoT-Ready-Type",
            "internal_attributes": [],
            "lazy": [],
            "resource": "/iot/d",
            "service": "ul",
            "static_attributes": [],
            "subservice": "/http"
        }
    ]
}
```

### Register a device

#### Request

```bash
curl -i -X POST \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/devices' \
  -H 'Content-Type: application/json' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /http' \
  -d '{
       "devices": [{
         "device_id": "UL-HTTP-Device",
         "protocol": "PDI-IoTA-UltraLight",
         "transport": "HTTP",
         "entity_name": "IoT-Ready-Entity",
         "entity_type": "IoT-Ready-Type",
         "attributes": [{
         "object_id": "c",
         "name": "count",
         "type": "Integer" }]
    }]
}'
```

#### Response

```text
HTTP/1.1 201 Created
Server: nginx/1.15.10
Date: Thu, 11 Apr 2019 15:54:58 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 2
Connection: keep-alive
X-Powered-By: Express
Fiware-Correlator: 6393ead2-50d9-4f71-b795-76b46d900e79
ETag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
```

### Get a device (Optional)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/devices/UL-HTTP-Device' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /http' | python -m json.tool
```

#### Response

```json
{
    "attributes": [
        {
            "name": "count",
            "object_id": "c",
            "type": "Integer"
        }
    ],
    "commands": [],
    "device_id": "UL-HTTP-Device",
    "entity_name": "IoT-Ready-Entity",
    "entity_type": "IoT-Ready-Type",
    "lazy": [],
    "protocol": "PDI-IoTA-UltraLight",
    "service": "ul",
    "service_path": "/http",
    "static_attributes": [],
    "transport": "HTTP"
}
```

### Send the measurement

#### Request

```bash
curl -i -X POST \
  'https://iot-ready-ul.lab.fiware.org:27896/iot/d?k=ulhttpkey&i=UL-HTTP-Device' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /http' \
  -H 'Content-Type: text/plain' \
  -d 'c|1'
```

#### Response

```text
HTTP/1.1 200 OK
Server: nginx/1.15.10
Date: Thu, 11 Apr 2019 15:55:24 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 0
Connection: keep-alive
X-Powered-By: Express
ETag: W/"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"
```

### Read the measurement

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:21026/v2/entities?type=IoT-Ready-Type' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /http' | python -m json.tool
```

#### Response

```json
[
    {
        "TimeInstant": {
            "metadata": {},
            "type": "ISO8601",
            "value": "2019-04-11T15:55:24.00Z"
        },
        "count": {
            "metadata": {
                "TimeInstant": {
                    "type": "ISO8601",
                    "value": "2019-04-11T15:55:24.152Z"
                }
            },
            "type": "Integer",
            "value": "1"
        },
        "id": "IoT-Ready-Entity",
        "type": "IoT-Ready-Type"
    }
]
```

## UltraLight 2.0 over MQTT

The following tests could be run to verify a device capable of sending the Ultralight 2.0 using an MQTT broker

### Check the Orion Version (Optional)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:21026/version' | python -m json.tool
```

#### Response

```json
{
    "orion": {
        "compile_time": "Mon Feb 25 15:15:27 UTC 2019",
        "compiled_by": "root",
        "compiled_in": "37fdc92c3e97",
        "doc": "https://fiware-orion.rtfd.io/en/2.2.0/",
        "git_hash": "5a46a70de9e0b809cce1a1b7295027eea0aa757f",
        "release_date": "Mon Feb 25 15:15:27 UTC 2019",
        "uptime": "0 d, 5 h, 29 m, 46 s",
        "version": "2.2.0"
    }
}
```

### Check the UltraLight Agent health (Optional)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/about' | python -m json.tool
```

#### Response

```json
{
    "baseRoot": "/",
    "libVersion": "2.8.0-next",
    "port": 24061,
    "version": "1.8.0-next"
}
```

### Create a service

#### Request

```bash
curl -i -X POST \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/services' \
  -H 'Content-Type: application/json' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /mqtt' \
  -d '{
        "services": [{
        "apikey": "ulmqttkey",
        "cbroker": "https://iot-ready-ul.lab.fiware.org:21026",
        "entity_type": "IoT-Ready-Type",
        "resource": "/iot/d"}]
     }'
```

#### Response

```text
HTTP/1.1 201 Created
Server: nginx/1.15.10
Date: Thu, 11 Apr 2019 15:56:09 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 2
Connection: keep-alive
X-Powered-By: Express
Fiware-Correlator: 466a1076-a203-4a31-a3ee-21a6c307af9d
ETag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
```

### List a service (Optional)

List of services will be empty if you missed previously step (if you use default service)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/services' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /mqtt' | python -m json.tool
```

#### Response

```json
{
    "count": 1,
    "services": [
        {
            "__v": 0,
            "_id": "5caf63993ec3c500111335cb",
            "apikey": "ulmqttkey",
            "attributes": [],
            "commands": [],
            "entity_type": "IoT-Ready-Type",
            "internal_attributes": [],
            "lazy": [],
            "resource": "/iot/d",
            "service": "ul",
            "static_attributes": [],
            "subservice": "/mqtt"
        }
    ]
}
```

### Register a device

#### Request

```bash
curl -i -X POST \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/devices' \
  -H 'Content-Type: application/json' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /mqtt' \
  -d '{
       "devices": [{
         "device_id": "UL-MQTT-Device",
         "protocol": "PDI-IoTA-UltraLight",
         "transport": "MQTT",
         "entity_name": "IoT-Ready-Entity",
         "entity_type": "IoT-Ready-Type",
         "attributes": [{
         "object_id": "c",
         "name": "count",
         "type": "Integer" }]
    }]
}'
```

#### Response

```text
HTTP/1.1 201 Created
Server: nginx/1.15.10
Date: Thu, 11 Apr 2019 15:56:37 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 2
Connection: keep-alive
X-Powered-By: Express
Fiware-Correlator: 3a3bacd0-5bd1-450c-99e1-0dc33efe6f5f
ETag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
```

### Get a device (Optional)

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:24061/iot/devices/UL-MQTT-Device' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /mqtt' | python -m json.tool
```

#### Response

```json
{
    "attributes": [
        {
            "name": "count",
            "object_id": "c",
            "type": "Integer"
        }
    ],
    "commands": [],
    "device_id": "UL-MQTT-Device",
    "entity_name": "IoT-Ready-Entity",
    "entity_type": "IoT-Ready-Type",
    "lazy": [],
    "protocol": "PDI-IoTA-UltraLight",
    "service": "ul",
    "service_path": "/mqtt",
    "static_attributes": [],
    "transport": "MQTT"
}
```

### Send the measurement

#### Request

```bash
docker run -it --rm efrecon/mqtt-client pub -h iot-ready-ul.lab.fiware.org -p 27898 -m "c|1" -t "/ulmqttkey/UL-MQTT-Device/attrs"
```

### Read the measurement

#### Request

```bash
curl -s -X GET \
  'https://iot-ready-ul.lab.fiware.org:21026/v2/entities?type=IoT-Ready-Type' \
  -H 'FIWARE-Service: ul' \
  -H 'FIWARE-ServicePath: /mqtt' | python -m json.tool
```

#### Response

```json
[
    {
        "TimeInstant": {
            "metadata": {},
            "type": "ISO8601",
            "value": "2019-04-11T16:01:24.00Z"
        },
        "count": {
            "metadata": {
                "TimeInstant": {
                    "type": "ISO8601",
                    "value": "2019-04-11T16:01:24.484Z"
                }
            },
            "type": "Integer",
            "value": "1"
        },
        "id": "IoT-Ready-Entity",
        "type": "IoT-Ready-Type"
    }
]
```
