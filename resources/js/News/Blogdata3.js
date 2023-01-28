import React from "react";
import singlePost from "@/assets/images/single-post/blog-nz.jpg";
import author from "@/assets/images/single-post/author.png";
import cmnt1 from "@/assets/images/single-post/c1.png";
import cmnt2 from "@/assets/images/single-post/c2.png";
import cmnt3 from "@/assets/images/single-post/c3.png";

function Blog() {
    return (
        <>
            <div className="single-post-area">
                <p>
                    To study in New Zealand, this information will help you
                    decide which class of student visa you need.
                </p>
                <p>
                    You need to plan your study, work out how you will support
                    yourself in NZ and check which documents you need to provide
                    with your application before you start with it.
                </p>

                <p className="fw-bold">Planning before you apply</p>
                <ul>
                    <li type="disc">
                        You will have to be accepted for a course at a reputed
                        education institute approved by the Ministry of
                        Education or the New Zealand Qualifications Authority or
                        NZQA.
                    </li>
                    <li type="disc">
                        You have to qualify for a proof that you have a
                        scholarship that pays your fees or money for your
                        tuition fees.
                    </li>
                    <li type="disc">
                        You will have to have the proof for enough money to live
                        while you are on students visa in New Zealand.
                    </li>
                    <li type="disc">
                        You also need to have an evidence that you have enough
                        money to buy one or a ticket out of NZ.
                    </li>
                </ul>
                <div className="post-thumb">
                    <img src={singlePost} alt="" />
                </div>
                <h4 className="article-title">Domestic students</h4>
                <p>
                    Your fees are usually less if you qualify as a domestic
                    student but you will still need to have a student visa.
                </p>
                <p className="fw-bold">Study Fees</p>
                <p>
                    As international students most people who come to NZ to
                    study pays their full fees.
                </p>
                <p className="fw-bold">Criteria for domestic student</p>
                <ul>
                    <li type="disc">
                        Under a government-approved exchange program studying at
                        a primary or secondary school.
                    </li>
                    <li type="disc">
                        As your parent or legal guardian is here on a student or
                        work visa studying at primary or secondary school in NZ.
                    </li>
                    <li type="disc">Studying for a PhD.</li>
                </ul>
                <p className="fw-bold">Paying for your living expenses</p>
                <p>
                    You need to show you have one of the following in order to
                    support yourself while you study in NZ:
                </p>
                <ul>
                    <li type="disc">
                        For your first year of study you need NZD$15,000
                    </li>
                    <li type="disc">
                        If your program of study is less than 36 months you need
                        NZD$1250 for each month.
                    </li>
                    <li type="disc">
                        Such as that of New Zealand Aid Program scholarship you
                        need to have one.
                    </li>
                    <li type="disc">
                        While you are in NZ a sponsor or family member who has
                        agreed to accept financial responsibility.
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Blog;
