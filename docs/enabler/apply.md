<h1>How to apply</h1>

First of all you need to make a self assessment in order to determine whether your product is really _"FIWARE-Ready"_.
Please bear in mind that for gaining _"FIWARE-Ready"_ status you would need to provide connectors between your component
and one or more FIWARE enablers. In most cases this would be done using one or more of the NGSI interfaces:

-   Interpreting context and providing CRUD actions to update entities within the FIWARE Context Broker.
-   Implementing the subscription endpoint as a context receiver to receive update events with relevant context
    information then providing custom processing
-   Implement the regsitration endpoint as a context provider to provide augmented context data in the form of standard
    data models.

For instance, if you are providing advanced visualization capabilities for context information, then you would need to
offer an off-the-shelf connector between your platform and FIWARE NGSI to set the context.

1.  Go to `http://marketplace.fiware.org/apply`, fill out the registration form, then choose **FIWARE-ready - Software
    enabler** under **category** and one or more proper sub-categories for your product or system.

2.  Fill up the rest of fields with as much information as possible so that evaluators can grant your application
    smoothly. An important and mandatory part will be one or more manuals that will describe how to connect your
    technology and one or more FIWARE enablers. If possible, include instructions on how to connect to an available test
    instance so that the validator can try out the enabler.

3.  Please provide details of the data models used within the solution, ideally in `spec.md` format and provide the JSON
    Schema. Examples can be found within the [FIWARE Data Models](https://github.com/FIWARE/dataModels). Where existing
    common data models are used, they can be referred to by name.

4.  Describe which NGSI operations are offered by the component, and provide working examples (e.g. cUrl or Postman).
    For example, if an enabler can offer data via a registration, provide a working URL where such data maybe receieved.

5.  You may be asked to provide extra information or to have an interview with FIWARE Experts who might require extra
    information about your solution, so that they can make an informed decision.

6.  In the event that your application is correct and satisfies all the requirements, congratulations you are now part
    of the FIWARE marketplace.
