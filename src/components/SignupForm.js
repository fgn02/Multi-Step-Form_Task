import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCamera, faCheck } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SignupForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        contactNo: '',
        photo: null
    });

    const nextStep = () => {
        // Validate before moving to the next step
        if (step === 1 && (!formData.email || !formData.username || !formData.password || !formData.confirmPassword)) {
            alert("Please fill in all fields in this step.");
        } else if (step === 1 && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
        } else if (step === 2 && (!formData.firstName || !formData.lastName || !formData.contactNo)) {
            alert("Please fill in all fields in this step.");
        } else {
            setStep(step + 1);
        }
    };

    const prevStep = () => setStep(step - 1);

    const handleFormData = (data) => setFormData({ ...formData, ...data });

    const calculateProgress = () => (step / 4) * 100;

    const renderProgressBar = () => (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step >= 1 ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <span className={`ml-2 font-semibold ${step >= 1 ? "text-purple-600" : "text-gray-600"}`}>Account</span>
            </div>
            <div className="flex-1 mx-4 border-t-2" style={{ borderColor: step >= 2 ? '#6B46C1' : '#CBD5E0' }}></div>
            <div className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step >= 2 ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <span className={`ml-2 font-semibold ${step >= 2 ? "text-purple-600" : "text-gray-600"}`}>Personal</span>
            </div>
            <div className="flex-1 mx-4 border-t-2" style={{ borderColor: step >= 3 ? '#6B46C1' : '#CBD5E0' }}></div>
            <div className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step >= 3 ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                    <FontAwesomeIcon icon={faCamera} />
                </div>
                <span className={`ml-2 font-semibold ${step >= 3 ? "text-purple-600" : "text-gray-600"}`}>Image</span>
            </div>
            <div className="flex-1 mx-4 border-t-2" style={{ borderColor: step === 4 ? '#6B46C1' : '#CBD5E0' }}></div>
            <div className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step === 4 ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <span className={`ml-2 font-semibold ${step === 4 ? "text-purple-600" : "text-gray-600"}`}>Finish</span>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-left custom-font text-purple-600 mb-4">SIGN UP YOUR USER ACCOUNT</h2>
            <p className="text-left text-gray-500 mb-4">Fill all form fields to go to the next step</p>

            <p className="text-left text-gray-500 mb-4">Step {step} - 4</p>

            <ProgressBar now={calculateProgress()} animated striped className="mb-6" />

            {renderProgressBar()}

            {step === 1 && <Step1 nextStep={nextStep} handleFormData={handleFormData} values={formData} />}
            {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} values={formData} />}
            {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} values={formData} />}
            {step === 4 && <Step4 prevStep={prevStep} />}
        </div>
    );
};

export default SignupForm;
