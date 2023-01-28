import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import ValidationErrors from '@/Components/ValidationErrors';
import Input from '@/Components/Input';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import _, { isEmpty } from 'lodash';
import { Checkbox } from '@mui/material';


export default function bgInformation(props) {
    const user = props.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        refusal_checkbox: "",
        valid_permit_visa: "",
        refusal_details: "",

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
        post('/update_background')
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            {
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
                                                <div className="stepper-head stepper-active">
                                                    <span className="stepper-head-icon"> 4 </span>
                                                    <span className="stepper-head-text"> Background Information </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className="stepper-step">
                                            <NavLink href={route('documents')}>
                                                <div className="stepper-head">
                                                    <span className="stepper-head-icon"> 5 </span>
                                                    <span className="stepper-head-text"> Upload Documents </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6">
                                    <ValidationErrors errors={errors} />
                                    <form onSubmit={handleSubmit}>
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="email">Have you been refused a visa from Canada, the USA, the United Kingdom, New Zealand, Australia or Ireland?<span className='text-danger'>*</span></label><br />
                                                    {
                                                        user.refusal_checkbox && (user.refusal_checkbox == "Yes" && user.refusal_checkbox != null) ?
                                                            (
                                                                <div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Yes:</label>
                                                                        <Checkbox className="form-check-input" defaultChecked name="refusal_checkbox" type="checkbox" id="refusal_checkbox"
                                                                        // onClick={handleChange} 
                                                                        />
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">No:</label>
                                                                        <Checkbox className="form-check-input" name="refusal_checkbox" type="checkbox" id="refusal_checkbox"
                                                                            value="No"
                                                                        // onClick={handleChange} 
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Yes:</label>
                                                                        <Checkbox className="form-check-input" name="refusal_checkbox" type="checkbox" id="refusal_checkbox"
                                                                        // onClick={handleChange} 
                                                                        />
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">No:</label>
                                                                        <Checkbox className="form-check-input" defaultChecked name="refusal_checkbox" type="checkbox" id="refusal_checkbox"
                                                                            value="No"
                                                                        // onClick={handleChange} 
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Do you have a valid Study Permit / Visa?<span className='text-danger'>*</span> </label>
                                                    <select className='form-select' name='valid_permit_visa'>
                                                        <option value={!isEmpty(user.valid_permit_visa) && user.valid_permit_visa == 'I dont have this' ? 'Selected' : 'I dont have this'}>I dont't have this</option>
                                                        <option value={!isEmpty(user.valid_permit_visa) && user.valid_permit_visa == 'USA F1 Visa' ? 'Selected' : 'USA F1 Visa'}>USA F1 Visa</option>
                                                        <option value={!isEmpty(user.valid_permit_visa) && user.valid_permit_visa == 'Canadian Study Permit or Visitor Visa' ? 'Selected' : 'Canadian Study Permit or Visitor Visa'}>Canadian Study Permit or Visitor Visa</option>
                                                        <option value={!isEmpty(user.valid_permit_visa) && user.valid_permit_visa == 'UK Student Visa (Tier 4) or Short Term Study Visa' ? 'Selected' : 'UK Student Visa (Tier 4) or Short Term Study Visa'}>UK Student Visa (Tier 4) or Short Term Study Visa</option>
                                                        <option value={!isEmpty(user.valid_permit_visa) && user.valid_permit_visa == 'Australian Student Visa' ? 'Selected' : 'Australian Student Visa'}>Australian Student Visa</option>
                                                        <option value={!isEmpty(user.valid_permit_visa) && user.valid_permit_visa == 'Irish Stamp 2' ? 'Selected' : 'Irish Stamp 2'}>Irish Stamp 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">If you answered "Yes" to any of the questions above, please provide more details below:<span className='text-danger'>*</span> </label>
                                                    <textarea className='form-control' id="refusal_details" name="refusal_details" onChange={handleChange} >{user.refusal_details}</textarea>
                                                </div>

                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                            <div>&nbsp;</div>
                                        </div>
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
                                                <div className="stepper-head stepper-active">
                                                    <span className="stepper-head-icon"> 4 </span>
                                                    <span className="stepper-head-text"> Background Information </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className="stepper-step">
                                            <NavLink href={route('documents')}>
                                                <div className="stepper-head">
                                                    <span className="stepper-head-icon"> 5 </span>
                                                    <span className="stepper-head-text"> Upload Documents </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6">
                                    <ValidationErrors errors={errors} />
                                    <form onSubmit={handleSubmit}>
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-12'>
                                                    <label htmlFor="email">Have you been refused a visa from Canada, the USA, the United Kingdom, New Zealand, Australia or Ireland?<span className='text-danger'>*</span></label><br />

                                                    <div className="form-check form-check-inline">
                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Yes:</label>
                                                        <Checkbox className="form-check-input" name="refusal_checkbox" type="checkbox" id="refusal_checkbox"
                                                        // onClick={handleChange} 
                                                        />
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">No:</label>
                                                        <Checkbox className="form-check-input" name="refusal_checkbox" type="checkbox" id="refusal_checkbox"
                                                            value="No"
                                                        // onClick={handleChange} 
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Do you have a valid Study Permit / Visa?<span className='text-danger'>*</span> </label>
                                                    <select className='form-select' name='valid_permit_visa'>
                                                        <option>I dont't have this</option>
                                                        <option >USA F1 Visa</option>
                                                        <option>Canadian Study Permit or Visitor Visa</option>
                                                        <option>UK Student Visa (Tier 4) or Short Term Study Visa</option>
                                                        <option>Australian Student Visa</option>
                                                        <option>Irish Stamp 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">If you answered "Yes" to any of the questions above, please provide more details below:<span className='text-danger'>*</span> </label>
                                                    <textarea className='form-control' id="refusal_details" name="refusal_details" onChange={handleChange} ></textarea>
                                                </div>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>
                                            <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                            <div>&nbsp;</div>
                                        </div>
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
