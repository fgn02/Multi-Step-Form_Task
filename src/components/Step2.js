import React from 'react';

const Step2 = ({ nextStep, prevStep, handleFormData, values }) => {

    const handleChange = (e) => {
        handleFormData({ [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center custom-font mb-4">Personal Information:</h2>

            <div className="mb-3">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="contactNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                <input
                    type="text"
                    id="contactNo"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                    name="contactNo"
                    value={values.contactNo}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="altContactNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alternative Contact Number</label>
                <input
                    type="text"
                    id="altContactNo"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                    name="altContactNo"
                    value={values.altContactNo}
                    onChange={handleChange}
                />
            </div>

            {/* Flexbox for buttons */}
            <div className="buttons-container">
                <button
                    className="previous-button"
                    type="button"
                    onClick={prevStep}
                >
                    Previous
                </button>
                <button
                    className="next-button"
                    type="button"
                    onClick={nextStep}
                >
                    Next
                </button>

            </div>
        </div>
    );
};

export default Step2;
