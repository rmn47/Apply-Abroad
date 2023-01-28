import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios'
import { Inertia } from '@inertiajs/inertia'
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import Iframe from '@/Components/Iframe';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import Select, { AriaOnFocus } from 'react-select';

export default function Applications(props) {

    const { post } = useForm({
        program_id: props.programs.id,
    })


    function handleSubmit(e) {
        e.preventDefault()
        post('/set_user_program')
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            {props.schools ?
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <h1 className="mt-4 mb-4 text-5xl italic hover:not-italic font-semibold"> {props.schools[0].name}</h1>
                        <h4 className="mt-2 mb-2 ml-4 italic hover:not-italic font-semibold">{props.schools[0].country.name},{props.schools[0].location}</h4>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="container-fluid p-6 bg-white border-b border-gray-200">

                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <img src={props.schools[0].coverImage} className="d-block w-100 max-h-96" alt="..." />
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
                                    <h1 className='fs-1'><b>About</b></h1>
                                    <div>&nbsp;</div>
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div className="row">

                                            <p>
                                                {props.schools[0].about}
                                            </p>
                                        </div>
                                    </div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <h1 className='fs-1'><b>Feature</b></h1>
                                    <div>&nbsp;</div>
                                    <p>
                                        <button className="
                                                accordion-button
                                                collapsed
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-3
                                                px-5
                                                text-base text-gray-800 text-left
                                                bg-white
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none
                                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                            aria-controls="collapseOne">
                                            Post Graduation Permit
                                        </button>
                                    </p>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                    <p>
                                        <button className="
                                                accordion-button
                                                collapsed
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-3
                                                px-5
                                                text-base text-gray-800 text-left
                                                bg-white
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none
                                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            Co-op/Internship Participation
                                        </button>
                                    </p>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                    <p>
                                        <button className="
                                                accordion-button
                                                collapsed
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-3
                                                px-5
                                                text-base text-gray-800 text-left
                                                bg-white
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none
                                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Work While Studing
                                        </button>
                                    </p>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                    <p>
                                        <button className="
                                                accordion-button
                                                collapsed
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-3
                                                px-5
                                                text-base text-gray-800 text-left
                                                bg-white
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none
                                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            Condition Offer Letter
                                        </button>
                                    </p>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                    <p>
                                        <button className="
                                                accordion-button
                                                collapsed
                                                relative
                                                flex
                                                items-center
                                                w-full
                                                py-3
                                                px-5
                                                text-base text-gray-800 text-left
                                                bg-white
                                                border-0
                                                rounded-none
                                                transition
                                                focus:outline-none
                                            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">
                                            Accommodations
                                        </button>
                                    </p>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                    <p><small>*Information listed is subject to change without notice and should not be construed as a commitment by FirstFlight Inc.</small></p>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <h1 className='fs-1'><b>Location</b></h1>
                                    <div>&nbsp;</div>
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div className="row">
                                            <iframe className="d-block w-100 h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0100292181605!2d-79.39501558456308!3d43.647959679121435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34da8aee1cc5%3A0xe33e5e782614a865!2sOxford%20International%20%2F%20Toronto%20IELTS%20Test%20Centre!5e0!3m2!1sen!2sin!4v1651567397182!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <h1 className='fs-1'><b>Programs</b> <small className='bg-gray-200 fs-5 font-thin md:mb-2 p-1 rounded-full'> {props.programs_count}</small></h1>
                                    {props.programs ? props.programs.map(program => {
                                        return (<div className="p-6 mt-4 rounded-lg bg-white border-b border-gray-200">
                                            <form onSubmit={handleSubmit} enctype="multipart/form-data">
                                                <div className="row">
                                                    <div className='col-2'>
                                                        <div className="text-center mt-12">
                                                            <svg aria-hidden="true" data-testid="icon-english" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_1044:40658)"><path fill="#F47782" d="M5.348 49.138l51.43-6.364.454 3.674-51.43 6.364z"></path><path d="M54.518 45.718l-46.26 5.725a1.017 1.017 0 01-1.135-.885l-.33-2.664 48.28-5.974.33 2.663a1.018 1.018 0 01-.885 1.135z" fill="#70A7FF"></path><path d="M3.58 18.706c8.918-2.114 19.2-1.123 23.543-.28l3.74 30.22c-5.903-1.052-15.984-.413-22.451.741-1.843.329-3.678-.906-3.908-2.763l-3.06-24.725c-.18-1.46.704-2.854 2.136-3.193z" fill="#fff"></path><path d="M50.54 12.899c-9.362.136-19.32 3.637-23.417 5.526l3.74 30.22c5.607-2.483 15.804-4.352 22.49-4.815 1.863-.13 3.336-1.772 3.106-3.625L53.4 15.479c-.18-1.465-1.384-2.602-2.86-2.58z" fill="#BED9FF"></path><path d="M5.803 52.812l51.429-6.364c.072.58-.34 1.108-.92 1.18l-49.33 6.104a1.058 1.058 0 01-1.18-.92z" fill="#F47782"></path><ellipse cx="31.647" cy="50.679" rx="2.644" ry="1.058" transform="rotate(-7.054 31.647 50.68)" fill="#F47782"></ellipse><path d="M6.069 22.674c3.827-.651 12.647-1.565 17.315-.012M7.341 32.959c3.827-.651 12.648-1.565 17.316-.011M6.692 27.711c3.827-.65 12.647-1.565 17.315-.011M7.99 38.207c3.828-.652 12.648-1.566 17.316-.012M8.64 43.454c3.827-.651 12.648-1.565 17.316-.011M49.85 27.699c-3.871.301-12.648 1.565-16.797 4.21M49.2 22.45c-3.87.302-12.647 1.566-16.795 4.21M50.498 32.946c-3.87.302-12.647 1.565-16.795 4.21" stroke="#579FFF" stroke-width="2"></path><path d="M47.272 39.155L43.148 5.831c-6.22 1.41-12.943 8.795-15.527 12.312l3.799 30.7c3.705-4.508 12.111-8.337 15.852-9.688z" fill="#fff"></path><path d="M13.685 43.311L9.561 9.987c6.376-.15 14.696 5.375 18.06 8.156l3.799 30.7c-4.692-3.47-13.778-5.133-17.735-5.532z" fill="#D0E4FF"></path><path d="M31.745 49.135c-4.767-3.492-14.004-5.16-18.027-5.557L9.561 9.988c7.887.844 18.352 7.899 18.352 7.899 5.072-6.686 8.344-9.682 15.943-11.863L47.999 38.5" stroke="#579FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.62 18.142l3.8 30.7M31.42 48.843c2.8-1.768 11.444-5.253 23.617-5.054" stroke="#579FFF" stroke-width="2" stroke-linecap="round"></path><circle cx="15.74" cy="22.159" r="1" transform="rotate(-.639 15.74 22.159)" fill="#579FFF"></circle><path stroke="#579FFF" stroke-width="2" d="M18.656 22.293l8.975.667"></path><circle cx="16.444" cy="26.145" r="1" transform="rotate(-.639 16.444 26.145)" fill="#579FFF"></circle><path stroke="#579FFF" stroke-width="2" d="M19.36 26.28l6.981.518"></path><circle cx="17.148" cy="30.132" r="1" transform="rotate(-.639 17.148 30.132)" fill="#579FFF"></circle><path stroke="#579FFF" stroke-width="2" d="M20.058 30.419l5.984.444"></path><path d="M27.225 36.838l-2.33-2.197 22.204-23.914a1.586 1.586 0 012.255-.075c.643.607.677 1.624.075 2.272L27.225 36.838zM23.638 39.11c-.439.27-.952-.214-.714-.673l1.97-3.796 2.372 2.236-3.628 2.233z" fill="#1E6DEB"></path></g><defs><clipPath id="prefix__clip0_1044:40658"><path fill="#fff" d="M0 0h60v60H0z"></path></clipPath></defs></svg>
                                                        </div>
                                                    </div>
                                                    <div className='col-10'>
                                                        <Link href={route('program', program.id)}><h3 className='fs-3'>{program.name}</h3></Link>
                                                        <h6 className='fs-6 mt-2'>{props.schools[0].name}</h6>
                                                        <table className="table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Earliest intake</th>
                                                                    <th scope="col">Deadline</th>
                                                                    <th scope="col">Tution</th>
                                                                    <th scope="col">Application fee</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{program.start_date}</td>
                                                                    <td>{program.submission_deadline}</td>
                                                                    <td>${program.tuition} CAD</td>
                                                                    <td>{program.application_fee}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                            <Link href={route('set_user_program', program.id)} className="btn btn-outline-primary">Apply Now</Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        );
                                    }) : "No data were found"}
                                </div>
                                <div className='col-md-4 col-sm-12'>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <h3 className='fs-4'><i>Institution Details</i></h3>
                                    <div>&nbsp;</div>
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div className="row">
                                            <ul className="list-group list-group-flush inline-block">
                                                <li className="list-group-item">
                                                    Founded
                                                    <p className="text-right">{props.schools[0].foundedIn}</p>
                                                </li>
                                                <li className="list-group-item">
                                                    schools ID
                                                    <p className="text-end">96</p>
                                                </li>
                                                <li className="list-group-item">
                                                    Institution type
                                                    <p className="text-end">{props.schools[0].instituteType}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <h3 className='fs-4'><i>Cost and Duration</i></h3>
                                    <div>&nbsp;</div>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">${props.schools[0].avgApplicationFee} CAD</div>
                                                Application fee
                                            </div>
                                            <span className="badge bg-primary rounded-pill"></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">No data available</div>
                                                Average graduate program
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">No data available</div>
                                                Average undergraduate program
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">${props.schools[0].avgLivingCost} CAD / Year</div>
                                                Cost of living
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">${props.schools[0].avgTutionFee} CAD / Year</div>
                                                Tuition
                                            </div>
                                        </li>
                                    </ul>
                                    <div>&nbsp;</div>

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
