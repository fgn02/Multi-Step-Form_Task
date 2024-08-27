import React from 'react';

const Step3 = ({ nextStep, prevStep, handleFormData, values }) => {

    const handleChange = (e) => {
        handleFormData({ [e.target.name]: e.target.files[0] });
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Image Upload:</h2>

            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Upload Your Photo:</label>
                <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="photo"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Upload Signature Photo:</label>
                <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    name="signaturePhoto"
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
                    Submit
                </button>

            </div>
        </div>
    );
};

export default Step3;
