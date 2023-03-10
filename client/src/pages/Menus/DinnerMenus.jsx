import { MenuPageHeader, CreateNewMenuBtn, MenuQueue, RecentMenus, CurrentMenu, ScrollButton } from '../../components'
import { images } from '../../data'

const DinnerMenus = () => {

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-dinner" title="DINNER" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.leesburg_dinner_menu}
                title="Leesburg Dinner Menu"
                downloadLink='leesburg-dinner-menu.png' />
              <CreateNewMenuBtn path={"/leesburgdinnereditor"} />
              <MenuQueue img={images.leesburg_dinner_menu} />
              <RecentMenus img={images.leesburg_dinner_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.middleburg_dinner_menu}
                title="Middleburg Dinner Menu"
                downloadLink='middleburg-dinner-menu.png' />
              <CreateNewMenuBtn path={"/middleburgdinnereditor"} />
              <MenuQueue img={images.middleburg_dinner_menu} />
              <RecentMenus img={images.middleburg_dinner_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.noma_dinner_menu}
                title="NoMa Dinner Menu"
                downloadLink='noma-dinner-menu.png' />
              <CreateNewMenuBtn path={"/nomadinnereditor"} />
              <MenuQueue img={images.noma_dinner_menu} />
              <RecentMenus img={images.noma_dinner_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.potomac_dinner_menu}
                title="Potomac Dinner Menu"
                downloadLink='potomac-dinner-menu.png' />
              <CreateNewMenuBtn path={"/potomacdinnereditor"} />
              <MenuQueue img={images.potomac_dinner_menu} />
              <RecentMenus img={images.potomac_dinner_menu} />
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </>
  )
}

export default DinnerMenus