import React from 'react';

const Step4 = ({ prevStep }) => {
    return (
        <div className="w-full max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="custom-font">Success!</h2>


            <div>

                <p className="text-center custom-font">You have successfully signed up.</p>
            </div>

            <button
                onClick={prevStep}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Back
            </button>
        </div>
    );
};

export default Step4;
