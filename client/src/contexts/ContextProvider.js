import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  // chat: false,
  // cart: false,
  userProfile: false,
  // notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#1B2E3D');
  const [currentMode, setCurrentMode] = useState('Dark');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [oysterList, setOysterList] = useState(
    [
      {
        id: 1,
        name: "KSOB OYSTER",
        location: "Chincoteague, VA",
        size: "(s/m)",
        description: "clean brine with a mild, earthy finish",
      },
    ]
  )
  const [oysterObj, setOysterObj] = useState({});

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{
      currentColor,
      currentMode,
      activeMenu,
      screenSize,
      setScreenSize,
      handleClick,
      isClicked,
      initialState,
      setIsClicked,
      setActiveMenu,
      setCurrentColor,
      setCurrentMode,
      setMode,
      setColor,
      themeSettings,
      setThemeSettings
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);