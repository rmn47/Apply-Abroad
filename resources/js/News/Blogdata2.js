import React from "react";
import singlePost from "@/assets/images/single-post/blog-uk.jpg";
import author from "@/assets/images/single-post/author.png";
import cmnt1 from "@/assets/images/single-post/c1.png";
import cmnt2 from "@/assets/images/single-post/c2.png";
import cmnt3 from "@/assets/images/single-post/c3.png";

function Blog() {
    return (
        <>
            <div className="single-post-area">
                <p>
                    To determine whether you need a UK student visa, the
                    requirements and general immigration criteria are managed by
                    UK Visas and Immigration. All other international students
                    are likely to need a visa while the Swiss nationals and
                    those from the EU/EEA states do not currently need visa for
                    studying in UK.
                </p>
                <p>
                    The UK government has stated that there will be no change to
                    the rights and status of EU citizens until 2021 with the
                    result of UK’s referendum on the membership in the European
                    Union that has led to some uncertainty over the visa
                    regulations.
                </p>
                <p>
                    The following are the Australian visa application and case
                    management services:
                </p>
                <p className="fw-bold">Types of UK Student Visa</p>
                <p>
                    You may be eligible for the short term study visa if you are
                    studying a short course and are over 18 years old. For most
                    short courses, it is valid up to six months and can also be
                    extended to up to 11 months for the English language
                    courses.
                </p>
                <p>
                    You will have to ensure that you’re chosen institute holds a
                    Tier 4 Sponsor License if you are studying a longer course.
                    If you are aged 4-17 and want to study at an independent
                    school in the UK, you can apply for Tier 4 (Child) student
                    visa or a Tier 4 (General) student visa for those aged 16
                    and more.
                </p>
                <p className="fw-bold">UK student visa requirements</p>
                <ul>
                    <li type="disc">Passport details</li>
                    <li type="disc">Recent photos</li>
                    <li type="disc">
                        On a course that is offered by a licensed Tier 4
                        Sponsor, evidenced by a ‘Confirmation of Acceptance for
                        Studies (CAS) form from your course provider an
                        unconditional offer of a place.
                    </li>
                    <li type="disc">
                        Adequate proof of English language skills as
                        demonstrated by passing one of the secured English
                        language tests (SELT)
                    </li>
                    <li type="disc">
                        As the case requires, undertaking of the detailed
                        immigration law research and submission writing.
                    </li>
                    <li type="disc">
                        You also need to have a proof of financial support
                        throughout your stay in UK
                    </li>
                    <li type="disc">
                        You may also need an ATAS certificate if you are a non
                        EU/EEA/Swiss student studying a sensitive subject.
                    </li>
                </ul>
                <div className="post-thumb">
                    <img src={singlePost} alt="" />
                </div>
                <h4 className="article-title">
                    For master’s students at 27 universities streamlined visa
                    processes
                </h4>
                <p>
                    To study a master’s degree at one of the 27 eligible
                    universities, you can now apply for streamlined visa
                    processing. It is the part of the new Tier 4 Pilot scheme.
                    You can apply from inside or outside the UL as your course
                    will need to be 13 months. After the end of your course, the
                    pilot scheme allows you to stay longer and you will not need
                    to submit documents showing your academic results or proof
                    of funds are what it also mean. In case it is required, you
                    will still need to have these documents to hand and will
                    have to follow all other immigration guidelines.
                </p>
                <p className="fw-bold">Using your UK student visa</p>
                <p>
                    A UK Border Agency officer will place a stamp on your
                    passport that states the duration of your stay in the UK
                    when you are entering here. For example, you can stay for a
                    full duration of the course along with an additional four
                    months if your course is 12 months. Beyond this period, you
                    cannot extend your stay. You should make sure you are fully
                    immunised by remembering to pack your immunisation record in
                    your hand luggage in case you are asked to show the Border
                    Agency officer at your UK port of entry before your arrive.
                    You need to carry your proof of financier, proof of
                    accommodation, and the documents related to your studies.
                    You may also be required to register with the police within
                    seven days of your arrival in UK depending on where you are
                    from.
                </p>
                <p className="fw-bold">Working while you study</p>
                <p>
                    Students of EU, EEA, and Swiss can work while studying in
                    UK. During the term time, students of publicly funded higher
                    education institutions on Tier 4 student visas can work for
                    up to 20 hours per week and also full-time during the
                    Christmas and Easter breaks.
                </p>
            </div>
        </>
    );
}

export default Blog;
