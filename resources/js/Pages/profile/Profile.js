import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Profile(props) {
    const user = props.user;

    const { data, setData, put, processing, errors, reset } = useForm({
        first_name: user.first_name,
        middle_name: user.middle_name,
        last_name: user.last_name,
        date_of_birth: user.date_of_birth,
        citizenship: user.citizenship,
        primary_language: user.primary_language,
        passport_number: user.passport_number,
        passport_expiry: user.passport_expiry,
        gender: user.gender,
        marital_status: user.marital_status,
        address: user.address,
        city: user.city,
        country: user.country,
        state: user.state,
        zipcode: user.zipcode,
        contact: user.contact
    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value
        setData(data => ({
            ...data,
            [name]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        put('/update_profile')
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

                            {props.message && <div className="mb-4 font-medium text-sm text-green-600">{props.message}</div>}
                            <ul className="stepper" value-mdb-stepper="stepper">

                                <li className="stepper-step stepper-active">
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
                                    <div className="stepper-head">
                                        <span className="stepper-head-icon"> 3 </span>
                                        <span className="stepper-head-text"> Test Scores </span>
                                    </div>
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
                                <div className='row g-3' >

                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="first_name">First name <span className='text-danger'>*</span></label>
                                        <input className='form-control' name='first_name' id="first_name" value={data.first_name} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="middle_name">Middle name:</label>
                                        <input className='form-control' name='middle_name' id="middle_name" value={data.middle_name} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="last_name">Last Name:</label>
                                        <input className='form-control' name='last_name' id="last_name" value={data.last_name} onChange={handleChange} />
                                    </div>

                                </div>
                                <div className='row g-3'>

                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="date_of_birth">Date of Birth <span className='text-danger'>*</span></label>
                                        <input className='form-control' type='date' name='date_of_birth' id="date_of_birth" value={data.date_of_birth} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="citizenship">Country of Citizenship <span className='text-danger'>*</span> </label>
                                        <input className='form-control' name='citizenship' id="citizenship" value={data.citizenship} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="primary_language">First Language <span className='text-danger'>*</span></label>
                                        <input className='form-control' name='primary_language' id="primary_language" value={data.primary_language} onChange={handleChange} />
                                    </div>

                                </div>
                                <div className='row g-3'>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="passport_number">Passport Number <span className='text-danger'>*</span></label>
                                        <input className='form-control' name='passport_number' id="passport_number" value={data.passport_number} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="passport_expiry">Passport Expiry Date <span className='text-danger'>*</span> </label>
                                        <input className='form-control' type="date" name='passport_expiry' id="passport_expiry" value={data.passport_expiry} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="email">Gender <span className='text-danger'>*</span></label><br />
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label" htmlFor="gender">Male:</label>
                                            <input className="form-check-input" id="gender" name='gender' type="radio" value="Male" {...(user.gender == "Male") && (user.gender != null) ? 'defaultChecked' : ''} onChange={handleChange} />

                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label" htmlFor="gender">Female:</label>
                                            <input className="form-check-input" id="gender" name='gender' type="radio" value="Female" onChange={handleChange} />

                                        </div>

                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="email">Marital Status <span className='text-danger'>*</span></label><br />
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label" htmlFor="marital_status">Single:</label>
                                            <input className="form-check-input" id="marital_status" type="radio" value="Single" onChange={handleChange} />

                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label" htmlFor="marital_status">Married:</label>
                                            <input className="form-check-input" id="marital_status" type="radio" value="Married" onChange={handleChange} />

                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-check-label" htmlFor="marital_status">Divorced:</label>
                                            <input className="form-check-input" id="marital_status" type="radio" value="Divorced" onChange={handleChange} />
                                        </div>
                                    </div>

                                </div>
                                <div className='row g-3'>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="address">Address <span className='text-danger'>*</span> </label>
                                        <input className='form-control' name='address' id="address" value={data.address} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="city">City/Town <span className='text-danger'>*</span> </label>
                                        <input className='form-control' name="city" id="city" value={data.city} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='row g-3'>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="country">Country <span className='text-danger'>*</span> </label>
                                        <input className='form-control' name="country" id="country" value={data.country} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="state">Province/State <span className='text-danger'>*</span> </label>
                                        <input className='form-control' name="state" id="state" value={data.state} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="zipcode">Postal/Zip Code <span className='text-danger'>*</span> </label>
                                        <input className='form-control' name="zipcode" id="zipcode" value={data.zipcode} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='row g-3'>
                                    <div className='col-md-4 col-xs-12'>
                                        <label htmlFor="contact">Phone Number <span className='text-danger'>*</span> </label>
                                        <input className='form-control' name="contact" id="contact" value={data.contact} onChange={handleChange} />
                                    </div>
                                </div>
                                <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                <div>&nbsp;</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}
