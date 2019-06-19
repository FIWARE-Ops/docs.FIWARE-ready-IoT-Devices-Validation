## Guideline for applicants

_"Powered by FIWARE"_ Platform providers offer an enhanced Cloud environment based on technology such as OpenStack,
Kubernetes, OpenShift, Azure, GCP or AWS etc, or indeed any other technology with a rich set of open standard APIs and
services to automatically deploy _"Powered by FIWARE"_ solutions and FIWARE Generic Enablers. In addition, any _"Powered
by FIWARE"_ platform, would be eligible to join the FIWARE Lab federation to share resources. For more details visit the
[Guidelines to join FIWARE Lab](https://join-fiware-lab-guide.readthedocs.io/en/latest).

You can see _"Powered by FIWARE"_ Platforms as a FIWARE-based _Software as a Service_ on private and public clouds,
where the service is operating, maintaining and managing the infrastructure upon which the individual _"Powered by
FIWARE"_ Solutions are running. In order for this paradigm to work, some automatically deployment mechanism must be
available to provision FIWARE Generic Enablers and _"Powered by FIWARE"_ solutions.

Furthermore, platform providers can deploy FIWARE platform instances on-premise for their customers. Anyone can create a
FIWARE instance on their own and in their premises. But it is also possible to choose a company that offers FIWARE
platform services.

Besides, Infrastructure operators from different countries are able to incorporate FIWARE services to their commercial
portfolio and are making them available to anyone interested in finding a commercial FIWARE provider solution.

It is important that the procedure to update the FIWARE Generic Enablers is detailed and put in practice in order to use
always the last released components published by the FIWARE Community. To know more about the different FIWARE Generic
Enablers, you can visit the [FIWARE Catalogue](https://www.fiware.org/developers/catalogue/).

## Guideline for validators

In order to proceed with the validation of a _"Powered by FIWARE"_ Solution validators must follow these steps:

1.  Check all the information provided by applicants. At least there must be three documents:

    -   a) Detailed description of the Cloud solution adopted and the corresponding URL to access to it.
    -   b) Detailed description of the solution adopted to automatic deployment of the FIWARE Generic Enablers adopted
        based on any PaaS or CD solution associated to the Cloud Platform adopted. Keep in mind that it is mandatory the
        automatic deployment of the FIWARE Context Broker.
    -   c) Detailed procedure to update the recipes to deploy the FIWARE Generic Enablers.

2.  Revise the document about the Cloud solution adopted and try to respond to the following questions:
    -   a) Is there a clear evidence of the technical capacity to administeradministrate the corresponding cloud
        solution?
    -   b) Is the Cloud Platform open to be accessed (in case of public platform)?
    -   c) The response time of the Platform is under reasonable values (below 0,5 seconds)?
    -   d) Is it well explained the Security procedures inside the Cloud Platform?
    -   e) Is it well explained the base Images of the different Operating System supported?
    -   f) Is there a policy to update the base images?

3) Revise the document about the automatic deployment and try to respond to the following questions:

    - a) IsIt its clearly defined the mechanism to automatic deploy automatically the components?
    - b) This procedure/mechanism HAS TO BE EASY for the user (click and deploy). Is it the case?
    - c) Is there a recipe to deploy FIWARE Context Broker?

4) Revise the document about the procedure to update recipes and try to respond to the following questions:

    - a) Is there a definedprocedure to keep updated the FIWARE Generic Enablers (mandatory for FIWARE Context Broker
      and the rest of FIWARE Generic Enablers adopted)?
    - b) Are they following FIWARE Catalogue Roadmap to update the recipes?

5) From the documentation provided, there must be clear evidence to infer affirmative responses to all the questions
   under points 2, 3, and 4. If there is no clear evidence, then evaluators must call for an interview, so that the
   applicant can provide extra evidences to pass those points. Extra evidences could be provided by giving further
   verbal explanations and/or demoing against an application environment (for instance using Postman or similar tools).

6) Once there is clear evidence of 2, 3, and 4, evaluators will request a demo in order to see the automatic deployment
   at least of the FIWARE Context Broker and the rest of FIWARE Enablers from which it was mention the availability to
   automatic deployment in the corresponding platform. A set of testing queries to the deployed components will test
   that this deployment work properly.

7) Once there is clear evidence of points 5 and 6, evaluators must generate a short report summarizing the main
   evidences provided to pass points 2, 3, and 4 together with detailed description of the testing platform in point 6
   i.e. why, under their judgment, the platform is _"Powered by FIWARE"_.

8) If evaluators cannot find enough evidences for points 2, 3, and 4 or the testing activity of the point 6 is not
   properly executed the application must be rejected.
