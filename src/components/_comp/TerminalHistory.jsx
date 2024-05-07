import { comma } from 'postcss/lib/list';
import React, { useState, useEffect, useCallback } from 'react';

const TypewriterEffect = ({ text, scrollToBottom,offset=10,isLoading }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const nextIndex = prevText.length + offset;
        const nextText = text.slice(0, nextIndex);
        if (nextIndex >= text.length) {
          scrollToBottom();
          clearInterval(interval);
          isLoading[1](false);
        }
        return nextText;
      });
    }, 0);

    return () => clearInterval(interval);
  }, [text, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [
    displayText,
    scrollToBottom,
  ]);

  return <span dangerouslySetInnerHTML={{ __html: displayText }} />;
};

const TerminalHistory = ({ history, userName, scrollToBottom,isLoading }) => {
  const renderHistoryItem = useCallback(
    (item, index) => (
      <div key={index} className="flex flex-col space-y-2">
        <div className="flex items-center">
          <p className="text-primary-color">{`${userName || 'anonymous'}@portfolio:~$`}</p>
          <p className="ml-2 text-primary-text">{item.command}</p>
        </div>
        <div className="ml-6">
          {item.output.map((output, outputIndex) => (
            <p key={outputIndex}>
              <TypewriterEffect text={output} scrollToBottom={scrollToBottom}
                offset={isLoading[0]?6:10}
                isLoading={isLoading}
              />
            </p>
          ))}
        </div>
      </div>
    ),
    [userName, scrollToBottom]
  );

  if (isLoading[0]) return <div className="flex flex-col mt-4 space-y-2">
    {
      [{
        command: "Loading...",
        output: [`
      <div class="text-primary-text">
      <h2 class="text-2xl font-bold">Loading...</h2>

      ${[
        "Loading...",
        "Initializing components...".split("").join("$"),
        "Executing scripts...".split("").join("$"),
        "Optimizing performance...".split("").join("$")
        ,
        "A$d$d$i$n$g$ $e$m$o$j$i$s $😎$💻$🚀",
        "Complete! Welcome!".split("").join("$"),
      ].map((text) => {
              return `<div class="mt-4">
            <h3 class="text-xl font-bold">
                <i class="fa-solid fa-spinner mr-2 text-primary-color"></i>
                ${text.replaceAll("$", "")}
            </h3>
            <div class="mt-2 flex flex-wrap gap-2">
                ${text.split("$")
                  .map((char, index) => {
                    return `<span class="bg-primary-color px-2 py-1 rounded-md text-primary-bg text-sm">${char}</span>`;
                  })
                  .join("")}
            </div>
        </div>`;
            })
            .join("")}
    </div>
      `]
      }].map(renderHistoryItem)
    }
  </div>;

  return <div className="flex flex-col mt-4 space-y-2">{history.map(renderHistoryItem)}</div>;
};

export default TerminalHistory;