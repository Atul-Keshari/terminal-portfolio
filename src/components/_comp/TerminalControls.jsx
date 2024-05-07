import React from 'react';

const TerminalControls = ({ onClose,onDragStart, onDrag, onDragEnd}) => {
  return (
    <div className="flex items-center sticky top-0 bg-gray-950 p-2 pt-4 z-10">
      <div className="bg-red-500 w-6 h-6 rounded-full mx-1 flex items-center justify-center text-xs font-bold" onClick={onClose}></div>
      <div className="bg-yellow-500 w-6 h-6 rounded-full mx-1 flex items-center justify-center text-xs font-bold" onClick={onClose}></div>
      <div className="bg-green-500 w-6 h-6 rounded-full mx-1 flex items-center justify-center text-xs font-bold" onClick={onClose}></div>
    </div>
  );
};

export default TerminalControls;
