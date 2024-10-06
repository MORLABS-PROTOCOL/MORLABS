// import React from 'react';
import Image from 'next/image';
import "../styles/globals.css";

import React, { useState } from 'react';
import ConnectWalletModal from './connect-wallet'; // Import the modal
import { FixedPlugin } from "@/components";


// const SignUpForm: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isButtonActive, setIsButtonActive] = useState(false);

//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const handleNextStep = () => {
//     if (step === 1) {
//       if (name && email.includes('@')) {
//         setStep(2);
//         setIsButtonActive(false); // Reset button for next step
//       }
//     } else if (step === 2) {
//       if (password && password === confirmPassword) {
//         setStep(3);
//         setIsButtonActive(true);
//       }
//     }
//   };

//   const handleInputChange = () => {
//     if (step === 1) {
//       setIsButtonActive(!!(name && email.includes('@')));
//     } else if (step === 2) {
//       setIsButtonActive(!!(password && confirmPassword));
//     }
//   };


const SignUpForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleNextStep = async() => {
    if (step === 1) {
      if (name && email.includes('@')) {
        setStep(2);
        setIsButtonActive(false); // Reset button for next step
      }
    } else if (step === 2) {
      if (password && password === confirmPassword) {
        await handleSubmit(); // Call the API when user reaches the last step
        setStep(3)
      }
    }
  };

  const handleInputChange = () => {
    if (step === 1) {
      setIsButtonActive(!!(name && email.includes('@')));
    } else if (step === 2) {
      setIsButtonActive(!!(password && confirmPassword));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    try {
      // Clear any previous error messages
      setError('');
      setSuccessMessage('');

      // Make the POST request
      const response = await fetch('https://morlabsprotocol.vercel.app/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Successfully joined the waitlist', result);

  } catch (err) {
    setError('There was a problem with the fetch operation:', err);
  }
    //     setSuccessMessage('You have successfully joined the waitlist!');
    //     setStep(2); // Move to the final step after successful submission
    //   } else {
    //     setError('Failed to join the waitlist. Please try again.');
    //   }
    // } catch (err) {
    //   setError('An error occurred. Please try again later.');
    // }
  };

// const SignUpForm: React.FC = () => {
  return (
    <>
    <div className="bg-white p-6 max-w-md mx-auto border border-gray-500 rounded-lg shadow-lg mt-10">
      {/* Logo */}
      <div className="justify-center m-3 text-center">
          <span className="text-4xl" style={{ color: "#00FF99" }}>
            m
          </span>{" "}<a href="#" className="text-xl font-bold text-black">morlabs</a>

      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mt-4">Join our journey and get early access</h1>
      <p className="text-center text-gray-500 mt-2">
        Join our extensive waitlist today and get notified when we launch 🎉
      </p>

      {/* Profile images */}
      <div className="flex justify-center items-center space-x-2 mt-4 pb-3">
        {/* Array of images (you can replace these with actual image URLs) */}
        {['/image/avatar1.jpg', '/image/user1.png', '/image/user2.png', '/image/user3.png', '/image/avatar1.jpg', '/image/user3.png'].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`User ${index + 1}`}
            className="h-10 w-10 rounded-full object-cover"
            width={80}
            height={80}
          />
        ))}
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-200 text-gray-800">
          +10
        </div>
      </div>

      {step === 1 && (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tell us your name..."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                handleInputChange();
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleInputChange();
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button 
        type="submit" 
        className={`w-full px-4 py-2 mt-4 rounded-lg ${
          isButtonActive ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-300 cursor-not-allowed'
        }`}
        disabled={!isButtonActive}
      >
        Continue
      </button>
          </form>
        </>
      )}

      {step === 2 && (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleInputChange();
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm password..."
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                handleInputChange();
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
             {/* <button 
        type="submit" 
        className={`w-full px-4 py-2 mt-4 rounded-lg ${
          isButtonActive ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-300 cursor-not-allowed'
        }`}
        disabled={!isButtonActive}
      >
        Continue
      </button> */}
          </form>
        </>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}

      {/* <button
        onClick={handleNextStep}
        disabled={!isButtonActive}
        className={`mt-4 px-4 py-2 rounded-lg ${isButtonActive ? 'bg-green-500' : 'bg-gray-300'}`}
      >
        {step === 1 ? 'Next' : 'Join Waitlist'}
      </button> */}





      {/* {step === 1 && (
          <>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Tell us your name..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handleInputChange();
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleInputChange();
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <form className="space-y-4">
              <input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleInputChange();
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm password..."
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  handleInputChange();
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </form>
          </>
        )} */}

        {step === 3 && (
          <div className="text-center">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg w-full"
          onClick={openModal}
        >
          Continue with Solana
        </button>
            {/* <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg focus:outline-none">
              Continue with Solana
            </button> */}
            {/* Modal for Solana Wallet */}
        {isModalOpen && <ConnectWalletModal closeModal={closeModal} />}
          </div>
        )}

        {step > 1 && (
          <button
            className={`w-full px-4 py-2 mt-4 rounded-lg ${
              isButtonActive ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-300 cursor-not-allowed'
            }`}
            disabled={!isButtonActive}
            onClick={handleNextStep}
          >
            Continue
          </button>
        )}

        {/* Dots indicating progress */}
        <div className="flex justify-center mt-6 space-x-2">
          <div
            className={`w-3 h-3 rounded-full ${
              step >= 1 ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full ${
              step >= 2 ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full ${
              step >= 3 ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
        </div>

        <p className="text-gray-500 text-sm mt-6 text-center">
          By clicking &quot;continue&quot; you agree to our{' '}
          <a href="#" className="text-green-500">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-green-500">
            Terms of Use
          </a>
        </p>
      
    </div>
    <FixedPlugin />
    </>
  );
};

export default SignUpForm;
