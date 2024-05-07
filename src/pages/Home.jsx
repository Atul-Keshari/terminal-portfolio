import React, { useState, useEffect } from 'react';
import TerminalLayout from '../components/TerminalLayout';
import Terminal from '../components/Terminal';
import getUserInfo from './getUserInfo';

const Home = () => {
  const terminalRef = React.createRef();
  const [terminalOpen, setTerminalOpen] = useState(false);
  const { USER, COMMANDS } = getUserInfo("johndoe");
  const [isLoading, setIsLoading] = useState(true);
  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      {
        !terminalOpen &&
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold mb-6">Welcome to My Portfolio</h1>
          <p className="text-lg text-white mb-8">Explore my projects, experience, and more!</p>
          <button onClick={() => setTerminalOpen(true)} className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300">Enter Terminal Portfolio</button>
        </div>
      }
      {
        terminalOpen && (
          <Terminal
            COMMANDS={COMMANDS}
            USER={USER}
            terminalRef={terminalRef}
            userName={USER.name}
            theme={USER.theme}
            setTerminalOpen={setTerminalOpen}
            isLoading={[
              isLoading,
              setIsLoading
            ]}
          />
        )
      }
    </div>

  );
};

export default Home;