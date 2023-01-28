import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Documents(props) {
    const user = props.user;
    const { data, setData, post, processing, errors, reset } = useForm({

        passport_photo: user.passport_photo,
        secondary_document: user.secondary_document,
        senior_secondary_document: user.senior_secondary_document
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value
        setData(data => ({
            ...data,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        post('/update_documents')
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ul className="stepper" data-mdb-stepper="stepper">
                                <li className="stepper-step">
                                    <NavLink href={route('profile')}>
                                        <div className="stepper-head">
                                            <span className="stepper-head-icon"> 1 </span>

                                            <span className="stepper-head-text"> General Information </span>

                                        </div>
                                    </NavLink>
                                </li>
                                <li className="stepper-step">
                                    <NavLink href={route('education_history')}>
                                        <div className="stepper-head">
                                            <span className="stepper-head-icon"> 2 </span>
                                            <span className="stepper-head-text"> Education History </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="stepper-step">
                                    <NavLink href={route('test_scores')}>
                                        <div className="stepper-head">
                                            <span className="stepper-head-icon"> 3 </span>
                                            <span className="stepper-head-text"> Test Scores </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="stepper-step">
                                    <NavLink href={route('background_information')}>
                                        <div className="stepper-head">
                                            <span className="stepper-head-icon"> 4 </span>
                                            <span className="stepper-head-text"> Background Information </span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="stepper-step">
                                    <NavLink href={route('documents')}>
                                        <div className="stepper-head stepper-active">
                                            <span className="stepper-head-icon"> 5 </span>
                                            <span className="stepper-head-text"> Upload Documents </span>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6">
                            <ValidationErrors errors={errors} />
                            <form onSubmit={handleSubmit} enctype="multipart/form-data">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    <div className='row g-3'>
                                        <div className='col-md-4 col-xs-12'>
                                            <label htmlFor="email">Passport Required (Automated)<span className='text-danger'>*</span></label><br />
                                            <div className='col-md-4 col-xs-2'>
                                                <label htmlFor="last_name">Total <span className='text-danger'>*</span> </label>
                                                <input className='form-control' type="file" id="passport_photo" name="passport_photo" value={data.passport_photo} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='col-md-4 col-xs-12'>
                                            <label htmlFor="email">Transcripts for Grade 10 <span className='text-danger'>*</span></label><br />
                                            <div className='col-md-4 col-xs-2'>
                                                <label htmlFor="last_name">Total <span className='text-danger'>*</span> </label>
                                                <input className='form-control' type="file" id="secondary_document" name="secondary_document" value={data.secondary_document} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='col-md-4 col-xs-12'>
                                            <label htmlFor="email">Transcripts for Grade 12 / High School<span className='text-danger'>*</span></label><br />
                                            <div className='col-md-4 col-xs-2'>
                                                <label htmlFor="last_name">Total <span className='text-danger'>*</span> </label>
                                                <input className='form-control' type="file" id="senior_secondary_document" name="senior_secondary_document" value={data.senior_secondary_document} onChange={handleChange} />
                                            </div>


                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}
