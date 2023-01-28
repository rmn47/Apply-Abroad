import React, { useState, useEffect } from "react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import Select, { AriaOnFocus } from "react-select";
import { isEmpty } from "lodash";

export default function Dashboard(props) {
    const user = props.user;
    const score = props.score;
    // const userprogram = props.userprogram;
    // console.log(props.userprogram);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="row">
                        <div className="col-md-1">
                            <svg
                                viewBox="0 0 96 96"
                                className="h-28 w-28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_10768_11551)">
                                    <path
                                        d="M53.2854 88.7553C75.8446 91.6098 85.6854 76.454 87.0563 56.6155C88.1584 40.6647 78.3079 22.7258 61.7544 14.0571C41.262 3.32576 17.6381 17.249 9.91752 35.0173C0.990145 55.563 27.321 85.4699 53.2854 88.7553Z"
                                        fill="#DFECFF"
                                    />
                                    <path
                                        d="M7.87292 25.5645C7.87292 24.065 9.34811 23.0107 10.7668 23.4962L33.4636 31.2636V82.2176L9.35116 73.9657C8.46698 73.6631 7.87292 72.832 7.87292 71.8974V25.5645Z"
                                        fill="#FBDDB1"
                                    />
                                    <path
                                        d="M63.7935 20.6094L87.906 28.8612C88.7901 29.1638 89.3842 29.995 89.3842 30.9295V77.2881C89.3842 78.7802 87.9224 79.8338 86.5069 79.362L63.7935 71.7908V20.6094Z"
                                        fill="#FBDDB1"
                                    />
                                    <path
                                        d="M63.7935 20.6094L33.4637 31.4017V82.2167L63.7935 71.7908V20.6094Z"
                                        fill="#F7C14E"
                                    />
                                    <path
                                        d="M63.3195 36.7221L49.1024 42.4089L59.5283 21.5572L63.7934 20.6094L63.3195 36.7221Z"
                                        fill="#D88E00"
                                    />
                                    <path
                                        d="M8.3468 38.6181L14.8373 50.7336C15.2178 51.444 15.9583 51.8873 16.7642 51.8873H25.5604C26.3449 51.8873 27.0692 51.467 27.4584 50.7859L29.653 46.9454C30.2041 45.9808 31.391 45.5831 32.4121 46.0207L33.3032 46.4026C33.716 46.5795 34.0644 46.8793 34.3008 47.2612L38.7408 54.4336C39.4516 55.5817 41.0229 55.8173 42.0391 54.9281L42.7018 54.3482C43.4109 53.7278 44.4376 53.6315 45.2497 54.1092L50.3545 57.112C51.2734 57.6526 52.4483 57.4514 53.135 56.6359L57.3018 51.6878C58.3358 50.4599 60.2965 50.7281 60.9628 52.1887L62.9376 56.5176C63.6697 58.1226 65.9034 58.244 66.8053 56.7279L71.2075 49.3268C71.3191 49.1393 71.4019 48.9361 71.4533 48.724L72.8665 42.8908C73.1041 41.9101 73.982 41.2195 74.9911 41.2195H78.6886C79.1707 41.2195 79.6393 41.0601 80.0215 40.7662L84.1855 37.5631C85.0055 36.9323 86.1555 36.9627 86.941 37.636L88.9102 39.3239"
                                        stroke="white"
                                        strokeWidth="2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M63.7934 56.0091C63.7291 55.9315 63.6738 55.8425 63.6303 55.7424L61.9361 51.8424C60.9663 49.6101 57.9881 49.1751 56.4204 51.0368L52.299 55.931C51.9556 56.3387 51.3682 56.4393 50.9087 56.169L45.8039 53.1662C44.5858 52.4497 43.0456 52.5942 41.9821 53.5248L41.3193 54.1047C40.8112 54.5493 40.0256 54.4315 39.6702 53.8574L35.2302 46.685C34.8755 46.1122 34.3531 45.6624 33.7338 45.397L33.4636 45.2812V47.9846L37.8115 55.0081C38.8776 56.7302 41.2346 57.0836 42.7589 55.7498L43.4216 55.17C43.7761 54.8597 44.2895 54.8116 44.6955 55.0504L49.8004 58.0532C51.1788 58.8641 52.941 58.5623 53.9711 57.3391L58.0925 52.4449C58.6151 51.8243 59.6078 51.9693 59.9311 52.7135L61.6253 56.6134C62.0579 57.6091 62.879 58.2391 63.7934 58.4778V56.0091Z"
                                        fill="#FBDDB1"
                                    />
                                    <path
                                        d="M63.7935 21.5566V71.3164"
                                        stroke="#D88E00"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M36.781 69.8958L52.4198 64.209"
                                        stroke="#D88E00"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M36.781 75.5815L49.1025 71.3164"
                                        stroke="#D88E00"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M25.8812 51.8867L28.8268 60.0438C29.2298 61.1599 28.669 62.3936 27.5631 62.8237L22.3536 64.8496C21.9579 65.0035 21.5259 65.0388 21.1105 64.9513L15.1146 63.6879C13.9772 63.4482 12.8511 64.1405 12.5516 65.2637L11.365 69.7137C11.2512 70.1405 11.0107 70.5228 10.6754 70.8102L7.87292 73.2123"
                                        stroke="white"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M87.9624 79.8473L63.7934 71.791L33.9375 82.2169L8.3468 73.6866"
                                        stroke="#D88E00"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M23.4458 43.0828C23.5262 42.7995 23.9242 42.7896 24.0185 43.0686L25.4135 47.1924C25.4783 47.3839 25.3389 47.5834 25.1368 47.5884L22.5529 47.6524C22.3507 47.6575 22.2016 47.4651 22.2568 47.2706L23.4458 43.0828Z"
                                        fill="#F7C14E"
                                    />
                                    <path
                                        d="M18.2429 55.2234C18.3233 54.9401 18.7213 54.9302 18.8157 55.2092L20.2106 59.333C20.2754 59.5245 20.136 59.724 19.9339 59.729L17.35 59.7931C17.1478 59.7981 16.9987 59.6057 17.0539 59.4112L18.2429 55.2234Z"
                                        fill="#F7C14E"
                                    />
                                    <path
                                        d="M79.8099 52.6219C79.8903 52.3385 80.2883 52.3287 80.3827 52.6077L81.7776 56.7314C81.8424 56.923 81.703 57.1224 81.5009 57.1275L78.917 57.1915C78.7148 57.1965 78.5657 57.0042 78.621 56.8097L79.8099 52.6219Z"
                                        fill="#F7C14E"
                                    />
                                    <path
                                        d="M74.607 30.0769C74.6875 29.7936 75.0854 29.7837 75.1798 30.0627L76.5748 34.1865C76.6396 34.378 76.5002 34.5775 76.298 34.5825L73.7141 34.6466C73.512 34.6516 73.3629 34.4593 73.4181 34.2647L74.607 30.0769Z"
                                        fill="#F7C14E"
                                    />
                                    <path
                                        d="M12.2086 29.9668L25.004 33.758"
                                        stroke="#D88E00"
                                        strokeWidth="2"
                                    />
                                    <ellipse
                                        cx="47.6"
                                        cy="18.9411"
                                        rx="15.6"
                                        ry="15.7419"
                                        fill="#F35C6C"
                                    />
                                    <path
                                        d="M46.7595 46.0985C33.177 29.5183 32.7885 24.1424 32.4 22.5742H62.8C61.6412 28.811 60.1093 32.0363 49.1979 46.0643C48.584 46.8536 47.3931 46.872 46.7595 46.0985Z"
                                        fill="#F35C6C"
                                    />
                                    <ellipse
                                        cx="47.6"
                                        cy="18.1326"
                                        rx="8.4"
                                        ry="8.47639"
                                        fill="white"
                                    />
                                    <path
                                        d="M48.4 45.9842C52.4 41.2751 61.12 30.5652 62.4 23.7841C64 15.3077 61.2 5.62041 49.2 4.00586"
                                        stroke="#BE0E31"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10768_11551">
                                        <rect
                                            fill="white"
                                            className="h-96 w-96"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="col-md-7">
                            <h1 className="inline-block text-4xl italic hover:not-italic mt-5 pl-4">
                                {" "}
                                <b> Your Progress</b>
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white overflow-hidden shadow-none sm:rounded-lg">
                            <button
                                className="
                                    accordion-button
                                    collapsed
                                    relative
                                    flex
                                    items-center
                                    w-full
                                    mt-4
                                    text-base 
                                    text-gray-500 
                                    text-left
                                    bg-white
                                    font-semibold
                                    border-0
                                    rounded-none
                                    transition
                                    focus:outline-none
                                "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                Before Applying
                            </button>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show mt-1 space-x-4 row"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="col-md-12 col-sm-6">
                                    <Link
                                        type="button"
                                        href={route("student")}
                                        className="btn btn-outline-primary px-5 py-3 btn-lg ml-1 mt-4 md:ml-32"
                                    >
                                        {!isEmpty(score.english_exam_type) ? (
                                            <img
                                                src="logo\check.png"
                                                className="w-6 h-6 inline-block"
                                                alt="check"
                                            />
                                        ) : (
                                            ""
                                        )}
                                        <b> Check Eligibility</b>
                                    </Link>
                                    <Link
                                        type="button"
                                        href={route("quick_search")}
                                        className="btn btn-outline-primary px-5 py-3 btn-lg ml-1 mt-4 md:ml-6"
                                    >
                                        {!isEmpty(props.userprogram) ? (
                                            <img
                                                src="logo\check.png"
                                                className="w-6 h-6 inline-block"
                                                alt="check"
                                            />
                                        ) : (
                                            ""
                                        )}
                                        <b> Choose a Program</b>
                                    </Link>
                                    <Link
                                        type="button"
                                        href={route("profile")}
                                        className="btn btn-outline-primary px-5 py-3 btn-lg ml-1 mt-4 md:ml-6"
                                    >
                                        {!isEmpty(score.english_exam_type) ? (
                                            <img
                                                src="logo\check.png"
                                                className="w-6 h-6 inline-block"
                                                alt="check"
                                            />
                                        ) : (
                                            ""
                                        )}
                                        <b> Complete Profile</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-none sm:rounded-lg">
                            <button
                                className="
                                    accordion-button
                                    collapsed
                                    relative
                                    flex
                                    items-center
                                    w-full
                                    mt-4
                                    text-base 
                                    text-gray-500 
                                    text-left
                                    bg-white
                                    border-0
                                    rounded-none
                                    font-semibold
                                    transition
                                    focus:outline-none
                                "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Applying
                            </button>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse show shadow-lg"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="bg-white mt-2 overflow-hidden sm:rounded-lg shadow-lg">
                                    <div className="pt-3 px-3 ml-2 bg-white border-b text-2xl font-semibold border-gray-200">
                                        Pay Application Fee
                                    </div>
                                    <p className="md:pl-10 py-3 text-gray-500 text-sm font-serif hover:font-sansshadow-lg">
                                        Please pay for the applications you want
                                        to proceed with. After payment, you’ll
                                        be able to fulfil the requirement and
                                        submit your applications.
                                    </p>
                                    {props.userprogram
                                        ? props.userprogram.map(
                                              (userprogram) => {
                                                  if (
                                                      userprogram.amount_paid ==
                                                      null
                                                  ) {
                                                      return (
                                                          <div className="row mb-5">
                                                              <div className="col-md-1 col-sm-2">
                                                                  <div className="text-center ml-3 mt-41">
                                                                      <Link
                                                                          href={route(
                                                                              "detail",
                                                                              userprogram
                                                                                  .program
                                                                                  .school
                                                                                  .id
                                                                          )}
                                                                      >
                                                                          <img
                                                                              src={
                                                                                  userprogram
                                                                                      .program
                                                                                      .school
                                                                                      .logo
                                                                              }
                                                                              className="inline-block w-16"
                                                                          />
                                                                      </Link>
                                                                  </div>
                                                              </div>
                                                              <div className="col-md-6 col-sm-12 ml-4">
                                                                  <Link
                                                                      href={route(
                                                                          "program",
                                                                          userprogram
                                                                              .program
                                                                              .id
                                                                      )}
                                                                  >
                                                                      <h3 className="fs-4">
                                                                          {
                                                                              userprogram
                                                                                  .program
                                                                                  .name
                                                                          }
                                                                      </h3>
                                                                  </Link>
                                                                  <h6 className="fs-6 mt-2">
                                                                      {
                                                                          userprogram
                                                                              .program
                                                                              .school
                                                                              .name
                                                                      }{" "}
                                                                      {
                                                                          userprogram
                                                                              .program
                                                                              .school
                                                                              .location
                                                                      }
                                                                      -
                                                                      {
                                                                          userprogram
                                                                              .program
                                                                              .school
                                                                              .country
                                                                              .name
                                                                      }
                                                                  </h6>
                                                              </div>
                                                              <div className="col-md-2 col-sm-6">
                                                                  <div
                                                                      className="btn-group"
                                                                      role="group"
                                                                      aria-label="Basic outlined example"
                                                                  >
                                                                      <button
                                                                          type="button"
                                                                          className="btn btn-primary btn-outline-primary bg-primary text-white ml-1 mt-3"
                                                                      >
                                                                          Pay
                                                                          For
                                                                          Enrollment
                                                                      </button>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      );
                                                  }
                                              }
                                          )
                                        : "No data were found"}
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary text-left py-3 mb-3 ml-1 w-11/12 btn-lg"
                                        disabled
                                    >
                                        <b>Prepare Applications</b>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary text-left py-3 mb-3 ml-1 w-11/12 btn-lg"
                                        disabled
                                    >
                                        <b>Get Result</b>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary text-left py-3 mb-3 ml-1 w-11/12 btn-lg"
                                        disabled
                                    >
                                        <b>Finalize Visa & Admission</b>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary text-left py-3 mb-3 ml-1 w-11/12 btn-lg"
                                        disabled
                                    >
                                        <b>Ready to Enroll</b>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary text-left py-3 mb-3 ml-1 w-11/12 btn-lg"
                                        disabled
                                    >
                                        <b>Enrollment Confirmed</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h1 className="inline-block text-5xl italic hover:not-italic mt-5 pl-4">
                            <b>Your Advisor</b>
                        </h1>
                    </div>
                    <div className="bg-white mt-4 overflow-hidden shadow-lg sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 shadow ">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <ApplicationLogo className="h-14 md:mt-1 md:ml-2 w-auto text-gray-500" />
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="pt-2 bg-white text-2xl text-left font-semibold border-gray-200">
                                        <b>File Abroad</b>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-12">
                                    <div className="pt-3 bg-white text-1xl text-gray-500 text-left border-gray-200">
                                        FileAbroad@gmail.com
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="pt-2 pl-16 md:ml-8 bg-white text-1xl text-left border-gray-200">
                                        FAQ
                                    </div>
                                    <div className="pt-2 pl-16 md:ml-8 bg-white text-1xl text-left border-gray-200">
                                        Blog
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
