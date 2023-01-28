import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Inertia } from '@inertiajs/inertia'
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import Iframe from '@/Components/Iframe';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import Select, { AriaOnFocus } from 'react-select';
import { isEmpty } from 'lodash';

export default function Applications(props) {


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            {props.programs ?
                <div className='row'>
                    <div className='col-md-1 md:ml-20 mt-4'>
                        <img src={props.programs[0].school.logo} className="img-fluid rounded-start ml-16 w-12 h-12" alt={props.programs[0].school.name} />
                    </div>
                    <div className='col-md-4'>
                        <h4 className="mt-4  mb-1 italic hover:not-italic font-semibold">{props.programs[0].school.name}</h4>
                        <h4 className="mb-2  italic hover:not-italic font-semibold">{props.programs[0].school.country.name},{props.programs[0].school.location}</h4>
                    </div>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <h1 className="mt-4 mb-4 text-5xl italic hover:not-italic font-semibold">{props.programs[0].name}</h1>
                            {/* <h4 className="mt-2 mb-2 ml-4 italic hover:not-italic font-semibold">{props.programs[0].country.name},{props.programs[0].location}</h4> */}
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="container-fluid p-6 bg-white border-b border-gray-200">

                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">

                                            <div className="carousel-item active">
                                                <img src={props.programs[0].school.coverImage} className="d-block w-100 max-h-96" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>


                                </div>

                            </div>

                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 inline-block" >
                                <div className='row col-12'>
                                    <div className='col-md-8 col-sm-12'>
                                        <div>&nbsp;</div>
                                        <h1 className='fs-1'><b>programs Summary</b></h1>
                                        <div>&nbsp;</div>
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <div className="row">

                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: props.programs[0].description
                                                    }}>
                                                </div>
                                            </div>
                                        </div>
                                        <Link type="button" href={route('student')} className="btn btn-outline-primary my-8 py-2 rounded-full md:px-12 lg:px-12"><b>Check Eligibility Now</b></Link>
                                        <h1 className='fs-1'><b>Similar programs</b></h1>

                                        <div className="p-6 mt-4 bg-white border-b border-gray-200">

                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <Link type="button" href={route('student')} className="btn btn-outline-primary py-2 my-10 rounded-full md:px-24 lg:px-24"><b>Check Eligibility Now</b></Link>
                                        <div className="p-6 bg-white">
                                            <ul>
                                                <li className="d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold"> {props.programs[0].level}</div>
                                                        programs Level
                                                    </div>
                                                </li>
                                                <li className="d-flex mt-2 justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold"> {props.programs[0].level_text}</div>
                                                        programs Length
                                                    </div>
                                                </li>
                                                <li className="d-flex mt-2 justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold"> {!isEmpty(props.programs[0].school.avgLivingCost) && (props.programs[0].school.avgLivingCost) > 0 ? '$ ' + (props.programs[0].school.avgLivingCost) : <p className='font-light'>No data available</p>}</div>
                                                        Cost of Living
                                                    </div>
                                                </li>
                                                <li className="d-flex mt-2 justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold"> {!isEmpty(props.programs[0].tuition) && (props.programs[0].tuition) > 0 ? '$ ' + (props.programs[0].tuition) : <p className='font-light'>No data available</p>}</div>
                                                        Tution
                                                    </div>
                                                </li>
                                                <li className="d-flex mt-2 justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold"> {!isEmpty(props.programs[0].application_fee) && (props.programs[0].application_fee) > 0 ? '$ ' + (props.programs[0].application_fee) : <p className='font-light'>No data available</p>}</div>
                                                        Application Fee
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="mt-14 bg-white">
                                            <h1 className="font-extrabold text-2xl py-2 md:ml-4">programs Intakes</h1>
                                            <li className="d-flex my-2 justify-content-between md:ml-4 align-items-start">
                                                <div className="fw-light"><p className='bg-green-400 px-2 py-1 rounded-full'>Open date:</p><span className='pt-2'> {props.programs[0].start_date}</span></div>
                                                <div className="fw-light ml-4"><p className='bg-orange-400 px-2 py-1 rounded-full'>Submission deadline:</p><span className='md:ml-8 pt-2'> {props.programs[0].submission_deadline}</span></div>
                                            </li>

                                        </ul>
                                        <div>&nbsp;</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : "No data were found"
            };
        </Authenticated>
    );
}
