import React, { useState } from 'react'
import Authenticated from '@/Layouts/Authenticated';
import NavLink from '@/Components/NavLink';
import input from '@/Components/input';
import Button from '@/Components/Button';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Profile(props) {
    const user = props.user;
    console.log(props.user);
    const { data, setData, post, processing, errors, reset } = useForm({

        english_exam_type: user.english_exam_type,
        listing: user.listing,
        reading: user.reading,
        writing: user.writing,
        speaking: user.speaking
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
        post('/update_test')

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
                                <h1 className="mt-2 font-semibold text-2xl md:ml-9 text-gray-400">3. Test Scores</h1>
                                <div className='col-md-11 col-xs-12 mt-4 font-semibold text-3xl md:ml-9'>
                                    <h1>Have you taken any English proficiency tests?</h1>
                                </div>
                                <div className='mt-4 font-light text-base md:ml-9'>
                                    <div className='row'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 w-6 h-6 rounded-lg"
                                                name='english_exam_type'
                                                type="checkbox" value="Ilets" checked={user.english_exam_type == ('Ilets') || ('ilets') || ('ILETS') ? true : false} />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                IELTS
                                            </label>
                                        </div>
                                        <div className="col-md-5 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg" name='listing' value={user.english_exam_type == ('Ilets') || ('ilets') || ('ILETS') ? user.listing : ''} placeholder="Listening" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Reading" name='reading' value={user.english_exam_type == ('Ilets') || ('ilets') || ('ILETS') ? user.reading : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Writing" name='writing' value={user.english_exam_type == ('Ilets') || ('ilets') || ('ILETS') ? user.writing : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Speaking" name='speaking' value={user.english_exam_type == ('Ilets') || ('ilets') || ('ILETS') ? user.speaking : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 w-6 h-6 rounded-lg" type="checkbox" name='english_exam_type' value="Toefl" checked={user.english_exam_type == ('Toefl' || 'toefl' || 'TOEFL') ? true : ''} />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                TOEFL
                                            </label>
                                        </div>
                                        <div className="col-md-5 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Listening" name='listing' value={user.english_exam_type == ('Toefl' || 'toefl' || 'TOEFL') ? user.listing : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Reading" name='reading' value={user.english_exam_type == ('Toefl' || 'toefl' || 'TOEFL') ? user.reading : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Writing" name='writing' value={user.english_exam_type == ('Toefl' || 'toefl' || 'TOEFL') ? user.writing : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Speaking" name='speaking' value={user.english_exam_type == ('Toefl' || 'toefl' || 'TOEFL') ? user.speaking : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 w-6 h-6 rounded-lg" type="checkbox" name='english_exam_type' value="Toefl" checked={user.english_exam_type == ('Pte' || 'pte' || 'PTE') ? true : ''} />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                PTE
                                            </label>
                                        </div>
                                        <div className="col-md-10 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg max-w-xs" placeholder="Total Score" value={user.english_exam_type == ('Pte' || 'pte' || 'PTE') ? user.listing + user.listing + user.reading + user.writing + user.speaking : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Listening" name='listing' value={user.english_exam_type == ('Pte' || 'pte' || 'PTE') ? user.listing : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Reading" name="reading" value={user.english_exam_type == ('Pte' || 'pte' || 'PTE') ? user.reading : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Writing" name='writing' value={user.english_exam_type == ('Pte' || 'pte' || 'PTE') ? user.writing : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-md-5 mt-3">
                                            <input type="text" className="form-control rounded-lg" placeholder="Speaking" name='speaking' value={user.english_exam_type == ('Pte' || 'pte' || 'PTE') ? user.speaking : ''} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 w-6 h-6 rounded-lg" type="checkbox" value="Duolingo" checked={user.english_exam_type == ('Duolingo' || 'duolingo' || 'DUOLINGO') ? true : ''} />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                Duolingo
                                            </label>
                                        </div>
                                        <div className="col-md-10 md:ml-12 mt-3">
                                            <input type="text" className="form-control rounded-lg max-w-xs" placeholder="Total Score" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col-md-1">
                                            <input className="md:ml-4 md:mt-0.5 w-6 h-6 rounded-lg" type="checkbox" value="I don't have this" name='english_exam_type' />
                                        </div>
                                        <div className="col-md-10">
                                            <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                                I don't have this
                                            </label>
                                        </div>

                                    </div>
                                    {/* <div className='row mt-3'>
                                    <div className="col-md-1">
                                        <input className="md:ml-4 md:mt-0.5 w-6 h-6 rounded-lg" type="checkbox" value="" />
                                    </div>
                                    <div className="col-md-10">
                                        <label className="form-check-label text-2xl font-serif font-thin" htmlFor="flexCheckDefault">
                                            Not yet, but I will in the future
                                        </label>
                                    </div>
                                    <div className="col-md-10">
                                        <p className="text-sm text-gray-400 mt-2 md:ml-8">*If you haven't taken a test yet, First Flight can help you take it in the future.</p>
                                    </div>
                                </div> */}
                                </div>

                                <div className="btn-group w-full" role="group" aria-label="Basic example">
                                    <Link href={route('education')} className="btn bg-primary text-2xl md:ml-8 md:mr-2 mr-2 btn-group tracking-wide font-semibold w-full py-2 mt-4 btn-primary"><p className='text-center items-center ml-14 md:ml-28 lg:ml-28'>Previous</p></Link>
                                    <input type="submit" className="btn bg-primary text-2xl md:mr-8 md:ml-2 pl-8 btn-group tracking-wide font-semibold w-full py-2 mt-4 btn-primary" value="Explore Programs" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}
