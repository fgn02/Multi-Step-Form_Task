import React, { useState } from 'react';

const Step1 = ({ nextStep, handleFormData, values }) => {
    const [error, setError] = useState('');

    const handleChange = (input) => (e) => {
        handleFormData({ [input]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            setError('Passwords don\'t match!');
        } else {
            setError('');
            nextStep();
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto left mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-left custom-font mb-3 text-left">Account Information:</h2>
            <div className="w-full max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange('username')}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange('password')}
                        />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Step1;
