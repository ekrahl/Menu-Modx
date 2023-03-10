import { MenuPageHeader, CreateNewMenuBtn, MenuQueue, RecentMenus, CurrentMenu, ScrollButton } from '../../components'
import { images } from '../../data'

const OysterMenus = () => {

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-oysters2" title="OYSTERS" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_leesburg}
                title="Leesburg Oyster Menu"
                downloadLink='oyster_menu_leesburg.png' />
              <CreateNewMenuBtn path={"/leesburgoystereditor"} />
              <MenuQueue img={images.oyster_menu_leesburg} />
              <RecentMenus img={images.oyster_menu_leesburg} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_middleburg}
                title="Middleburg Oyster Menu"
                downloadLink='oyster_menu_middleburg.png' />
              <CreateNewMenuBtn path={"/middleburgoystereditor"} />
              <MenuQueue img={images.oyster_menu_middleburg} />
              <RecentMenus img={images.oyster_menu_middleburg} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_noma}
                title="NoMa Oyster Menu"
                downloadLink='oyster_menu_noma.png' />
              <CreateNewMenuBtn path={"/nomaoystereditor"} />
              <MenuQueue img={images.oyster_menu_noma} />
              <RecentMenus img={images.oyster_menu_noma} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_potomac}
                title="Potomac Oyster Menu"
                downloadLink='oyster_menu_potomac.png' />
              <CreateNewMenuBtn path={"/potomacoystereditor"} />
              <MenuQueue img={images.oyster_menu_potomac} />
              <RecentMenus img={images.oyster_menu_potomac} />
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </>
  )

}

export default OysterMenus