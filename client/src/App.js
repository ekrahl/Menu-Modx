import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Main,
  Calendar,
  Dashboard,
  LeesburgMain,
  LeesburgFeatures,
  LeesburgEvents,
  LeesburgOysters,
  LeesburgBeer,
  LeesburgHappyHour,
  LeesburgDinner,
  LeesburgCocktail,
  LeesburgBrunch,
  MiddleburgMain,
  MiddleburgFeatures,
  MiddleburgEvents,
  MiddleburgOysters,
  MiddleburgBeer,
  MiddleburgHappyHour,
  MiddleburgDinner,
  MiddleburgCocktail,
  MiddleburgBrunch,
  NomaMain,
  NomaFeatures,
  NomaEvents,
  NomaOysters,
  NomaBeer,
  NomaHappyHour,
  NomaDinner,
  NomaCocktail,
  NomaBrunch,
  PotomacMain,
  PotomacFeatures,
  PotomacEvents,
  PotomacOysters,
  PotomacBeer,
  PotomacHappyHour,
  PotomacDinner,
  PotomacCocktail,
  PotomacBrunch,
  Training,
  OysterMenus,
  BeerMenus,
  BrunchMenus,
  HappyHourMenus,
  CocktailMenus,
  DinnerMenus,
  Events,
  Features,
  LeesburgDashboard,
  LeesburgFeatureEditor,
  LeesburgOysterEditor,
  LeesburgBeerEditor,
  MiddleburgDashboard,
  MiddleburgFeatureEditor,
  MiddleburgOysterEditor,
  MiddleburgBeerEditor,
  NomaDashboard,
  NomaFeatureEditor,
  NomaOysterEditor,
  NomaBeerEditor,
  PotomacDashboard,
  PotomacFeatureEditor,
  PotomacOysterEditor,
  PotomacBeerEditor
} from './pages';

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
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white">
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
                ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-60 w-full'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                <Route path='/' element={(<Main />)} />

                <Route path="/" element={(<Dashboard />)} />
                <Route path="/dashboardmain" element={(<Dashboard />)} />

                {/* LEESBURG */}
                <Route path='/leesburgmain' element={(<LeesburgMain />)} />
                <Route path="/leesburg" element={<LeesburgDashboard />} />
                <Route path='/leesburgfeatures' element={(<LeesburgFeatures />)} />
                <Route path='/leesburgevents' element={(<LeesburgEvents />)} />
                <Route path='/leesburgoysters' element={(<LeesburgOysters />)} />
                <Route path='/leesburgbeer' element={(<LeesburgBeer />)} />
                <Route path='/leesburghappyhour' element={(<LeesburgHappyHour />)} />
                <Route path='/leesburgdinner' element={(<LeesburgDinner />)} />
                <Route path='/leesburgcocktail' element={(<LeesburgCocktail />)} />
                <Route path='/leesburgbrunch' element={(<LeesburgBrunch />)} />
                <Route path="/leesburgfeatureeditor" element={<LeesburgFeatureEditor />} />
                <Route path="/leesburgoystereditor" element={<LeesburgOysterEditor />} />
                <Route path="/leesburgbeereditor" element={<LeesburgBeerEditor />} />

                {/* MIDDLEBURG */}
                <Route path='/middleburgmain' element={(<MiddleburgMain />)} />
                <Route path="/middleburg" element={<MiddleburgDashboard />} />
                <Route path='/middleburgfeatures' element={(<MiddleburgFeatures />)} />
                <Route path='/middleburgevents' element={(<MiddleburgEvents />)} />
                <Route path='/middleburgoysters' element={(<MiddleburgOysters />)} />
                <Route path='/middleburgbeer' element={(<MiddleburgBeer />)} />
                <Route path='/middleburghappyhour' element={(<MiddleburgHappyHour />)} />
                <Route path='/middleburgdinner' element={(<MiddleburgDinner />)} />
                <Route path='/middleburgcocktail' element={(<MiddleburgCocktail />)} />
                <Route path='/middleburgbrunch' element={(<MiddleburgBrunch />)} />
                <Route path="/middleburgfeatureeditor" element={<MiddleburgFeatureEditor />} />
                <Route path="/middleburgoystereditor" element={<MiddleburgOysterEditor />} />
                <Route path="/middleburgbeereditor" element={<MiddleburgBeerEditor />} />

                {/* NOMA */}
                <Route path='/nomamain' element={(<NomaMain />)} />
                <Route path="/noma" element={<NomaDashboard />} />
                <Route path='/nomafeatures' element={(<NomaFeatures />)} />
                <Route path='/nomaevents' element={(<NomaEvents />)} />
                <Route path='/nomaoysters' element={(<NomaOysters />)} />
                <Route path='/nomabeer' element={(<NomaBeer />)} />
                <Route path='/nomahappyhour' element={(<NomaHappyHour />)} />
                <Route path='/nomadinner' element={(<NomaDinner />)} />
                <Route path='/nomacocktail' element={(<NomaCocktail />)} />
                <Route path='/nomabrunch' element={(<NomaBrunch />)} />
                <Route path="/nomafeatureeditor" element={<NomaFeatureEditor />} />
                <Route path="/nomaoystereditor" element={<NomaOysterEditor />} />
                <Route path="/nomabeereditor" element={<NomaBeerEditor />} />

                {/* POTOMAC */}
                <Route path='/potomacmain' element={(<PotomacMain />)} />
                <Route path="/potomac" element={<PotomacDashboard />} />
                <Route path='/potomacfeatures' element={(<PotomacFeatures />)} />
                <Route path='/potomacevents' element={(<PotomacEvents />)} />
                <Route path='/potomacoysters' element={(<PotomacOysters />)} />
                <Route path='/potomacbeer' element={(<PotomacBeer />)} />
                <Route path='/potomachappyhour' element={(<PotomacHappyHour />)} />
                <Route path='/potomacdinner' element={(<PotomacDinner />)} />
                <Route path='/potomaccocktail' element={(<PotomacCocktail />)} />
                <Route path='/potomacbrunch' element={(<PotomacBrunch />)} />
                <Route path="/potomacfeatureeditor" element={<PotomacFeatureEditor />} />
                <Route path="/potomacoystereditor" element={<PotomacOysterEditor />} />
                <Route path="/potomacbeereditor" element={<PotomacBeerEditor />} />

                {/* MENUS */}
                <Route path="/featuresmain" element={<Features />} />
                <Route path="/eventsmain" element={<Events />} />
                <Route path="/oystersmain" element={<OysterMenus />} />
                <Route path="/beermain" element={<BeerMenus />} />
                <Route path="/happy hourmain" element={<HappyHourMenus />} />
                <Route path="/cocktailmain" element={<CocktailMenus />} />
                <Route path="/dinnermain" element={<DinnerMenus />} />
                <Route path="/brunchmain" element={<BrunchMenus />} />


                <Route path="/training" element={<Training />} />
                <Route path="/calendarmain" element={<Calendar />} />

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