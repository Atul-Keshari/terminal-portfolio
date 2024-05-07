import React, { useState, useEffect, useRef } from 'react';
import TerminalControls from './_comp/TerminalControls';
import TerminalHistory from './_comp/TerminalHistory';
import TerminalInput from './_comp/TerminalInput';
import TerminalLayout from './TerminalLayout';
import {
  changeTheme
} from './_comp/utils';




const Terminal = ({
  theme = "blue-hacker",
  COMMANDS,
  userName,
  USER,
  setTerminalOpen,
  isLoading
}) => {
  useEffect(() => {
    changeTheme(theme);
  }, [theme]);
  const [terminalHistory, setTerminalHistory] = useState([{
    command: 'welcome',
    output: [
      `
        <div class="text-primary-text">
          <h1 class="text-3xl font-bold">Welcome to my Terminal Portfolio!</h1>
          <p class="mt-4 text-secondary-text">
            Greetings, fellow tech enthusiast! I'm excited to share my journey with you through this interactive terminal interface. 
          </p>
          <p class="mt-2 text-secondary-text">
            Feel free to explore the available commands and discover more about my background, skills, projects, and social connections. 
          </p>
          <p class="mt-2 text-secondary-text">
            Let's embark on an adventure together and uncover the stories behind my work. Type <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">help</span> to see the list of available commands.
          </p>
        </div>
      `
    ]
  }]);
  const terminalRef = useRef(null);
  const [ExtraTabs, setExtraTabs] = useState([]);
  const [focusOnInput, setFocusOnInput] = useState(false);
  useEffect(() => {
    const handleTerminalClick = () => {
      setFocusOnInput((prevFocus) => !prevFocus);
    }
    terminalRef.current.addEventListener('click', handleTerminalClick);
    return () => {
      terminalRef.current && terminalRef.current.removeEventListener('click', handleTerminalClick);
    }
  }, []);

  const scrollToBottom = () => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, [terminalHistory]);
  const handleCommandSubmit = (command) => {
    let output = [];
    command = command.trim().toLowerCase();
    if (command.startsWith('project ')) {
      var n = parseInt(command.split(' ')[1]);
      if (n > 0 && n <= USER.projects.length) {
        output = `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold">Project Details</h2>
            <h3 class="text-xl font-bold">${USER.projects[n - 1].name}</h3>
            <p class="mt-2 text-secondary-text">${USER.projects[n - 1].description}</p>
            <div class="mt-2">
              <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">
                ${USER.projects[n - 1].technologies.join('</span><span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">')}
              </span>
            </div>
            <div class="mt-2">
              <a href="${USER.projects[n - 1].github}" class="text-primary-color hover:underline">
                <i class="fa-solid fa-up-right-from-square mr-1"></i>
                GitHub
              </a>
            </div>
          </div>
        `;
        setExtraTabs([...ExtraTabs, output]);
      }
      else {
        output = `
          <div class="text-primary-text">
            <p>Project not found. Please enter a valid project number.</p>
          </div>
        `;
      }
    }
    switch (command) {
      case 'clear':
        setTerminalHistory([]);
        return;
      case 'change-theme':
        const thme = changeTheme("switch");

        output = `
          <div class="text-primary-text">
            <p>Theme changed to <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">${thme}</span>.</p>
          </div>
        `;
        break;
      case 'help':
        const extraCommands = ['change-theme', 'clear', 'project [number]', 'exit'];
        output = `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold mb-4">Available Commands</h2>
            ${COMMANDS.map((cmd) => `
              <div class="flex items-start mb-4">
                <div class="bg-primary-color text-primary-bg px-2 py-1 rounded-md mr-4">
                  ${cmd.command}
                </div>
                <p class="text-secondary-text">${cmd.usage}</p>
              </div>
            `).join('')}

            <h2 class="text-2xl font-bold mt-4">Extra Commands</h2>
            <div class="flex items-start mb-4">
              <div class="bg-primary-color text-primary-bg px-2 py-1 rounded-md mr-4">
                ${extraCommands.join('</div><div class="bg-primary-color text-primary-bg px-2 py-1 rounded-md mr-4">')}
              </div>
            </div>
          </div>
        `;
        break;
      case 'exit':
        window.close();
        break;
      case 'project 1':
      case 'project 2':
      case 'project 3':
      case 'project 4':
      case 'project 5':
        output = `
          <div class="text-primary-text">
            <h2 class="text-2xl font-bold">Project Details</h2>
            <h3 class="text-xl font-bold">${USER.projects[parseInt(command.split(' ')[1]) - 1].name}</h3>
            <p class="mt-2 text-secondary-text">${USER.projects[parseInt(command.split(' ')[1]) - 1].description}</p>
            <div class="mt-2">
              <span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">
                ${USER.projects[parseInt(command.split(' ')[1]) - 1].technologies.join('</span><span class="mr-2 bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">')}
              </span>
            </div>
            <div class="mt-2">
              <a href="${USER.projects[parseInt(command.split(' ')[1]) - 1].github}" class="text-primary-color hover:underline">
                <i class="fa-solid fa-up-right-from-square mr-1"></i>
                GitHub
              </a>
            </div>
          </div>
        `;
        setExtraTabs([...ExtraTabs, output]);
        break;
      default:
        const cmd = COMMANDS.find((item) => item.command === command);
        if (cmd && cmd.isAvailable) {
          output = cmd.description;
          break;
        }
        const sortedCommands = COMMANDS.filter((cmd) => cmd.isAvailable).map((cmd) => cmd.command);
        const userCommand = command.trim().toLowerCase().split("").sort().join("");
        let high = 0;
        let highIndex = 0;

        for (let i = 0; i < sortedCommands.length; i++) {
          const cmd = sortedCommands[i].split("").sort().join("");
          let count = 0;
          for (let j = 0; j < userCommand.length; j++) {
            if (cmd.includes(userCommand[j])) {
              count++;
            }
          }
          if (count > high) {
            high = count;
            highIndex = i;
          }
        }
        output = `
          <div class="text-primary-text">
            <p>Command not found. Did you mean <span class="bg-primary-color px-2 py-1 rounded-md text-white text-sm">${COMMANDS[highIndex].command}</span>?</p>
          </div>
        `;
        break;
    }

    setTerminalHistory((prevHistory) => [
      ...prevHistory,
      { command, output: Array.isArray(output) ? output : [output] },
    ]);
  };


  return (
    <>
      <TerminalLayout terminalRef={terminalRef}
        className={"terminal bg-primary-bg text-primary-text p-0 pt-0 rounded-lg shadow-lg md:w-3/4 w-11/12 md:mt-0 overflow-y-auto flex flex-col relative border-2 border-primary-color border-opacity-50 h-[80vh] max-h-[90vh]"}
        setTerminalOpen={setTerminalOpen}
      >
        <div className="flex flex-col p-4 flex-1">
          <TerminalHistory scrollToBottom={scrollToBottom} userName={userName} history={terminalHistory}
            isLoading={isLoading}
          />
          <TerminalInput
            suggestedCommands={COMMANDS.filter((cmd) => cmd.isAvailable).map((cmd) => cmd.command)}
            focusOnInput={focusOnInput}
            scrollToBottom={scrollToBottom}
            onSubmit={handleCommandSubmit}
          />
        </div>
      </TerminalLayout>
      {
        ExtraTabs.map((tab, index) => (
          <TerminalLayout key={index} terminalRef={terminalRef}
            setTerminalOpen={()=>{
              // setExtraTabs(ExtraTabs.filter((_, i) => i !== index));
            }}
            styles={
              {
                "position": "absolute"
              }
            }
          >
            <div className="flex flex-col p-4 flex-1">
              <div dangerouslySetInnerHTML={{ __html: tab }}></div>
            </div>
          </TerminalLayout>
        ))

      }
    </>
  );

}

export default Terminal;
