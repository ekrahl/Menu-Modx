import React, { useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
// import { BsFillChatLeftFill } from 'react-icons/bs';
// import { RiNotification3Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative" >
      <div className="flex">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
        <h1 className="font-semibold text-lg dark:text-gray-200 pt-2 pl-2" >King Street Oyster Bar</h1>
      </div>
    
      <div className="flex">
        {/* <NavButton title="Chat" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsFillChatLeftFill />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Fill />} /> */}
      
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center justify-center gap-2 cursor-pointer p-3 pl-6 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <p>
              <span className="flex text-gray-400 font-bold ml-1 text-14">
              <FaRegUserCircle className="-translate-x-3" color={currentColor} size="1.4rem"/>
              Admin
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {/* {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)} */}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;