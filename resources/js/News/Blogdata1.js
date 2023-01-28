import React from "react";
import singlePost from "@/assets/images/single-post/visa-blogs.jpg";
import author from "@/assets/images/single-post/author.png";
import cmnt1 from "@/assets/images/single-post/c1.png";
import cmnt2 from "@/assets/images/single-post/c2.png";
import cmnt3 from "@/assets/images/single-post/c3.png";

function Blog() {
    return (
        <>
            <div className="single-post-area">
                <p>
                    A PR consultancy provider commit the clients to provide
                    migration support services with consistent, personalised
                    case management. A qualified immigration practitioner is
                    responsible for every aspect of the client. The consultancy
                    provide complete Australian immigration services that are
                    flexible and tailored to meet the individual needs and often
                    offer real value by consistently achieving success.
                </p>
                <p>
                    The following are the Australian visa application and case
                    management services:
                </p>
                <ul>
                    <li type="disc">
                        Through advice over the merits and the eligibility of
                        each case before to any commencement along with the
                        preliminary assessments of visa options.
                    </li>
                    <li type="disc">
                        Provision of the ongoing ad hoc expert advice over the
                        immigration deals during the application process.
                    </li>
                    <li type="disc">
                        Review, preparation of every immigration application
                        forms on behalf of the sponsoring company as well as the
                        visa applicant, and the compilation of the relevant
                        supporting documentation.
                    </li>
                    <li type="disc">
                        As appropriate, arranging the legalisation and
                        translations.
                    </li>
                    <li type="disc">
                        As the case requires, undertaking of the detailed
                        immigration law research and submission writing.
                    </li>
                    <li type="disc">
                        Ensuring compliance with the immigration requirements
                        prior to lodging a decision ready application to DIBP
                        with thorough review of all forms and supporting
                        documents
                    </li>
                    <li type="disc">
                        Status update reports to relevant stakeholders and
                        ongoing monitoring. Compliance alerts and delivery of
                        timely visa decision notifications
                    </li>
                </ul>
                <div className="post-thumb">
                    <img src={singlePost} alt="" />
                </div>
                <h4 className="article-title">
                    Australian Employment and Business Visa Overview:
                </h4>
                <p>
                    For the purpose of attending to business matters or
                    employment, Australia offers a range of temporary and
                    permanent skilled visas. All the employees are provided with
                    basic rights and protection in the workplace with the help
                    of workplace laws. We encourage you to contact us for the
                    most updated information on the basis of the processing
                    times, legislative requirements, documentary evidence and
                    others.
                </p>
            </div>
        </>
    );
}

export default Blog;
