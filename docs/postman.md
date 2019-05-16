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
