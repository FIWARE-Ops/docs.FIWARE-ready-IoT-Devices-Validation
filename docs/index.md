[![Documentation](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/documentation.svg)](https://fiware-tutorials.rtfd.io)
[![Support badge](https://nexus.lab.fiware.org/repository/raw/public/badges/stackoverflow/fiware.svg)](https://stackoverflow.com/questions/tagged/fiware)

### About the program

Over 120 cities in Europe and Latin America belong to the Open & Agile Smart Cities (OASC) Alliance Initiative. They
have agreed to operate, share and publish their smart city data using the FIWARE interoperability model.

The FIWARE ecosystem means a straightforward business opportunity for IoT products: It is simple, the FIWARE IoT stack
handles well-known IoT protocol standards and provides an enhanced OpenStack-based cloud environment plus a powerful set
of standard REST APIs to ease the development of smart applications.

Thousands of companies, including large corporations, startups, SMEs and individual developers worldwide are willing to
provide their Internet of Things (IoT) solutions to these cities, basing their solutions around the FIWARE open source
platform [components](https://github.com/fiware/catalogue).

So far, developers needed to search for **compatible** IoT products and find out how to make them work. The FIWARE-ready
IoT Devices Program provides the answer as it is designed to demonstrate the ability of the IoT solutions to
interoperate seamlessly with FIWARE platforms. The database of products and developers that have successfully
accomplished the FIWARE-ready IoT Devices Program is the catalogue of the ecosystem of IoT hardware producers and
technology providers that can be selected by the OASC Alliance cities to build their smart city solutions.

### How to apply

This documentation describes the process to apply and validate an IoT Device as FIWARE Ready.

To join FIWARE-ready IoT Devices Program, you need to follow a series of steps, including an simple validation of your
product (implementation), where you will connect it to a FIWARE public instance and you will perform a series of tests:

-   IoT services creation (optional)
-   Device registration
-   Obtain the list of devices (optional)
-   Send measurements
-   Read measurements (optional)

Second step of the validation process requires you to fill in a template to describe how your hardware device
communicates with FIWARE.

This validation process is an auto evaluation process but it is assisted by FIWARE-ready IoT Devices Program reviewers
(IoTReady@lists.fiware.org) who will review your tests logs and evaluate whether your device is connecting with the
public instance correctly.

Once you have successfully completed the FIWARE-ready IoT Devices Program, your device will be published on
[FIWARE Marketplace](http://marketplace.fiware.org​).

### FIWARE IoT platform

Regarding IoT, the FIWARE platform offers two major sofware components:

-   [FIWARE Context Broker](https://github.com/telefonicaid/fiware-orion): It is the main access point for developers
    using the [NGSI](https://fiware.github.io/specifications/OpenAPI/ngsiv2) Interface. Developers can retrieve the
    current context of an IoT device as a series of attributes of an entity. Developers may also send commands to
    devices by updating command-related attributes, provided they have access rights for those operations.
-   [FIWARE IoT Agents](https://github.com/Fiware/catalogue/tree/master/iot-agents). These components deal with
    southbound communications from the FIWARE Context Broker to IoT devices and also translate northbound communications
    from the device specific protocol into NGSI commands. This allows IoT integrators to connect devices, receive
    measurements and send commands.

![](img/01.png)

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
Agent.

New IoT Agents are being added over time, and the current supported set of protocols can be found within the
[FIWARE Catalogue](https://github.com/Fiware/catalogue/tree/master/iot-agents)

### Public testing infrastructure

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
<td rowspan="2">JSON over HTTP</td>
<td>https://iot-ready-json-http.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-json-http.lab.fiware.org:27896</td>
<td>Data provisioning</td>
</tr>
<tr>
<td rowspan="3">JSON over MQTT</td>
<td>https://iot-ready-ul-mqtt.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-ul-mqtt.lab.fiware.org:27897</td>
<td>Data provisioning</td>
</tr>
<tr>
<td>https://iot-ready-ul-mqtt.lab.fiware.org:27898</td>
<td>Message Broker (Mosquitto)</td>
</tr>
<tr>
<td rowspan="2">JSON over AMQP</td>
<td>https://iot-ready-ul-amqp.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-ul-amqp.lab.fiware.org:27899</td>
<td>Data provisioning</td>
</tr>
<tr>
<td rowspan="2">UltraLight 2.0 over HTTP</td>
<td>https://iot-ready-ul-http.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-ul-http.lab.fiware.org:27896</td>
<td>Data provisioning</td>
</tr>
<tr>
<td rowspan="3">UltraLight 2.0 over MQTT</td>
<td>https://iot-ready-ul-mqtt.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-ul-mqtt.lab.fiware.org:27900</td>
<td>Data provisioning</td>
</tr>
<tr>
<td>https://iot-ready-ul-mqtt.lab.fiware.org:27901</td>
<td>Message Broker (Mosquitto)</td>
</tr>
<tr>
<td rowspan="2">UltraLight 2.0 over AMQP</td>
<td>https://iot-ready-ul-amqp.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-ul-amqp.lab.fiware.org:27902</td>
<td>Data provisioning</td>
</tr>
<tr>
<td rowspan="2">LightWeightM2M</td>
<td>https://iot-ready-lwm2m.lab.fiware.org:24061</td>
<td>Device management</td>
</tr>
<tr>
<td>https://iot-ready-lwm2m.lab.fiware.org:27903</td>
<td>Data provisioning</td>
</tr>
<tr>
<td>Orion Context Broker</td>
<td>https://iot-ready.lab.fiware.org:21026</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

### Test scenario

#### Create a service

-   Objective: Verify that the implementation is capable of creating a new IoT service.
-   Applicability: Optional
-   Pass/Fail Criteria: The new IoT service is successfully created in the context broker.

#### Register a device

-   Objective: Verify that the IoT device implementation has been registered in the context broker.
-   Applicability: Mandatory
-   Pass/Fail Criteria: The context broker sends a status code message indicating that the device has been registered.
    No error message is received.

#### Get a device

-   Objective: Verify that it is possible to retrieve the list of existing devices.
-   Applicability: Optional
-   Pass/Fail Criteria: The registered devices appear in the list.

#### Send the measurement

-   Objective: Verify that the device implementation is able to send measurements.
-   Applicability: Mandatory
-   Pass/Fail Criteria: The measurements are accessible in the Context Broker.

#### Read the measurement

-   Objective: Verify that the device implementation is able to read measurements from the Context Broker.
-   Applicability: Optional
-   Pass/Fail Criteria: The device implementation is able to retrieve the measurements.

Please, save all the communication established with the IoT Stack software APIs during the execution of each of the
tests (responses you get).

#### Fill in the FIWARE-Ready IoT Device Manual Template

Fill the template named
‘[FIWARE-ready IoT Device Manual Template](https://docs.google.com/document/d/1g_ic6Vy5g9i04Oe-kyFf8gxvP2862IVCGH9KJIqKuYk/edit).
This template requires you to describe how your hardware device communicates with FIWARE. If any sections within the
template do not make sense or not apply to your implementation, please explain the reason(s) in its corresponding place.
This document will be the basic one used by the user to configure and use your components, therefore, you should
describe in details how to connect the device to Orion Context Broker to send context information. If you have any doubt
regarding the information in this template, you are welcome to contact FIWARE-ready IoT Devices Program reviewers
[IoTReady@lists.fiware.org​](mailto:I​oTReady@lists.fiware.org​).

#### Fill in the information of your product into the marketplace

You can go to the marketplace and select [Apply](http://marketplace.fiware.org/apply) to upload a new component to be
validated. It goes to the ​ web page in which you can select ‘Start a new application’.

![](img/02.png)

If you want to validate several FIWARE-ready IoT Devices please remember to fill in multiple seaparate applications.
This information will describe us how your hardware device communicates with FIWARE.

![](img/03.png)

You can see that the status is Draft which means that it is not sent to the reviewers yet. Additionally, you have the
possibility to delete this application if it was not delivered for validation yet. If you click on ‘Fill’ button in the
‘Company information’ box, the form requests you to introduce the name and logo of the company, address, city, country
and contact email. All of them all mandatory to validate your FIWARE-ready IoT Device. If you click on ‘Fill’ button in
the ‘Solution/Service information’ box, the form request you to fill in the technical detail about your solution in
order that the reviewers can validate the solution. It is very important that you provide the URL to download software
drivers/libraries/components, tutorial and guidelines facilitating the integration with FIWARE. Concretely, you should
put here the ​URL to the filled template that we presented in section 4.4​. Additionally, you must provide ​files or
screenshots of the responses you have obtained during the testing against the IoT Stack software APIs in all Testing
Workflow tests. This content should be introduced in ‘Additional documentation describing how the solution/technology
uses or integrates with FIWARE’.

#### Submit application

Once that you finish with the process to introduce the data, you can submit the data to start the validation process.

![](img/04.png)

FIWARE-ready IoT Devices Program reviewers will evaluate the provided documentation and contact with you in case any
clarification is required. The result of this evaluation will be a Test Report that will be published in the marketplace
application page. Once the evaluation is finished, you have successfully completed the FIWARE-ready IoT Devices Program,
and your device will be published on the list of FIWARE-ready IoT Devices commercial devices available at
[FIWARE Marketplace](​http://marketplace.fiware.org)​. Once the product is validated you will also be able to publish in
your own web the program logo and specific instructions to connect your product to FIWARE ecosystems (based on a
template we will provide as well).

### Example (UltraLight 2.0 over HTTP)

Postman [collection](https://app.getpostman.com/run-collection/fe0525384f57d03afdf0) and
[documentation](https://documenter.getpostman.com/view/3940441/Rzfnkn2W#6955b7fa-4e9a-4bc8-b6d5-a66dc2962a80) have been
prepared for test scenario. The collection uses variables, public (default) ones are in the collection. You can override
them (except endpoints).

In the scenarios with curl variables replaced with default values.

#### Check the Orion Version (Optional)

Request

```bash
curl -s -X GET \
  'https://iot-ready.lab.fiware.org:21026/version' | python -m json.tool
```

Response

```json
{
    "orion": {
        "compile_time": "Fri Sep 28 09:56:56 UTC 2018",
        "compiled_by": "root",
        "compiled_in": "4852e5bea506",
        "doc": "https://fiware-orion.readthedocs.org/en/2.0.0/",
        "git_hash": "485128e135f4225040841f5ab3b85d42cfe68f55",
        "release_date": "Fri Sep 28 09:56:56 UTC 2018",
        "uptime": "3 d, 15 h, 40 m, 53 s",
        "version": "2.0.0"
    }
}
```

#### Check the UltraLight Agent health (Optional)

Request

```bash
curl -s -X GET \
  'https://iot-ready-ul-http.lab.fiware.org:24061/iot/about' | python -m json.tool
```

Response

```json
{
    "baseRoot": "/",
    "libVersion": "2.7.0",
    "port": 24061,
    "version": "1.7.0"
}
```

#### Create a service (Optional)

Request

```bash
curl -v -X POST \
  'https://iot-ready-ul-http.lab.fiware.org:24061/iot/services' \
  -H 'Content-Type: application/json' \
  -H 'FIWARE-Service: iot' \
  -H 'FIWARE-ServicePath: /' \
  -d '{
        "services": [{
        "apikey": "4jggokgpepnvsb2uv4s40d59ov",
        "cbroker": "http://iot-test.lab.fiware.org:24040",
        "entity_type": "Motion",
        "resource": "/iot/d"}]
     }'
```

Response

```text
201 Created
```

#### List a service (Optional)

List of services will be empty if you missed previously step (if you use default service)

Request

```bash
curl -s -X GET \
  'https://iot-ready-ul-http.lab.fiware.org:24061/iot/services' \
  -H 'FIWARE-Service: iot' \
  -H 'FIWARE-ServicePath: /' | python -m json.tool
```

Response

In case if service was created:

```json
{
    "count": 1,
    "services": [
        {
            "__v": 0,
            "_id": "5c1a29d4b0d38d428ef0bc26",
            "apikey": "4jggokgpepnvsb2uv4s40d59ov",
            "attributes": [],
            "commands": [],
            "entity_type": "Motion",
            "internal_attributes": [],
            "lazy": [],
            "resource": "/iot/d",
            "service": "iot",
            "static_attributes": [],
            "subservice": "/"
        }
    ]
}
```

In case if you use default service:

```json
{
    "count": 0,
    "services": []
}
```

#### Register a device

Request

```bash
curl -v -X POST \
  'https://iot-ready-ul-http.lab.fiware.org:24061/iot/devices' \
  -H 'Content-Type: application/json' \
  -H 'FIWARE-Service: iot' \
  -H 'FIWARE-ServicePath: /' \
  -d '{
       "devices": [{
         "device_id": "motion001",
         "protocol": "MQTT",
         "entity_name": "urn:ngsd-ld:Motion:001",
         "entity_type": "Motion",
         "attributes": [{
         "object_id": "c",
         "name": "count",
         "type": "int" }],
       "static_attributes": [{
         "name":"refStore",
         "type": "Relationship",
        "value": "urn:ngsi-ld:Store:001"}]
    }]
}'
```

Response

```text
201 Created
```

#### Get a device (Optional)

Request

```bash
curl -s -X GET \
  'https://iot-ready-ul-http.lab.fiware.org:24061/iot/devices/motion001' \
  -H 'FIWARE-Service: iot' \
  -H 'FIWARE-ServicePath: /' | python -m json.tool
```

Response

```json
{
    "attributes": [
        {
            "name": "count",
            "object_id": "c",
            "type": "int"
        }
    ],
    "commands": [],
    "device_id": "motion001",
    "entity_name": "urn:ngsd-ld:Motion:001",
    "entity_type": "Motion",
    "lazy": [],
    "protocol": "MQTT",
    "service": "iot",
    "service_path": "/",
    "static_attributes": [
        {
            "name": "refStore",
            "type": "Relationship",
            "value": "urn:ngsi-ld:Store:001"
        }
    ],
    "transport": "HTTP"
}
```

#### Send the measurement

Request

```bash
curl -v -X POST \
  'https://iot-ready-ul-http.lab.fiware.org:27896/iot/d?k=4jggokgpepnvsb2uv4s40d59ov&i=motion001' \
  -H 'FIWARE-Service: iot' \
  -H 'FIWARE-ServicePath: /' \
  -H 'Content-Type: text/plain' \
  -d 'c|1'
```

Response

```text
200 OK
```

#### Read the measurement

Request

```bash
curl -s -X GET \
  'https://iot-ready.lab.fiware.org:21026/v2/entities/urn:ngsd-ld:Motion:001' \
  -H 'FIWARE-Service: iot' \
  -H 'FIWARE-ServicePath: /' | python -m json.tool
```

Response

```json
{
    "TimeInstant": {
        "metadata": {},
        "type": "ISO8601",
        "value": "2018-12-19T11:33:54.00Z"
    },
    "count": {
        "metadata": {
            "TimeInstant": {
                "type": "ISO8601",
                "value": "2018-12-19T11:33:54.485Z"
            }
        },
        "type": "int",
        "value": "1"
    },
    "id": "urn:ngsd-ld:Motion:001",
    "refStore": {
        "metadata": {
            "TimeInstant": {
                "type": "ISO8601",
                "value": "2018-12-19T11:33:54.485Z"
            }
        },
        "type": "Relationship",
        "value": "urn:ngsi-ld:Store:001"
    },
    "type": "Motion"
}
```

### Useful links

-   General [information](https://github.com/Fiware/catalogue/tree/master/iot-agents) about IoT Agents
-   [IoT Agent for UltraLight2.0](https://fiware-iotagent-ul.readthedocs.io/en/latest/) documentation
-   [IoT Agent for LightWeightM2M](https://fiware-iotagent-lwm2m.readthedocs.io/en/latest/) documentation
-   [IoT Agent for JSON](https://fiware-iotagent-json.readthedocs.io/en/latest/) turorial
