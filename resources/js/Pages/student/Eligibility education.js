import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import Input from '@/Components/Input';
import Button from '@/Components/Button';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Profile(props) {
    const user = props.user;
    // console.log(props.user);
    const { data, setData, post, processing, errors, reset } = useForm({

        education_country_name: user.education_country_name,
        high_education: user.high_education,
        degree_name: user.degree_name,
        grading_scheme: user.grading_scheme,
        grade_average: user.grade_average

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
        post('/update_education')

    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <div className="py-12">
                <div className="max-w-4xl mx-auto md:mt-9 sm:px-6 lg:px-8">
                    <h1 className="md:ml-9 font-semibold text-3xl">Check Your Eligibility</h1>
                    <h5 className="mt-9 font-light md:ml-9">Answer a few questions to get matched to your dream program.</h5>
                    <div className="bg-white mt-4 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="p-6  bg-white border-b border-gray-200">
                                <h1 className="mt-2 font-semibold text-2xl md:ml-9 text-gray-400">2. Education</h1>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-3xl md:ml-9'>
                                    <h1>What is your highest level of education?</h1>
                                </div>
                                <div className='mt-4 font-light text-base md:ml-9'>
                                    <p className='text-gray-400'>Status</p>
                                    <div className='row mt-2'>
                                        <div className="col-md-1">
                                            <Input className="md:ml-2 md:mt-0.5 lg:mt-0.5 w-4 h-4" type="checkbox" value="" />
                                        </div>
                                        <div className="col-md-10 col-lg-10">
                                            <label className="form-check-label text-xl font-serif font-light" htmlFor="flexCheckDefault">
                                                I have graduated
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-1">
                                            <Input className="md:ml-2 md:mt-0.5 lg:mt-0.5 w-4 h-4" type="checkbox" value="" />
                                        </div>
                                        <div className="col-md-10 col-lg-10">
                                            <label className="form-check-label text-xl font-serif font-light" htmlFor="flexCheckDefault">
                                                I am still studying
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-base md:ml-9'>
                                    <label htmlFor="first_name" className='text-gray-400'>Country of education</label>
                                    <div className="input-group mb-3 mt-3 border-2 border-gray-200 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-2 w-5 h-5 ' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        <input className='form-control' name="education_country_name" id="education_country_name" value={user.education_country_name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-base md:ml-9'>
                                    <label htmlFor="first_name" className='text-gray-400'>Education level</label>
                                    <div className="input-group mb-3 mt-3 border-2 border-gray-200 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-2 w-5 h-5 ' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        <input className='form-control' name="high_education" id="high_education" value={user.high_education} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-base md:ml-9'>
                                    <label htmlFor="first_name" className='text-gray-400'>Degree</label>
                                    <div className="input-group mb-3 mt-3 border-2 border-gray-200 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-2 w-5 h-5 ' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        <input className='form-control' name="degree_name" id="degree_name" value={user.degree_name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-3xl md:ml-9'>
                                    <h1>What is your most recent overall grade?</h1>
                                </div>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-base md:ml-9'>
                                    <label htmlFor="first_name" className='text-gray-400'>Grading scheme</label>
                                    <div className="input-group mb-3 mt-3 border-2 border-gray-200 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-2 w-5 h-5 ' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        <input className='form-control' name="grading_scheme" id="grading_scheme" value={user.grading_scheme} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mb-3 col-md-11 col-xs-12 mt-4 w-11/12 font-semibold text-base md:ml-9">
                                    <label htmlFor="exampleFormControlInput1" className="text-gray-400 form-label">Grading average</label>
                                    <Input type="number" className="form-control w-full" id="grade_average" placeholder="grade_average@example.com" value={user.grade_average} onChange={handleChange} />
                                </div>
                                <div className="btn-group w-full" role="group" aria-label="Basic example">
                                    <Link href={route('student')} className="btn bg-primary text-2xl md:ml-8 md:mr-2 mr-2 btn-group tracking-wide font-semibold w-full py-2 mt-4 btn-primary"><p className='text-center items-center ml-14 md:ml-28 lg:ml-28'>Previous</p></Link>
                                    <input type="submit" className="btn bg-primary text-2xl md:mr-8 md:ml-2 ml-2 btn-group justify-items-center tracking-wide font-semibold ml-40 w-full py-2 mt-4 btn-primary" value='Next' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}
