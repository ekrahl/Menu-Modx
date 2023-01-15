import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Calendar, Dashboard, Training, OysterMenus, BeerMenus, BrunchMenus, HappyHourMenus, CocktailMenus, DinnerMenus, Events, Features, LeesburgDashboard, LeesburgFeatureEditor, LeesburgOysterEditor, LeesburgBeerEditor, MiddleburgDashboard, MiddleburgFeatureEditor, MiddleburgOysterEditor, MiddleburgBeerEditor, NomaDashboard, NomaFeatureEditor, NomaOysterEditor, NomaBeerEditor, PotomacDashboard, PotomacFeatureEditor, PotomacOysterEditor, PotomacBeerEditor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-60 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Dashboard />)} />
                <Route path="/dashboard" element={(<Dashboard />)} />

                {/* pages  */}
                <Route path="/features" element={<Features />} />
                <Route path="/events" element={<Events />} />
                <Route path="/oysters" element={<OysterMenus />} />
                <Route path="/beer" element={<BeerMenus />} />
                <Route path="/happy hour" element={<HappyHourMenus />} />
                <Route path="/cocktail" element={<CocktailMenus />} />
                <Route path="/dinner" element={<DinnerMenus />} />
                <Route path="/brunch" element={<BrunchMenus />} />
                
                <Route path="/leesburg" element={<LeesburgDashboard />} />
                <Route path="/leesburgfeatureeditor" element={<LeesburgFeatureEditor/>} />
                <Route path="/leesburgoystereditor" element={<LeesburgOysterEditor/>} />
                <Route path="/leesburgbeereditor" element={<LeesburgBeerEditor/>} />

                <Route path="/middleburg" element={<MiddleburgDashboard />} />
                <Route path="/middleburgfeatureeditor" element={<MiddleburgFeatureEditor/>} />
                <Route path="/middleburgoystereditor" element={<MiddleburgOysterEditor/>} />
                <Route path="/middleburgbeereditor" element={<MiddleburgBeerEditor/>} />

                <Route path="/noma" element={<NomaDashboard />} />
                <Route path="/nomafeatureeditor" element={<NomaFeatureEditor/>} />
                <Route path="/nomaoystereditor" element={<NomaOysterEditor/>} />
                <Route path="/nomabeereditor" element={<NomaBeerEditor/>} />

                <Route path="/potomac" element={<PotomacDashboard />} />
                <Route path="/potomacfeatureeditor" element={<PotomacFeatureEditor/>} />
                <Route path="/potomacoystereditor" element={<PotomacOysterEditor/>} />
                <Route path="/potomacbeereditor" element={<PotomacBeerEditor/>} />

                {/* apps  */}
                <Route path="/training" element={<Training />} />
                <Route path="/calendar" element={<Calendar />} />

              </Routes>
            </div>
            <Footer />
          </div>


        </div>
      </BrowserRouter>
    </div>
  )
}

export default App