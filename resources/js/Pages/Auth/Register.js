import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <ApplicationLogo className="w-full" />
                    </div>
                    {/* <Guest> */}
                    <Head title="Register" />

                    <ValidationErrors errors={errors} />


                    <div className="md:w-8/12 lg:w-3/12 lg:ml-20">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <Label forInput="first_name" value="First Name *" />
                                <Input
                                    type="text"
                                    name="first_name"
                                    value={data.first_name}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    autoComplete="first_name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Label forInput="middle_name" value="Middle Name *" />
                                <Input
                                    type="text"
                                    name="middle_name"
                                    value={data.middle_name}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    autoComplete="first_name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Label forInput="last_name" value="Last Name *" />
                                <Input
                                    type="text"
                                    name="last_name"
                                    value={data.last_name}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    autoComplete="first_name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Label forInput="email" value="Email *" />
                                <Input
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    autoComplete="first_name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Label forInput="password" value="Password *" />
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Label forInput="password_confirmation" value="Confirm Password *" />
                                <Input
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">

                                <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900 mx-3">
                                    Already registered?
                                </Link>
                            </div>

                            <button
                                processing={processing}
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Register
                            </button>

                            <div
                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0"></p>
                            </div>

                        </form>

                        {/* </Guest> */}
                    </div>
                </div>
            </div>
        </section >
    );
}
