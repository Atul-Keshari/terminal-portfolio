import React, { useEffect, useState } from 'react';

const TerminalInput = ({ onSubmit, scrollToBottom, focusOnInput, suggestedCommands }) => {
    const [command, setCommand] = useState('');
    const inputRef = React.createRef();
    // const suggestedCommands = ['about', 'projects', 'skills', 'social', 'education', 'certifications', 'experience', 'languages', 'hobbies', 'interests', 'welcome', 
    // 'project 1', 'project 2', 'project 3', 'project 4', 'project 5', 'clear', 'change-theme', 'help', 'exit']
    // add more commands here
    useEffect(() => {
        suggestedCommands.push(
            'change-theme', 'clear', 'project [number]', 'exit'
        )
    }, [suggestedCommands]);
    const handleInputChange = (e) => {
        setCommand(e.target.value);
        scrollToBottom();
    };
    useEffect(() => {
        if (1||focusOnInput) {
            inputRef.current.focus();
        }
    }, [focusOnInput]);
    

    const handleAutocomplete = (selectedCommand) => {
        setCommand(selectedCommand);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const filteredCommands = suggestedCommands.filter((cmd) => cmd.startsWith(command));
            if (filteredCommands.length === 1) {
                setCommand(filteredCommands[0]);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(command);
        setCommand('');
    };

    const filteredCommands = command.length >= 1 ? suggestedCommands.filter((cmd) => cmd.includes(command)).slice(0, 5) : [];

    return (
        <form onSubmit={handleSubmit} className="flex mt-4">
            <p className="text-primary-color">$</p>
            <input
                ref={inputRef}
                value={command}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="bg-primary-bg text-primary-text ml-2 flex-1 focus:outline-none"
                placeholder="Enter a command"
            />
            {filteredCommands.length > 0 && (
                <div className="absolute z-10 bg-primary-bg text-primary-text mt-8 p-2 rounded-lg w-full">
                    <div className="flex flex-wrap justify-start">
                        {filteredCommands.map((cmd) => (
                            <div
                                key={cmd}
                                onClick={() => handleAutocomplete(cmd)}
                                className="cursor-pointer hover:bg-primary-color hover:text-primary-bg px-2 py-1 rounded-md mr-2 mb-2"
                            >
                                {cmd}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </form>
    );
};

export default TerminalInput;
