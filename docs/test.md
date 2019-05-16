<h1>Testing</h1>

The following test scenarios should be applied:

## Test Scenarios

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

## Fill in the _"FIWARE-Ready"_ IoT Device Manual Template

Fill the template named
[_"FIWARE-Ready"_ IoT Device Manual Template](https://docs.google.com/document/d/1g_ic6Vy5g9i04Oe-kyFf8gxvP2862IVCGH9KJIqKuYk/edit).
This template requires you to describe how your hardware device communicates with FIWARE. If any sections within the
template do not make sense or not apply to your implementation, please explain the reason(s) in its corresponding place.
This document will be the basic one used by the user to configure and use your components, therefore, you should
describe in details how to connect the device to Orion Context Broker to send context information. If you have any
questions regarding the information in this template, you are welcome to contact the _"FIWARE-Ready"_ IoT Devices
Program reviewers [IoTReady@lists.fiware.org​](mailto:I​oTReady@lists.fiware.org​).

## Fill in the information of your product into the marketplace

You can go to the marketplace and select [Apply](http://marketplace.fiware.org/apply) to upload a new component to be
validated. It goes to the ​ web page in which you can select **Start a new application**.

![](img/02.png)

If you want to validate several _"FIWARE-Ready"_ IoT Devices please remember to fill in multiple seaparate applications.
This information will describe us how your hardware device communicates with FIWARE.

![](img/03.png)

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

#### Submit application

Once that you finish with the process to introduce the data, you can submit the data to start the validation process.

![](img/04.png)

_"FIWARE-Ready"_ IoT Device Program reviewers will evaluate the provided documentation and contact with you in case any
clarification is required. The result of this evaluation will be a Test Report that will be published in the marketplace
application page. Once the evaluation is finished, you have successfully completed the _"FIWARE-Ready"_ IoT Device
Program, and your device will be published on the list of _"FIWARE-Ready"_ IoT Devices commercial devices available at
[FIWARE Marketplace](​http://marketplace.fiware.org)​. Once the product is validated you will also be able to publish in
your own web the program logo and specific instructions to connect your product to FIWARE ecosystems (based on a
template we will provide as well).
