# About the FIWARE Showcase

[![Documentation](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/documentation.svg)](https://fiware-marketplace.readthedocs.io)
[![Support badge](https://nexus.lab.fiware.org/repository/raw/public/badges/stackoverflow/fiware.svg)](https://stackoverflow.com/questions/tagged/fiware)

<div id="social-meta">
<meta property="og:title" content="Guidelines for the process of validating entries in the FIWARE Showcase">
<meta property="og:description" content="This documentation describes the process to apply and validate an IoT Device as FIWARE Ready.">
<meta property="og:type" content="documentation">
<meta property="og:url" content="https://fiware-marketplace.readthedocs.io/">
<meta property="og:image" content="https://www.fiware.org/wp-content/uploads/FF_Marketplace_GenericBanner.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@FIWARE">
<meta name="twitter:title" content="About
The process for commercial software to apply as powered by FIWARE or FIWARE-Ready">
<meta name="twitter:description" content="This documentation describes the process to apply and validate an IoT Device as FIWARE Ready.">
<meta name="twitter:image" content="https://www.fiware.org/wp-content/uploads/FF_Marketplace_GenericBanner.png">
</div>

The [FIWARE Showcase](https://www.fiware.org/showcase/) serves the purpose of globally disseminating existing
commercial offerings around FIWARE. It is a global one-stop shop that gives visibility to a wide range of Powered by
FIWARE solutions/platforms, FIWARE-ready solutions and IoT devices as well as FIWARE related training/coaching or
consultancy, integration and support services. Entries in the FIWARE Showcase have been validated by the FIWARE
Foundation or FIWARE iHubs which meet the requirements for performing validation of FIWARE Showcase entries.

#### Powered by FIWARE

The architecture of any _"powered by FIWARE"_ solution/platform gravitates around the management of context data through
a Context Broker component, using FIWARE NGSI as the core integration API. Smart solutions/platforms _"powered by
FIWARE"_ can easily integrate _"FIWARE-ready"_ solutions following a “system of systems” approach as well as
_"FIWARE-ready"_ IoT devices and leverage the other open-source components found in the
[FIWARE Catalogue](https://github.com/fiware/catalogue) for rapid development.

#### FIWARE Ready

Solutions or devices which implement a FIWARE NSGI interface but whose architecture is not _“powered by FIWARE”_ are
able to provide and consume context information, and are referred to as _“FIWARE-ready”_. The ability for a Solution or
an IoT device to be _"FIWARE-ready"_ can be supplied via the use of intermediate services such as an IoT Agent which can
be used to translate proprietary message formats and transport protocols to NGSI. FIWARE brings open source libraries
for development of IoT Agents as well as a portfolio of common IoT Agents which can be used to translate from most
popular IoT protocols to NGSI and vice-versa.

In summary, the ability for an IoT device to be _"FIWARE-Ready"_ can be supplied either **directly** - with software on
the device or **indirectly** - via the use of intermediate services such as an IoT Agent which can be used to translate
proprietary message formats and transport protocols to NGSI.

#### Showcase Categories

Currently entries within the FIWARE Showcase are classified into six separate categories. The criteria for a given offering
to be registered under each categories varies accordingly - check the details in the subsections below.

-   [_"Powered by FIWARE"_ Solution](solution/apply.md) - a full end-to-end solution whose architecture gravitates
    around management of context data through a context broker using FIWARE NGSI as core integration API. They may
    gather context data from quite heterogeneous sources and perform processing and visualization of context data to
    bring support to the smart automation of certain process and/or the adoption of smart decisions by end users.

-   [_"Powered by FIWARE"_ Platform](platform/apply.md) - A software platform integrating a set of FIWARE components,
    and potentially other platform components, that brings support to the development and runtime execution of “Powered
    by FIWARE” solutions. A FIWARE-compliant Context Broker is the core component of any _“Powered by FIWARE”_ platform
    and FIWARE NGSI its core integration API. They can be provided from public/private clouds or at the premises of the
    platform users.

-  _"Cities4Cities"_ Platform/Solution - Public institutions who have
    created their own off-the-shelf Smart City platform which has been assessed as _"Powered by FIWARE"_ shall be placed into the Cities4Cities category if the applicate offers their software to other
    cities and territories ready for reuse. The assesment process is the
    same as above.

-   [_"FIWARE-Ready"_ IoT Device](device/apply.md) - a concrete IoT device which is able to send and respond to messages
    using FIWARE NGSI, either natively or indirectly via the use of an IoT Agent which can translate the native IoT
    message format and transport protocol, proprietary or not, supported by the device.

-   [_"FIWARE-Ready"_ Enabler](enabler/apply.md) - A software system whose architecture is not _“Powered by FIWARE”_
    but is able to exchange messages with a _“Powered by FIWARE”_ solution/platform using FIWARE NGSI. They may be full
    end-to-end solutions which can be integrated as part of a larger _“Powered by FIWARE”_ solution following a “system
    of systems” approach. They may also be base software platform components or enablers which can be integrated as part
    of a _“Powered by FIWARE”_ platform to extend its capabilities. _“FIWARE-ready”_ solutions don’t need to be open
    source.

-   [FIWARE Consulting, Integration and Technical Support Services](consulting/apply.md) - Technical support services
    for deploying and maintaining FIWARE solutions in the field offered by a given company or consortium of companies.

-   [FIWARE Training and Coaching Service](training/apply.md) - Training and coaching services on how to use FIWARE
    offered by a given company or consortium of companies.

This document includes advice for applicants as well as procedures to be used by validators. A full understanding of how
the validation process works can help smooth the process to get your offering to be validated correctly.
