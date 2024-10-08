"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { FaEthereum, FaBitcoin, FaLinkedin, FaGithub } from 'react-icons/fa'; // Placeholder icons
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si'; // Web3 specific icons




// export const JoinWaitlist = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setIsSubmitting(true); // Disable the button while submitting
//     setMessage(''); // Reset the message

//     try {
//       const response = await fetch('https://morlabsprotocol.vercel.app/waitlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setMessage('Successfully joined the waitlist!');
//         setEmail(''); // Reset the email input after successful submission
//       } else {
//         setMessage('Failed to join the waitlist. Please try again.');
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     }

//     setIsSubmitting(false); // Re-enable the button after submitting
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <form onSubmit={handleSubmit} className="flex items-center">
//         <input
//           type="email"
//           value={email}
//           onChange={handleInputChange}
//           placeholder="Email Address"
//           className="mb-2 p-2 border border-gray-100 rounded mr-2 text-black"
//           required
//         />
//         <button
//           type="submit"
//           className="p-2 border-t border-l border-r border-white bg-gree-500 text-white rounded hover:bg-green-900"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Joining...' : 'Join Waitlist'}
//         </button>
//       </form>
//       {message && <p className="mt-4 text-white">{message}</p>}
//     </div>
//   );
// };





// export const JoinWaitlist = () => {
//   const [email, setEmail] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Add your submission logic here
//     console.log('Email submitted:', email);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <form onSubmit={handleSubmit} className="flex items-center">
//         <input
//           type="email"
//           value={email}
//           onChange={handleInputChange}
//           placeholder="Email Address"
//           className="mb-2 p-2 border border-gray-100 rounded mr-2 text-black"
//           required
//         />
//         <button
//           type="submit"
//           className="p-2 border-t border-l border-r border-white bg-gree-500 text-white rounded hover:bg-green-900"
//         >
//           {/* className="px-6 py-3 bg-green-800 rounded-full hover:bg-green-600 transition duration-300 text-white"style={{ backgroundColor: "#00FF99" }} */}
//           Join Waitlist
//         </button>
//       </form>
//     </div>
//   );
// };


export const TrustedCompanies = () => {
  const companies = [
    { name: "Ethereum", icon: <FaEthereum />, link: '#ethereum' },
    { name: "Solana", icon: <SiSolana />, link: '#solana' },
    { name: "Polkadot", icon: <SiPolkadot />, link: '#polkadot' },
    { name: "Chainlink", icon: <SiChainlink />, link: '#chainlink' },
    { name: "Bitcoin", icon: <FaBitcoin />, link: '#bitcoin' },
    // Add more Web3 companies as needed
  ];

  return (
    <section>
      <div className="mx-auto sm:flex justify-center space-x-6">
        {companies.map((company, index) => (
          <div key={index} className="company-card flex flex-col items-center">
            <div className="company-icon text-5xl text-white w-[130px] h-[60px] flex items-center justify-center mb-2p-4 border border-green-500 rounded-lg hover:bg-green-400 transition-all">
              {company.icon}
              <p className="company-name text-sm font-semibold">{company.name}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};


function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white h-full">
      <header className="grid px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14">
          <div className="col-span-1">


            <h1 className="text-5xl font-bold mb-4 text-white">
              Your Gateway to Seamless <br />
              Web3 Integration
            </h1>
            <p className="text-xl font-semibold mb-8 text-white">
              Accelerate Your Web3 Journey: <br />Explore, Build, and Scale With Our API Directory
            </p>

            <div className="">
              {/* <JoinWaitlist/> */}
              <Link href="/signup-form" passHref>
                <button
                  type="submit"
                  className="p-2 border border-white bg-gree-500 text-white rounded hover:bg-green-900"
                >
                  {/* className="px-6 py-3 bg-green-800 rounded-full hover:bg-green-600 transition duration-300 text-white"style={{ backgroundColor: "#00FF99" }} */}
                  JoinWaitlist
                </button>
              </Link>

            </div>
            <p className="mt-6 text-md py-5 font-semibold">Trusted by 100+ B2B companies</p>
            <TrustedCompanies />
          </div>

        </div>
      </header>

    </div>
  );
}
export default Hero;
