## Guidelines for applicants

Smart solutions incorporate functions for capturing context information and make decisions based on such context
information, leading to the execution of smart actions which can improve existing processes. Such context information
may come from many different sources (end users, IoT devices, public open data sources, and all kind of IT systems or
social networks) which may be also highly distributed.

The figure below illustrates the typical architecture of a Powered by FIWARE smart solution. _FIWARE Context Broker_ is
the key component which allows to capture, manage and provide access to context information at very large scale, in a
standard manner. In addition, smart solutions might make use of the _FIWARE IoT Agent_ suite for connecting IoT devices
as context information datasources, so that highly dynamic context data is made available, regardless IoT protocols or
networks.

FIWARE offers extra connectors (_Cygnus_, _STH-Comet_, _QuantumLeap_, _Draco_) which allow to generate short term or
longer term historical information and storing it in different datastores, namely HDFS, MongoDB or Elasticsearch
(CrateDB). Then, Big Data Processing or Machine Learning algorithms can be performed, so that insights, predictions or
other advanced analytics can be generated. Further information for developers can be found on the
[fiware.org](https://www.fiware.org/developers). Similarly, the Catalogue of FIWARE components canbe found on
[GitHub](https://www.fiware.org/developers/catalogue)

An example of a smart solution would be one intended to optimize a waste collection service in a city. The service would
gather context data (filling levels) from IoT devices attached to waste containers. IoT Devices will send measurements
to a FIWARE IoT Agent, which will store them in an instance of FIWARE Context Broker. Thus IoT devices would act as
providers of context information. Likewise, a route optimization service (context data consumer) will use such context
information to optimize picking up routes so that only those containers fully filled will be visited. A city dashboard
could also act as context data consumer offering a visualization solution, so that city officials can follow, in real
time, the status of containers or even vehicles dedicated to waste collection. For providing and consuming context data,
applications will make use of the FIWARE NGSI standard APIs. Last but not least, historical data could be generated
using _Cygnus_ or _Draco_ and stored on a Big Data system so that analytics can be performed.

## Guideline for validators

In order to proceed with the validation of a Powered by FIWARE Solution validators must follow these steps:

1. Check all the information provided by applicants. At least there must be a document which clearly describes the
   architecture and data models employed by the solution.

2. Revise the architecture of the solution and try to respond to the following questions:

    - a) Is the FIWARE Context Broker the main architectural component used to store information coming from data
      providers?
    - b) Is the FIWARE Context Broker the main architectural component used to offer information to data consumers?
    - c) Are the FIWARE NGSI APIs the main mechanism used to ingest and consume information within the application?

3. Revise the data models (as per the documentation or schemas provided) of the application and try to respond to the
   following questions:

    - a) Are the application data models suitable to be used with FIWARE NGSI?
    - b) Are the application data models compatible with the FIWARE Data Models? An application data model is compatible
      if it can be mapped to an existing FIWARE Data Model (through an ETL) or if it is just an extension of an existing
      FIWARE Data Model.

4. From the documentation provided, there must be clear evidence to infer affirmative responses to all the questions
   under epigraphs 2 and 3 (either a. or b.). If there is no clear evidence, then evaluators must call for an interview,
   so that the applicant can provide extra evidence to pass points 2 and 3. Extra evidence could be provided by giving
   further verbal explanations and/or demoing against an application environment (for instance using Postman or similar
   tools). A demo user could be requested by the corresponding FIWARE Validation Center, allowing the validation to be
   done online.

5. Once there is clear evidence of 2 and 3 evaluators must generate a short report summarizing the main evidence
   provided to pass points 2 and 3, i.e. why, under their judgment, the solution is Powered by FIWARE.

6. If evaluators cannot find enough evidence for epigraphs 2 and 3 the application must be rejected.
