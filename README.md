# NISTonomicon

![As for writing the NIST 800-53 Controls—I wish I had the energy and ingenuity to do it! I fear it would be quite a job in view of the very diverse passages and intimations which I have in the course of time attributed to it! - More or less H.P. Lovecraft](http://i.imgur.com/BGA3AUK.png?1)

[![Build Status](https://travis-ci.org/hortinstein/NISTonomicon.svg)](https://travis-ci.org/hortinstein/NISTonomicon)

A [NIST 800-53](https://web.nvd.nist.gov/view/800-53/home) Security Control Assessment Test Suite

In the United States, all Federal Government information systems are regulated by the [Federal Information Security Management Act](http://en.wikipedia.org/wiki/Federal_Information_Security_Management_Act_of_2002) (FISMA). This law empowers the [National Institute for Standards and Technology](http://www.nist.gov/) (NIST) to issue guidance on what security controls should exist on information systems.

Federal agencies require systems to receive an Authority to Operate (ATO) before putting a system into production. An ATO is the final step in NIST's [risk management framework](http://csrc.nist.gov/groups/SMA/fisma/framework.html). An ATO represents the agency's acceptance of the risk presented in operating the system, after all due diligence has been completed and reasonable controls put in place. It usually takes the form of a signed letter from a high-level agency executive, who serves as the Authorizing Official (AO).

[NIST Special Publication (SP) 800-53 Revision 4](http://csrc.nist.gov/groups/SMA/fisma/controls.html) lists various control baselines - groupings of both technical and organizational security controls. These control baselines change depending on how the system has been [categorized](http://csrc.nist.gov/groups/SMA/fisma/categorization.html). Implementing, documenting, and assessing these controls on a system of even moderate complexity can be incredibly time consuming and prone to error.

This test suite is a way to structure and automate the assessment of these [NIST 800-53](https://web.nvd.nist.gov/view/800-53/home) security controls.  


### TODO
- Standard logging for all tests
- ~~Handle multiple inherited security controls~~  added 12/23/2015
- plot inheritance graph
- search other 
- create gui for scaffolding a inheritable test suite
- create gui for 
- Output reports 
    - Security Controls Traceability Matrix 
    - Dated reports
