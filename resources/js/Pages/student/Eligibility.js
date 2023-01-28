import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import Input from '@/Components/Input';
import Button from '@/Components/Button';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { isEmpty } from 'lodash';
import { toggleButtonClasses } from '@mui/material';

export default function Profile(props) {
    const user = props.user;
    const background = props.background;
    const { data, setData, put, post, processing, errors, reset } = useForm({
        citizenship: user.citizenship,
        country: user.country,
        state: user.state,
        valid_permit_visa: background.valid_permit_visa
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
        put('/update_user')
        post('/update_background')

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
                                <h1 className="mt-2 font-semibold text-2xl md:ml-9 text-gray-400">1. Background</h1>

                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-3xl md:ml-9'>
                                    <label htmlFor="first_name" className='font-serif font-light tracking-wider'>What is your nationality?</label>
                                    <div className="input-group mb-3 mt-3 border-2 border-gray-200 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-2 w-5 h-5 ' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        <input className='form-control' name="citizenship" id="country" value={user.citizenship} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-3xl md:ml-9'>
                                    <label htmlFor="first_name" className='font-serif font-light tracking-wider'>What is your country of residence?</label>
                                    <div className="input-group mb-3 mt-3 border-2 border-gray-200 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-2 w-5 h-5 ' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        <input className='form-control' name="country" id="country" value={user.country} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-3xl md:ml-9'>
                                    <label htmlFor="first_name" className='font-serif font-light tracking-wider'>What is your state of residence?</label>
                                    <div className="input-group mb-3 mt-3 border-2 border-gray-200 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-2 w-5 h-5 ' viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                                        <input className='form-control' name="state" id="state" value={user.state} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='col-md-12 col-xs-12 mt-4 font-semibold text-3xl md:ml-9'>
                                    <label htmlFor="first_name" className='font-serif font-light tracking-wider'>Which valid study permits or visas do you have?</label>

                                    <div className='row mt-4'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 lg:mt-0.5 w-6 h-6 rounded-lg" type="checkbox" name="valid_permit_visa" value="USA F1 Visa" />
                                        </div>
                                        <div className="col-md-10 col-lg-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                USA F1 Visa
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 lg:mt-0.5 w-6 h-6 rounded-lg" name="valid_permit_visa" type="checkbox" value="Canadian Study Permit or Visitor Visa" />
                                        </div>
                                        <div className="col-md-10 col-lg-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                Canadian Study Permit or Visitor Visa
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 lg:mt-0.5 w-6 h-6 rounded-lg" name="valid_permit_visa" type="checkbox" value="UK Student Visa (Tier 4) or Short Term Study Visa" />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                UK Student Visa (Tier 4) or Short Term Study Visa
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 lg:mt-0.5 w-6 h-6 rounded-lg" name="valid_permit_visa" type="checkbox" value="Australian Student Visa" />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                Australian Student Visa
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 lg:mt-0.5 w-6 h-6 rounded-lg" name="valid_permit_visa" type="checkbox" value="Irish Stamp 2" />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                Irish Stamp 2
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 lg:mt-0.5 w-6 h-6 rounded-lg" name="valid_permit_visa" type="checkbox" value="I dont have this" />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                I don't have this
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <input type="submit" className="btn bg-primary text-2xl md:ml-12 btn-group tracking-wide font-semibold pl-80 pr-80 py-3 mt-4 btn-primary" value='Next' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}
