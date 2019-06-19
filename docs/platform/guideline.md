## Guideline for applicants

_"Powered by FIWARE"_ Platform providers offer an enhanced Cloud environment based on technology such as OpenStack,
Kubernetes, OpenShift, Azure, GCP or AWS etc, or indeed any other technology with a rich set of open standard APIs and
services to automatically deploy _"Powered by FIWARE"_ solutions and FIWARE Generic Enablers. In addition, any _"Powered
by FIWARE"_ platform, would be eligible to join the FIWARE Lab federation to share resources. For more details visit the
[Guidelines to join FIWARE Lab](https://join-fiware-lab-guide.readthedocs.io/en/latest).

You can define _"Powered by FIWARE"_ Platforms as a FIWARE-based _Software as a Service_ on private and public clouds,
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

In order to proceed with the validation of a Powered by FIWARE Solution validators must follow these steps:

1. Check all the information provided by applicants. At least there must be three documents:

    - a) Detailed description of the chosen **Cloud solution** and the corresponding URL to access to it.
    - b) Detailed description of the solution chosen for **automatic deployment** of deployable FIWARE Generic Enablers.
      This can be based on any PaaS or CD solution associated to the chosen Cloud Platform. Bear in mind that automatic
      deployment of the FIWARE Context Broker is a mandatory requirement.
    - c) Detailed procedures to **update the recipes** for deploying FIWARE Generic Enablers.

2. Review the document about the chosen Cloud solution and try to respond to the following questions:

    - a) Is there a clear evidence of the technical capacity to administer the corresponding cloud solution?
    - b) In case of a public platform, is the Cloud Platform open for access?
    - c) Is the response time of the Platform reasonable values (e.g. below 0,5 seconds)?
    - d) Are the Security procedures defined and well explained?
    - e) Where multiple Operating Systems are available, is there a good explanation about which Operating System base
      Images are supported?
    - f) Is there a policy for updating base images?

3. Review the document procedures for automatic deployment and answer the following questions:

    - a) Is the automatic deployment procedure for FIWARE components clearly defined?
    - b) Is this procedure simple (e.g. click and deploy)? Simple deployment is mandatory for any _"Powered by FIWARE"_
      platform.
    - c) Is there a recipe for deployment the FIWARE Context Broker itself?

4. Review the document about the procedure to update recipes and answer the following questions:

    - a) Is there a defined a procedure to keep the FIWARE Generic Enablers updated? This is mandatory for FIWARE
      Context Broker and other chosen FIWARE Generic Enablers.
    - b) Is the Platform capable of following FIWARE Catalogue
      [Roadmap](https://github.com/FIWARE/catalogue/blob/master/roadmap.md) to update the recipes?

5. From the documentation provided, there must be clear evidence to be able to positively answer all the questions under
   points 2, 3, and 4. If there is insufficient evidence, then evaluators must call for an interview, so that the
   applicant can provide additional evidence to pass those points. Extra evidence could be provided by giving further
   verbal explanations and/or demoing against an application environment (for instance using Postman or similar tools).

6. Once there is clear evidence of points 2, 3, and 4, evaluators will need to request a full demonstration in order to
   see automatic deployment at least of the FIWARE Context Broker and some of the other FIWARE Enablers supported by
   platform. A set of tests to the deployed components will test that the deployment was successful. (e.g. heartbeat
   endpoints, device communications)

7. Once there is clear evidence of points 5 and 6, evaluators must generate a short report summarizing the main evidence
   provided to pass points 2, 3, and 4 together with detailed description of the testing platform in point 6 i.e. why,
   in their judgment, the platform is a _"Powered by FIWARE"_ platform.

8. If evaluators cannot find enough evidence for point 2, 3, and 4 or the testing activity of the point 6 is executed
   unsuccessfully, the application must be rejected.
