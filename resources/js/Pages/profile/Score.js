import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { isEmpty } from 'lodash';

export default function Score(props) {
    const user = props.user;


    const { data, setData, post, processing, errors, reset } = useForm({
        english_exam_type: "",
        date_of_exam: "",
        listing: "",
        reading: "",
        writing: "",
        speaking: "",
        gre_exam_date: "",
        gre_verval: "",
        gre_quantative: "",
        gre_writing: "",
        gre_verval_rank: "",
        gre_quantative_rank: "",
        gre_writing_rank: "",
        gmat_exam_date: "",
        gmat_verval: "",
        gmat_writing: "",
        gmat_total: "",
        gmat_verval_rank: "",
        gmat_writing_rank: "",
        gmat_total_rank: "",

    })
    console.log(data);
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
        post('/update_score')
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
                                                <div className="stepper-head">
                                                    <span className="stepper-head-icon"> 2 </span>
                                                    <span className="stepper-head-text"> Education History </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className="stepper-step">
                                            <NavLink href={route('test_scores')}>
                                                <div className="stepper-head stepper-active">
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
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">English Exam Type <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="english_exam_type" name="english_exam_type" value={user.english_exam_type} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Date of Exam <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' type="date" id="date_of_exam" name="date_of_exam" value={user.date_of_exam} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Listening <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="listing" name="listing" value={user.listing} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Reading <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="reading" name="reading" value={user.reading} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Writing <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="writing" name="writing" value={user.writing} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Speaking <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="speaking" name="speaking" value={user.speaking} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <h3>I have GRE exam scores</h3>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">GRE Exam Date <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' type="date" id="gre_exam_date" name="gre_exam_date" value={user.gre_exam_date} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Verbal <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gre_verval" name="gre_verval" placeholder='Score' value={user.gre_verval} onChange={handleChange} />
                                                    <input className='form-control' id="gre_verval" name="gre_verval_rank" placeholder='Rank %' value={user.gre_verval_rank} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Quantitative <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gre_quantative" name="gre_quantative" placeholder='Score' value={user.gre_quantative} onChange={handleChange} />
                                                    <input className='form-control' id="gre_quantative" name="gre_quantative_rank" placeholder='Rank %' value={user.gre_quantative_rank} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Writing <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gre_writing" name="gre_writing" placeholder='Score' value={user.gre_writing} onChange={handleChange} />
                                                    <input className='form-control' id="gre_writing" name="gre_writing_rank" placeholder='Rank %' value={user.gre_writing_rank} onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <h3>I have GMAT exam scores</h3>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">GMAT Exam Date <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' type="date" id="gmat_exam_date" placeholder='Rank %' name="gmat_exam_date" value={user.gmat_exam_date} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Verbal <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gmat_verval" name="gmat_verval" placeholder='Score' value={user.gmat_verval} onChange={handleChange} />
                                                    <input className='form-control' id="gmat_verval" name="gmat_verval_rank" placeholder='Rank %' value={user.gmat_verval_rank} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Quantitative <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gmat_quantitative" name="gmat_quantitative" placeholder='Score' value={user.gmat_quantitative} onChange={handleChange} />
                                                    <input className='form-control' id="gmat_quantitative" name="gmat_quantitative_rank" placeholder='Rank %' value={user.gmat_quantitative_rank} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Writing <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="last_name" name="gmat_writing" placeholder='Score' value={user.gmat_writing} onChange={handleChange} />
                                                    <input className='form-control' id="gmat_writing" name="gmat_writing_rank" placeholder='Rank %' value={user.gmat_writing_rank} onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Total <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="last_name" name="gmat_total" placeholder='Score' value={user.gmat_total} onChange={handleChange} />
                                                    <input className='form-control' id="total" name="gmat_total_rank" placeholder='Rank %' value={user.gmat_total_rank} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                            <div>&nbsp;</div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div >
                    </div >
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
                                                <div className="stepper-head stepper-active">
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
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">English Exam Type <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="english_exam_type" name="english_exam_type" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Date of Exam <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' type="date" id="date_of_exam" name="date_of_exam" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Listening <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="listing" name="listing" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Reading <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="reading" name="reading" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Writing <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="writing" name="writing" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Speaking <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="speaking" name="speaking" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <h3>I have GRE exam scores</h3>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">GRE Exam Date <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' type="date" id="gre_exam_date" name="gre_exam_date" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Verbal <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gre_verval" name="gre_verval" placeholder='Score' onChange={handleChange} />
                                                    <input className='form-control' id="gre_verval" name="gre_verval_rank" placeholder='Rank %' onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Quantitative <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gre_quantative" name="gre_quantative" placeholder='Score' v onChange={handleChange} />
                                                    <input className='form-control' id="gre_quantative" name="gre_quantative_rank" placeholder='Rank %' onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Writing <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gre_writing" name="gre_writing" placeholder='Score' onChange={handleChange} />
                                                    <input className='form-control' id="gre_writing" name="gre_writing_rank" placeholder='Rank %' onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="p-6 bg-white border-b border-gray-200">
                                            <h3>I have GMAT exam scores</h3>
                                            <div className='row g-3'>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">GMAT Exam Date <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' type="date" id="gmat_exam_date" placeholder='Rank %' name="gmat_exam_date" onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Verbal <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gmat_verval" name="gmat_verval" placeholder='Score' onChange={handleChange} />
                                                    <input className='form-control' id="gmat_verval" name="gmat_verval_rank" placeholder='Rank %' onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Quantitative <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="gmat_quantitative" name="gmat_quantitative" placeholder='Score' onChange={handleChange} />
                                                    <input className='form-control' id="gmat_quantitative" name="gmat_quantitative_rank" placeholder='Rank %' onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Writing <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="last_name" name="gmat_writing" placeholder='Score' onChange={handleChange} />
                                                    <input className='form-control' id="gmat_writing" name="gmat_writing_rank" placeholder='Rank %' onChange={handleChange} />
                                                </div>
                                                <div className='col-md-4 col-xs-2'>
                                                    <label htmlFor="last_name">Total <span className='text-danger'>*</span> </label>
                                                    <input className='form-control' id="last_name" name="gmat_total" placeholder='Score' onChange={handleChange} />
                                                    <input className='form-control' id="total" name="gmat_total_rank" placeholder='Rank %' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <button disabled={processing} className='btn btn-outline-primary float-right p-2' type="submit">Save and Next</button>
                                            <div>&nbsp;</div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div >
                    </div >
                )
            }
        </Authenticated >
    );
}
