import React from 'react'
import TerminalControls from './_comp/TerminalControls';

const TerminalLayout = ({
    children,
    className,
    terminalRef,
    styles,
    setTerminalOpen
}) => {
    console.log("TerminalLayout -> setTerminalOpen", setTerminalOpen)
    const scrollToBottom = () => {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    };

    return (
        <div
            resize='both'
            ref={terminalRef}
            className={"terminal appear"
                + (className ? ` ${className}` : ' bg-primary-bg text-primary-text p-0 pt-0 rounded-lg shadow-lg overflow-y-auto flex flex-col relative border-2 border-primary-color border-opacity-50 min-w-[40vw] min-h-[40vh] max-w-full max-h-full')
            }
            style={styles}
        >
            <TerminalControls onClose={(e) => {
                // e.target.closest('.terminal').classList.add('hidden');
                // setTimeout(() => {
                //     e.target.closest('.terminal').classList.remove('hidden');
                // }, 1000);
                e.target.closest(".terminal").classList.add('fadeHide');
                setTimeout(()=>{
                    setTerminalOpen(false);
                }, 800);
            }}/>
            <div className="flex flex-col flex-1">
                {children}
            </div>
        </div>
    );
}

export default TerminalLayout


