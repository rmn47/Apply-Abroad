import React, { useState, useEffect } from "react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import Select, { AriaOnFocus } from "react-select";
import { Checkbox } from "@mui/material";

export default function Search(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [intake, setIntake] = useState(
        JSON.parse(JSON.stringify(props.intakes))
    );
    const [country, setCountry] = useState(
        JSON.parse(JSON.stringify(props.country))
    );
    const [studycountry, setStudyCountry] = useState(
        JSON.parse(JSON.stringify(props.studycountry))
    );
    const [state, setState] = useState(JSON.parse(JSON.stringify(props.state)));
    const [visa, setVisa] = useState(
        JSON.parse(JSON.stringify(props.background))
    );
    const [uservisa, setUserVisa] = useState(
        JSON.parse(JSON.stringify(props.userbackground))
    );
    const [nationality, setNationality] = useState(
        JSON.parse(JSON.stringify(props.nationality))
    );
    const [eduCountry, seteduCountry] = useState(
        JSON.parse(JSON.stringify(props.educationCountry))
    );
    const [eduLevel, seteduLevel] = useState(
        JSON.parse(JSON.stringify(props.educationLevel))
    );
    const [userstate, setstate] = useState(
        JSON.parse(JSON.stringify(props.userstate))
    );
    const [category, setCategory] = useState(
        JSON.parse(JSON.stringify(props.category))
    );
    const [subCategory, setSubCategory] = useState(
        JSON.parse(JSON.stringify(props.Subcategory))
    );
    const [substudy, setSubstudy] = useState(
        JSON.parse(JSON.stringify(props.SubStudy))
    );
    const [levels, setLevels] = useState(
        JSON.parse(JSON.stringify(props.Program_level))
    );
    const [gradeScheme, setGrdeScheme] = useState(
        JSON.parse(JSON.stringify(props.gradingScheme))
    );
    const [gradeAverage, setGrdeaverage] = useState(
        JSON.parse(JSON.stringify(props.gradingAverage))
    );
    const [engExamtype, setengExamtype] = useState(
        JSON.parse(JSON.stringify(props.englishExamtype))
    );
    const [userengExamtype, setuserengExamtype] = useState(
        JSON.parse(JSON.stringify(props.userenglishExamtype))
    );
    const [isLoading, setIsLoading] = useState(false);

    // console.log(substudy);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const fetchSubCategory = ({ value }) => {
        setIsLoading(true);
        axios
            .get(
                route("get-sub-categories", {
                    id: value,
                })
            )
            .then(function (result) {
                setSubCategory(JSON.parse(JSON.stringify(result.data)));
                setIsLoading(false);
            });
    };

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="container p-6 bg-white border-b border-gray-200">
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div
                                        className="accordion"
                                        id="accordionExample"
                                    >
                                        <div className="accordion-item bg-white border border-gray-200">
                                            <h2
                                                className="accordion-header mb-0"
                                                id="headingOne"
                                            >
                                                <button
                                                    className="
                                            accordion-button
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-3
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Eligibility
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body py-4 px-5">
                                                    <div className="form-group">
                                                        <label>
                                                            Do you have a valid
                                                            Study Permit / Visa?
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            isClearable
                                                            isSearchable
                                                            defaultValue={
                                                                uservisa
                                                            }
                                                            options={visa}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Nationality
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            isClearable
                                                            isSearchable
                                                            defaultValue={
                                                                nationality
                                                            }
                                                            options={country}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Province of
                                                            Residency
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            isClearable
                                                            isSearchable
                                                            defaultValue={
                                                                userstate
                                                            }
                                                            options={userstate}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Education Country
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            isClearable
                                                            isSearchable
                                                            defaultValue={
                                                                eduCountry
                                                            }
                                                            options={country}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Education Level
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            isClearable
                                                            isSearchable
                                                            defaultValue={
                                                                eduLevel
                                                            }
                                                            options={substudy}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Grading Scheme
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            isClearable
                                                            isSearchable
                                                            defaultValue={
                                                                gradeScheme
                                                            }
                                                            options={
                                                                gradeScheme
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Grading Average
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            // className="col-12"
                                                            isClearable
                                                            isSearchable
                                                            defaultValue={
                                                                gradeAverage
                                                            }
                                                            options={
                                                                gradeAverage
                                                            }
                                                            //options={gradeAverage}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            English Exam Type
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            isClearable
                                                            isSearchable
                                                            options={
                                                                engExamtype
                                                            }
                                                            defaultValue={
                                                                userengExamtype
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group inline-block form-check mb-6 mt-3">
                                                        <Checkbox
                                                            defaultChecked
                                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-0 cursor-pointer"
                                                            id="exampleCheck1"
                                                        />
                                                        <label
                                                            className="form-check-label  text-gray-800"
                                                            htmlFor="exampleCheck1"
                                                        >
                                                            Only Show Direct
                                                            Admissions
                                                        </label>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            className="inline-block px-4 py-2 bg-gray-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                            value="SAVE TO PROFILE"
                                                            type="submit"
                                                        />

                                                        <button
                                                            className="inline-block px-4 py-2 mt-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                        >
                                                            APPLY FILTERS
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item bg-white border border-gray-200">
                                            <h2
                                                className="accordion-header mb-0"
                                                id="headingTwo"
                                            >
                                                <button
                                                    className="
                                                accordion-button
                                                collapsed
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-3
                                                px-5
                                                text-base text-gray-800 text-left
                                                bg-white
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none
                                            "
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    School Filters
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <form>
                                                    <div className="accordion-body">
                                                        <div className="form-group">
                                                            <label>
                                                                Countries
                                                            </label>
                                                            <Select
                                                                aria-labelledby="aria-label"
                                                                inputId="aria-example-input"
                                                                name="programe-level"
                                                                isClearable
                                                                isSearchable
                                                                // onChange={country}
                                                                defaultValue={
                                                                    studycountry[0]
                                                                }
                                                                options={
                                                                    studycountry
                                                                }
                                                            />
                                                        </div>
                                                        <div className="form-group inline-block form-check mb-3 mt-3">
                                                            <Checkbox
                                                                defaultChecked
                                                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-0 cursor-pointer"
                                                                id="exampleCheck1"
                                                            />
                                                            <label
                                                                className="form-check-label  text-gray-800"
                                                                htmlFor="exampleCheck1"
                                                            >
                                                                Post-Graduation
                                                                Work Permit
                                                                Available
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>
                                                                Provinces /
                                                                States
                                                            </label>
                                                            <Select
                                                                aria-labelledby="aria-label"
                                                                inputId="aria-example-input"
                                                                name="intake"
                                                                isClearable
                                                                isSearchable
                                                                options={state}
                                                            />
                                                        </div>
                                                        <div className="flex mb-3 mt-3">
                                                            <div>
                                                                <label>
                                                                    School Types
                                                                </label>
                                                                <br></br>
                                                                <div className="form-group inline-block form-check mb-3 mt-3">
                                                                    <Checkbox
                                                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-0 cursor-pointer"
                                                                        id="exampleCheck1"
                                                                    />
                                                                    <label
                                                                        className="form-check-label  text-gray-800"
                                                                        htmlFor="exampleCheck1"
                                                                    >
                                                                        University
                                                                    </label>
                                                                </div>
                                                                <br></br>
                                                                <div className="form-group inline-block form-check mb-3 mt-3">
                                                                    <Checkbox
                                                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-0 cursor-pointer"
                                                                        id="exampleCheck2"
                                                                    />
                                                                    <label
                                                                        className="form-check-label  text-gray-800"
                                                                        htmlFor="exampleCheck1"
                                                                    >
                                                                        College
                                                                    </label>
                                                                </div>
                                                                <br></br>
                                                                <div className="form-group inline-block form-check mb-3 mt-3">
                                                                    <Checkbox
                                                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-0 cursor-pointer"
                                                                        id="exampleCheck3"
                                                                    />
                                                                    <label
                                                                        className="form-check-label  text-gray-800"
                                                                        htmlFor="exampleCheck1"
                                                                    >
                                                                        English
                                                                        Institute
                                                                    </label>
                                                                </div>
                                                                <br></br>
                                                                <div className="form-group inline-block form-check mb-3 mt-3">
                                                                    <Checkbox
                                                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-0 cursor-pointer"
                                                                        id="exampleCheck4"
                                                                    />
                                                                    <label
                                                                        className="form-check-label  text-gray-800"
                                                                        htmlFor="exampleCheck1"
                                                                    >
                                                                        High
                                                                        School
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>
                                                                Schools
                                                            </label>
                                                            <Select
                                                                aria-labelledby="aria-label"
                                                                inputId="aria-example-input"
                                                                name="category"
                                                                isClearable
                                                                isSearchable
                                                                options={
                                                                    category
                                                                }
                                                                onChange={
                                                                    fetchSubCategory
                                                                }
                                                            />
                                                        </div>
                                                        <div className="form-group mt-5">
                                                            <button
                                                                className="inline-block px-4 py-2 bg-gray-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                                                data-mdb-ripple="true"
                                                                data-mdb-ripple-color="light"
                                                            >
                                                                Clear Filter
                                                            </button>
                                                            <button
                                                                className="inline-block px-4 py-2 mt-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                                                data-mdb-ripple="true"
                                                                data-mdb-ripple-color="light"
                                                            >
                                                                APPLY FILTERS
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="accordion-item bg-white border border-gray-200">
                                            <h2
                                                className="accordion-header mb-0"
                                                id="headingThree"
                                            >
                                                <button
                                                    className="
                                                accordion-button
                                                collapsed
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-3
                                                px-5
                                                text-base text-gray-800 text-left
                                                bg-white
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none
                                            "
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Program Filters
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body py-4 px-5">
                                                    <div className="form-group">
                                                        <label>
                                                            Program Levels
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            name="programe-level"
                                                            isClearable
                                                            isSearchable
                                                            options={levels}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Intake</label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            name="intake"
                                                            isClearable
                                                            isSearchable
                                                            options={intake}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Post-Secondary
                                                            Discipline
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            name="category"
                                                            isClearable
                                                            isSearchable
                                                            options={category}
                                                            onChange={
                                                                fetchSubCategory
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Post-Secondary
                                                            Sub-Categories
                                                        </label>
                                                        <Select
                                                            aria-labelledby="aria-label"
                                                            inputId="aria-example-input"
                                                            name="sub-category"
                                                            isClearable
                                                            isSearchable
                                                            isLoading={
                                                                isLoading
                                                            }
                                                            options={
                                                                subCategory
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <p>
                                                            All amounts are
                                                            listed in the
                                                            currency charged by
                                                            the school. For best
                                                            results, please
                                                            specify a country of
                                                            the school.
                                                        </p>
                                                    </div>
                                                    <div className="flex mb-3 mt-3">
                                                        <div>
                                                            <label>
                                                                Tuition Fee
                                                            </label>
                                                            <div className="form-group inline-block form-check mb-3 ml-7 mt-3">
                                                                <Checkbox
                                                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1  align-top bg-no-repeat bg-center bg-contain float-left mr-0 cursor-pointer"
                                                                    id="exampleCheck1"
                                                                />
                                                                <label
                                                                    className="form-check-label  text-gray-800"
                                                                    htmlFor="exampleCheck1"
                                                                >
                                                                    <b>
                                                                        Include
                                                                        living
                                                                        costs
                                                                    </b>
                                                                </label>
                                                            </div>
                                                            <input
                                                                type="range"
                                                                className="form-range"
                                                                id="customRange3"
                                                            />
                                                            <label
                                                                htmlFor="customRange1"
                                                                className="form-label"
                                                            >
                                                                Application Fee
                                                            </label>
                                                            <input
                                                                type="range"
                                                                className="form-range"
                                                                id="customRange1"
                                                            ></input>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mt-5">
                                                        <button
                                                            className="inline-block px-4 py-2 bg-gray-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                        >
                                                            Clear Filter
                                                        </button>
                                                        <button
                                                            className="inline-block px-4 py-2 mt-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                                            data-mdb-ripple="true"
                                                            data-mdb-ripple-color="light"
                                                        >
                                                            APPLY FILTERS
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-8 col-xs-12 max-h-[55rem] overflow-auto"
                                    data-bs-spy="scroll"
                                >
                                    {props.schools
                                        ? props.schools.map((school) => {
                                              return (
                                                  <div
                                                      className="card mb-3 mt-4"
                                                      data-bs-spy="scroll"
                                                      key={school.id}
                                                  >
                                                      <div className="row g-0">
                                                          <div className="col-md-4">
                                                              <Link
                                                                  href={route(
                                                                      "detail",
                                                                      school.id
                                                                  )}
                                                              >
                                                                  <img
                                                                      src={
                                                                          school.logo
                                                                      }
                                                                      className="img-fluid rounded-start"
                                                                      alt={
                                                                          school.name
                                                                      }
                                                                  />
                                                              </Link>
                                                          </div>
                                                          <div className="col-md-8">
                                                              <div className="card-body">
                                                                  <Link
                                                                      href={route(
                                                                          "detail",
                                                                          school.id
                                                                      )}
                                                                  >
                                                                      <h5 className="card-title mt-4 text-sky-500 hover:text-sky-600 font-medium text-2xl">
                                                                          {
                                                                              school.name
                                                                          }
                                                                      </h5>
                                                                  </Link>
                                                                  <p className="card-text">
                                                                      {school.about &&
                                                                          school.about.substring(
                                                                              0,
                                                                              100
                                                                          ) +
                                                                              ".."}
                                                                  </p>
                                                                  <p className="card-text">
                                                                      <small className="text-muted">
                                                                          TUITION
                                                                          FEE: $
                                                                          {
                                                                              school.avgTutionFee
                                                                          }{" "}
                                                                          AUD
                                                                      </small>{" "}
                                                                      <small className="text-muted">
                                                                          APPLICATION
                                                                          FEE: $
                                                                          {
                                                                              school.avgLivingCost
                                                                          }{" "}
                                                                          AUD
                                                                      </small>
                                                                  </p>
                                                                  {/* <Link href="#" className="btn btn-outline-primary float-right">Apply</Link> */}
                                                              </div>
                                                          </div>
                                                      </div>
                                                      {school.program
                                                          ? school.program.map(
                                                                (program) => {
                                                                    return (
                                                                        <div
                                                                            className="row my-2"
                                                                            key={
                                                                                program.id
                                                                            }
                                                                        >
                                                                            <div className="col-8 ml-12">
                                                                                <Link
                                                                                    href={route(
                                                                                        "program",
                                                                                        program.id
                                                                                    )}
                                                                                >
                                                                                    <h3 className="fs-6 tracking-wider text-sky-400 hover:text-sky-500">
                                                                                        {
                                                                                            program.name
                                                                                        }
                                                                                    </h3>
                                                                                </Link>
                                                                                <div className="row">
                                                                                    <div className="col-4 font-thin ml-1">
                                                                                        <p>
                                                                                            <b>
                                                                                                Tution
                                                                                                Fee
                                                                                            </b>
                                                                                        </p>
                                                                                        <p>
                                                                                            $
                                                                                            {
                                                                                                program.tuition
                                                                                            }
                                                                                        </p>
                                                                                    </div>
                                                                                    <div className="col-4 font-thin ml-1">
                                                                                        <p>
                                                                                            <b>
                                                                                                Application
                                                                                                fee
                                                                                            </b>
                                                                                        </p>
                                                                                        <p className="ml-2">
                                                                                            {program.application_fee >
                                                                                                0 &&
                                                                                            program.application_fee !=
                                                                                                null
                                                                                                ? "$" +
                                                                                                  program.application_fee
                                                                                                : "free"}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-3">
                                                                                <div
                                                                                    className="btn-group"
                                                                                    role="group"
                                                                                    aria-label="Basic outlined example"
                                                                                >
                                                                                    <Link
                                                                                        href={route(
                                                                                            "set_user_program",
                                                                                            program.id
                                                                                        )}
                                                                                        className="md:ml-14 lg:ml-14 md:mt-4 lg:mt-4 text-sky-400 hover:text-sky-500"
                                                                                    >
                                                                                        <p>
                                                                                            Apply
                                                                                            Now
                                                                                        </p>
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            )
                                                          : "No data were found"}
                                                      <div></div>
                                                  </div>
                                              );
                                          })
                                        : "No data were found"}
                                    {/* <Pagination /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
