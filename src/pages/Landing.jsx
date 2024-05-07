import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Landing = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="text-center">
                <h1 className="text-4xl text-white font-bold mb-6">Welcome to My Portfolio</h1>
                <p className="text-lg text-white mb-8">Explore my projects, experience, and more!</p>
                <Link to="/terminal-portfolio" className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300">Enter Terminal Portfolio</Link>
            </div>
        </div>
    );
}

export default Landing;