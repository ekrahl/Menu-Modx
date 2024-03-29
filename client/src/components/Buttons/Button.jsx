import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-2 w-${width} hover:drop-shadow-2xl active:scale-95 hover:scale-105 hover:bg-${bgHoverColor}`}
    >
      {icon}{text}
    </button>
  );
};

export default Button;