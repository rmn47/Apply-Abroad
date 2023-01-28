import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { isEmpty } from 'lodash';

export default function Education(props) {
    const user = props.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        education_country_name: "",
        high_education: "",
        grading_scheme: "",
        grade_average: "",
        country_institute: "",
        institute_name: "",
        education_level: "",
        primary_language: "",
        attend_institution_from: "",
        attend_institution_to: "",
        degree_name: "",
        education_check: "",
        graduation_date: "",
        address: "",
        city_town: "",
        provience: "",
        postal_zip: "",

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
        e.preventDefault();
        post('/update_education')
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        > {
                user && user != null ? (
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
                                                <div className="stepper-head  stepper-active">
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
                                            <div className="stepper-head">
                                                <span className="stepper-head-icon"> 4 </span>
                                                <span className="stepper-head-text"> Background Information </span>
                                            </div>
                                        </li>
                                        <li className="stepper-step">
                                            <div className="stepper-head">
                                                <span className="stepper-head-icon"> 5 </span>
                                                <span className="stepper-head-text"> Upload Documents </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6">
                                    <ValidationErrors errors={errors} />
                                    <form onSubmit={handleSubmit}>
                                        <div className="p-6 bg-white border-b border-gray-200">

                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Country of Education <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="education_country_name" name="education_country_name" value={user.education_country_name} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Highest Level of Education <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="high_education" name="high_education" value={!isEmpty(user.high_education) ? user.high_education : null} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Grading Scheme <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="grading_scheme" name="grading_scheme" value={user.grading_scheme} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Grade Average <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="grade_average" name="grade_average" value={user.grade_average} onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="p-6 bg-white border-b border-gray-200">

                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Country of Institution <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="country_institute" name="country_institute" value={user.country_institute} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Name of Institution <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="institute_name" name="institute_name" value={user.institute_name} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Level of Education <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="education_level" name="education_level" value={user.education_level} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Primary Language of Instruction <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="primary_language" name="primary_language" value={user.primary_language} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Attended Institution From <span className='text-danger'>*</span> </label>
                                                    <input type="date" className='form-control' id="attend_institution_from" name="attend_institution_from" value={user.attend_institution_from} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Attended Institution To <span className='text-danger'>*</span> </label>
                                                    <input type="date" className='form-control' id="attend_institution_to" name="attend_institution_to" value={user.attend_institution_to} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Degree Name <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="degree_name" name="degree_name" value={user.degree_name} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="education_check">I have graduated from this institution <span className='text-danger'>*</span></label><br />
                                                    {
                                                        user.refusal_checkbox && (user.education_check == "Yes" && user.education_check != null) ?
                                                            (
                                                                <div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Yes:</label>
                                                                        <input className="form-check-input" name="education_check" defaultChecked type="checkbox" id="education_check" value='Yes' onClick={handleChange} />

                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">No:</label>
                                                                        <input className="form-check-input" name="education_check" type="checkbox" id="education_check" value='No' onClick={handleChange} />
                                                                    </div>
                                                                </div>

                                                            ) : (
                                                                <div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Yes:</label>
                                                                        <input className="form-check-input" name="education_check" type="checkbox" id="education_check" value='Yes' onClick={handleChange} />
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">No:</label>
                                                                        <input className="form-check-input" name="education_check" defaultChecked type="checkbox" id="education_check" value='No' onClick={handleChange} />
                                                                    </div>
                                                                </div>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Graduation Date <span className='text-danger'>*</span> </label>
                                                    <input type="date" className='form-control' id="graduation_date" name="graduation_date" value={user.graduation_date} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Address <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="address" name="address" value={user.address} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">City/Town <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="city_town" name="city_town" value={user.city_town} onChange={handleChange} />
                                                </div>

                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Province <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="provience" name="provience" value={user.provience} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Postal/Zip Code <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="postal_zip" name="postal_zip" value={user.postal_zip} onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>
                                        <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                        <div>&nbsp;</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
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
                                                <div className="stepper-head  stepper-active">
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
                                            <div className="stepper-head">
                                                <span className="stepper-head-icon"> 4 </span>
                                                <span className="stepper-head-text"> Background Information </span>
                                            </div>
                                        </li>
                                        <li className="stepper-step">
                                            <div className="stepper-head">
                                                <span className="stepper-head-icon"> 5 </span>
                                                <span className="stepper-head-text"> Upload Documents </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6">
                                    <ValidationErrors errors={errors} />
                                    <form onSubmit={handleSubmit}>
                                        <div className="p-6 bg-white border-b border-gray-200">

                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Country of Education <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="education_country_name" name="education_country_name" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Highest Level of Education <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="high_education" name="high_education" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Grading Scheme <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="grading_scheme" name="grading_scheme" onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Grade Average <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="grade_average" name="grade_average" onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="p-6 bg-white border-b border-gray-200">

                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Country of Institution <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="country_institute" name="country_institute" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Name of Institution <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="institute_name" name="institute_name" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Level of Education <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="education_level" name="education_level" onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Primary Language of Instruction <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="primary_language" name="primary_language" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Attended Institution From <span className='text-danger'>*</span> </label>
                                                    <input type="date" className='form-control' id="attend_institution_from" name="attend_institution_from" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Attended Institution To <span className='text-danger'>*</span> </label>
                                                    <input type="date" className='form-control' id="attend_institution_to" name="attend_institution_to" onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Degree Name <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="degree_name" name="degree_name" onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="education_check">I have graduated from this institution <span className='text-danger'>*</span></label><br />
                                                    <div className="form-check form-check-inline">
                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Yes:</label>
                                                        <input className="form-check-input" name="education_check" type="checkbox" id="education_check" value='Yes' onClick={handleChange} />

                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">No:</label>
                                                        <input className="form-check-input" name="education_check" type="checkbox" id="education_check" value='No' onClick={handleChange} />
                                                    </div>

                                                </div>


                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Graduation Date <span className='text-danger'>*</span> </label>
                                                    <input type="date" className='form-control' id="graduation_date" name="graduation_date" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Address <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="address" name="address" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">City/Town <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="city_town" name="city_town" onChange={handleChange} />
                                                </div>

                                            </div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Province <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="provience" name="provience" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="last_name">Postal/Zip Code <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="postal_zip" name="postal_zip" onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>
                                        <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                        <div>&nbsp;</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Authenticated >
    );
}
