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
                headerTitle="Leesburg"
                imgTitle="Leesburg Dinner Menu"
                downloadLink='leesburg-dinner-menu.png'
                path={"/leesburgdinnereditor"} />

            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.middleburg_dinner_menu}
                headerTitle="Middleburg"
                imgTitle="Middleburg Dinner Menu"
                downloadLink='middleburg-dinner-menu.png'
                path={"/middleburgdinnereditor"} />

            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.noma_dinner_menu}
                headerTitle="NoMa"
                imgTitle="NoMa Dinner Menu"
                downloadLink='noma-dinner-menu.png'
                path={"/nomadinnereditor"} />

            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.potomac_dinner_menu}
                headerTitle="Potomac"
                imgTitle="Potomac Dinner Menu"
                downloadLink='potomac-dinner-menu.png'
                path={"/potomacdinnereditor"} />

            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </>
  )
}

export default DinnerMenus