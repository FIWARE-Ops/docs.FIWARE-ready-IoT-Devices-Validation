# How to apply

1.  Read this reference guide, which will help you to apply and perform the different tests needed to evaluate your
    solution.
2.  If it is needed, set up the validation environment.
3.  Execute tests according to the test workflow using the appropriate public instances or using your own deployed
    instance.
4.  Fill in the
    [**FIWARE-ready** IoT Device Manual Template](https://s3.amazonaws.com/fundingbox-sites/gear%2F1517994518659-FIWARE+Ready+IoT+Device+Manual+Template+v1+%282%29.docx)
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
Agent to cover any other possible IoT Standard not covered by the existing enablers.

New IoT Agents are being added over time, and the current supported set of protocols can be found within the
[FIWARE Catalogue](https://github.com/Fiware/catalogue/tree/master/iot-agents)
