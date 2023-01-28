import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Inertia } from '@inertiajs/inertia'
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
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
            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b bg-gray-300">
                            <div className="p-2 bg-gray-200 rounded-top border-b">
                                <h5 className="text-base"><b>Unpaid Applications</b></h5>
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="form-check ml-3 mt-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />

                                    </div>
                                </div>
                                <div className="col-md-1"><p className="ml-1 mt-2">Status</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">App #</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">School</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">Program</p></div>
                                <div className="col-md-3 col-sm-1"><p className="md:ml-20 mt-2">ESL Start Date</p></div>
                                <div className="col-md-2"><p className="ml-1 mt-2">Start Date</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">Fees</p></div>
                            </div>
                        </div>
                    </div>
                    {(props.userprogram) ? props.userprogram.map(userprogram => {
                        if (userprogram.amount_paid == null) {
                            return (<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2 font-light">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <div className="form-check ml-3 mt-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                                            </div>
                                        </div>
                                        <div className="col-md-1"><p className="ml-1 mt-2 text-xs text-blue-600">Payment Pending</p></div>
                                        <div className="col-md-1"><p className="ml-1 mt-2 text-xs">{userprogram.program.id}</p></div>
                                        <div className="col-md-1"><img src={userprogram.program.school.logo} className='inline-block ml-1 mt-1 w-18' /></div>
                                        <div className="col-md-2"><p className="ml-1 mt-3 text-xs">{userprogram.program.name}</p></div>
                                        <div className="col-md-1 col-sm-1"><p className="md:ml-5 mt-1 mb-1 text-sm text-gray-300">Esl</p><input type="date" className="form-control bg-white" aria-label="Sizing example input" disabled aria-describedby="inputGroup-sizing-sm" /></div>
                                        <div className="col-md-2"><p className="mt-2 mb-1 md:ml-12 text-xs text-gray-300">Academic <span className="text-xs text-orange-300">Likely Open</span></p><input type="text" value={userprogram.program.start_date} className="form-control w-24 ml-2 bg-white md:ml-14" disabled aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" /></div>
                                        <div className="col-md-1"><p className="mt-3 text-left text-xs font-thin">Application Fee</p></div>
                                        <div className="col-md-1"><p className="mt-3 text-left text-xs font-thin">${!isEmpty(userprogram.program.application_fee) && (userprogram.program.application_fee > 0) ? userprogram.program.application_fee : 0} CAD</p></div>
                                        <div className="col-md-1"><p className="mt-3 text-left text-xs font-thin"><Link href={route('program', userprogram.program.id)} type="button" className="btn bg-primary btn-primary h-7" >View</Link>
                                            <Link href={route('delete', userprogram.id)}><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 inline-block" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg></Link></p></div>
                                    </div>
                                </div>
                            </div>
                            );
                        }
                    }) : <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2 font-light">
                        <p className='my-3 md:ml-3 lg:ml-3 ml-1'>No data were found</p>
                    </div>
                    }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2 font-light">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="row">
                                <div className="col-md-7 col-sm-2"><p className="ml-1 mt-2 italic text-base text-right">Total</p></div>

                                <div className="col-md-5 col-sm-5"><p className="md:ml-3 mt-2 font-bold text-xs inline-block">
                                    {(props.userprogram) && (props.userprogram.amount_paid == null) ? props.userprogram.map(userprogramfee => {
                                        if (userprogramfee.amount_paid == null) {
                                            return (<span className='text-sm font-light'>
                                                $ {userprogramfee.program.application_fee} + &nbsp;
                                            </span>
                                            );
                                        }
                                    }) : ''
                                    }

                                    <span className='text-sm font-light'>
                                        $ 0
                                    </span> (Total to Pay) </p></div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button type="button" className="btn btn-outline-primary p-2 ml-5 md:ml-96">Find More Program</button>
                            <button type="button" className="btn bg-primary btn-primary p-2 ml-2 md:ml-16">Pay For Application</button>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2 font-light">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="p-2 bg-primary rounded-top border-b border-gray-200">
                                <h5 className="text-base text-white font-bold ml-1"><b>Paid Applications</b></h5>
                            </div>
                            <div className="row">
                                <div className="col-md-1"><p className="md:ml-8 mt-2">Status</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">App #</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">School</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">Program</p></div>
                                <div className="col-md-3 col-sm-1"><p className="md:ml-20 mt-2">ESL Start Date</p></div>
                                <div className="col-md-2"><p className="ml-1 mt-2">Start Date</p></div>
                                <div className="col-md-1"><p className="ml-1 mt-2">Requirements</p></div>
                            </div>
                        </div>
                    </div>
                    {(props.userprogram) ? props.userprogram.map(userprogram => {
                        if (userprogram.amount_paid != null) {
                            return (
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2 font-light">
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div className="row">
                                            <div className="col-md-1"><p className="md:ml-8 mt-3 text-xs text-blue-600">Processing</p></div>
                                            <div className="col-md-1"><p className="ml-3 mt-3 text-xs">{userprogram.program.id}</p></div>
                                            <div className="col-md-1"><img src={userprogram.program.school.logo} className='inline-block ml-1 mt-1 w-18' /></div>
                                            <div className="col-md-2"><p className="ml-1 mt-3 text-xs">{userprogram.program.name}</p></div>
                                            <div className="col-md-1 col-sm-1"><p className="md:ml-3 mt-1 mb-1 text-sm text-gray-300">Esl</p><p className="md:ml-3 text-lg text-gray-300">N\A</p></div>
                                            <div className="col-md-3"><p className="mt-2 mb-1 text-xs md:ml-20 text-gray-300">Academic <span className="text-xs text-orange-300">Likely Open</span></p><input type="text" disabled className="form-control md:ml-20 w-24 ml-2 bg-white" value={userprogram.program.start_date} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" /></div>
                                            <div className="col-md-2"><p className="mt-3 text-left text-xs font-thin">Pre-Submission</p></div>
                                            <div className="col-md-1"><p className="mt-3 text-left text-xs font-thin"><Link href={route('program', userprogram.program.id)} type="button" className="btn bg-primary btn-primary h-7" >View</Link></p></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }) : <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-2 font-light">
                        <p className='my-3 md:ml-3 lg:ml-3 ml-1'>No data were found</p>
                    </div>
                    }
                </div>
            </div>
        </Authenticated>
    );
}
