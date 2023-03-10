import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from './contexts/ContextProvider';
import ScrollToTop from './components/ScrollToTop';
import './App.css'
import { Navbar, Footer, Sidebar, ThemeSettings, Signup, Login } from './components'
import {
  MainShortcuts,
  LeesburgShortcuts,
  MiddleburgShortcuts,
  NomaShortcuts,
  PotomacShortcuts,
  Dashboard,
  LeesburgDashboard,
  MiddleburgDashboard,
  NomaDashboard,
  PotomacDashboard,
  FeatureMenus,
  EventMenus,
  OysterMenus,
  BeerMenus,
  HappyHourMenus,
  DinnerMenus,
  CocktailMenus,
  BrunchMenus,
  CateringMenus,
  Calendar,
  Training,
  LeesburgFeatureEditor,
  LeesburgOysterEditor,
  LeesburgBeerEditor,
  LeesburgHappyHourEditor,
  LeesburgDinnerEditor,
  LeesburgCocktailEditor,
  LeesburgBrunchEditor,
  MiddleburgFeatureEditor,
  MiddleburgOysterEditor,
  MiddleburgBeerEditor,
  MiddleburgHappyHourEditor,
  MiddleburgDinnerEditor,
  MiddleburgCocktailEditor,
  MiddleburgBrunchEditor,
  NomaFeatureEditor,
  NomaOysterEditor,
  NomaBeerEditor,
  NomaHappyHourEditor,
  NomaDinnerEditor,
  NomaCocktailEditor,
  NomaBrunchEditor,
  PotomacFeatureEditor,
  PotomacOysterEditor,
  PotomacBeerEditor,
  PotomacHappyHourEditor,
  PotomacDinnerEditor,
  PotomacCocktailEditor,
  PotomacBrunchEditor,
} from './pages';

const App = () => {
  const user = localStorage.getItem("token")
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

      <ScrollToTop />
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
          <div className="w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white">
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
              ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-52 w-full'
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            {themeSettings && (<ThemeSettings />)}

            <Routes>
              {/* AUTH */}
              {user && <Route path="/" exact element={<Dashboard />} />}
              <Route path='/signup' exact element={<Signup />} />
              <Route path='/login' exact element={<Login />} />
              <Route path="/" element={<Navigate replace to="/login" />} />

              {/* SHORTCUTS */}
              <Route path='/main' element={(<MainShortcuts />)} />
              <Route path='/leesburg' element={(<LeesburgShortcuts />)} />
              <Route path='/middleburg' element={(<MiddleburgShortcuts />)} />
              <Route path='/noma' element={(<NomaShortcuts />)} />
              <Route path='/potomac' element={(<PotomacShortcuts />)} />

              {/* DASHBOARDS */}
              <Route path="/dashboard" element={(<Dashboard />)} />
              <Route path="/leesburgdashboard" element={<LeesburgDashboard />} />
              <Route path="/middleburgdashboard" element={<MiddleburgDashboard />} />
              <Route path="/nomadashboard" element={<NomaDashboard />} />
              <Route path="/potomacdashboard" element={<PotomacDashboard />} />

              {/* EDITORS-LEESBURG */}
              <Route path="/leesburgfeatureeditor" element={<LeesburgFeatureEditor />} />
              <Route path="/leesburgoystereditor" element={<LeesburgOysterEditor />} />
              <Route path="/leesburgbeereditor" element={<LeesburgBeerEditor />} />
              <Route path="/leesburghappyhoureditor" element={<LeesburgHappyHourEditor />} />
              <Route path="/leesburgdinnereditor" element={<LeesburgDinnerEditor />} />
              <Route path="/leesburgcocktaileditor" element={<LeesburgCocktailEditor />} />
              <Route path="/leesburgbruncheditor" element={<LeesburgBrunchEditor />} />

              {/* EDITORS-MIDDLEBURG */}
              <Route path="/middleburgfeatureeditor" element={<MiddleburgFeatureEditor />} />
              <Route path="/middleburgoystereditor" element={<MiddleburgOysterEditor />} />
              <Route path="/middleburgbeereditor" element={<MiddleburgBeerEditor />} />
              <Route path="/middleburghappyhoureditor" element={<MiddleburgHappyHourEditor />} />
              <Route path="/middleburgdinnereditor" element={<MiddleburgDinnerEditor />} />
              <Route path="/middleburgcocktaileditor" element={<MiddleburgCocktailEditor />} />
              <Route path="/middleburgbruncheditor" element={<MiddleburgBrunchEditor />} />

              {/* EDITORS-NOMA */}
              <Route path="/nomafeatureeditor" element={<NomaFeatureEditor />} />
              <Route path="/nomaoystereditor" element={<NomaOysterEditor />} />
              <Route path="/nomabeereditor" element={<NomaBeerEditor />} />
              <Route path="/nomahappyhoureditor" element={<NomaHappyHourEditor />} />
              <Route path="/nomadinnereditor" element={<NomaDinnerEditor />} />
              <Route path="/nomacocktaileditor" element={<NomaCocktailEditor />} />
              <Route path="/nomabruncheditor" element={<NomaBrunchEditor />} />

              {/* EDITORS-POTOMAC */}
              <Route path="/potomacfeatureeditor" element={<PotomacFeatureEditor />} />
              <Route path="/potomacoystereditor" element={<PotomacOysterEditor />} />
              <Route path="/potomacbeereditor" element={<PotomacBeerEditor />} />
              <Route path="/potomachappyhoureditor" element={<PotomacHappyHourEditor />} />
              <Route path="/potomacdinnereditor" element={<PotomacDinnerEditor />} />
              <Route path="/potomaccocktaileditor" element={<PotomacCocktailEditor />} />
              <Route path="/potomacbruncheditor" element={<PotomacBrunchEditor />} />

              {/* MENUS */}
              <Route path="/features" element={<FeatureMenus />} />
              <Route path="/events" element={<EventMenus />} />
              <Route path="/oysters" element={<OysterMenus />} />
              <Route path="/beer" element={<BeerMenus />} />
              <Route path="/happy hour" element={<HappyHourMenus />} />
              <Route path="/cocktail" element={<CocktailMenus />} />
              <Route path="/dinner" element={<DinnerMenus />} />
              <Route path="/brunch" element={<BrunchMenus />} />
              <Route path="/catering" element={<CateringMenus />} />

              {/* TRAINING */}
              <Route path="/training" element={<Training />} />

              {/* CALENDAR */}
              <Route path="/calendar" element={<Calendar />} />
            </Routes>

          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App