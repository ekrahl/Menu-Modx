import { Link, NavLink } from 'react-router-dom'
import { BiFoodMenu } from 'react-icons/bi'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext()

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false)
    }
  };

  const activeLink = 'flex items-center gap-5 pl-2 py-1 rounded-lg text-white text-md'
  const normalLink = 'flex items-center gap-5 pl-2 py-1 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray'

  return (
    <div className="ml-2 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-24">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/main" onClick={handleCloseSideBar} className="items-center gap-3 ml-2 mt-4 flex text-xl font-semibold tracking-tight dark:text-white text-slate-900">
              <BiFoodMenu /> <span>MenuModx</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          
          <div className="">
            {links.map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-gray-600 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                      fontWeight: '500'
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;