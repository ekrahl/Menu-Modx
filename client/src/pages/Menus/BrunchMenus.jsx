import { MenuPageHeader, CreateNewMenuBtn, MenuQueue, RecentMenus, CurrentMenu, ScrollButton } from '../../components'
import { images } from '../../data'

const BrunchMenus = () => {

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-brunch" title="BRUNCH" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.leesburg_brunch_menu}
                title="Leesburg Brunch Menu"
                downloadLink='leesburg-brunch-menu.png' />
              <CreateNewMenuBtn path={"/leesburgbruncheditor"} />
              <MenuQueue img={images.leesburg_brunch_menu} />
              <RecentMenus img={images.leesburg_brunch_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.middleburg_brunch_menu}
                title="Middleburg Brunch Menu"
                downloadLink='middleburg-brunch-menu.png' />
              <CreateNewMenuBtn path={"/middleburgbruncheditor"} />
              <MenuQueue img={images.middleburg_brunch_menu} />
              <RecentMenus img={images.middleburg_brunch_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.noma_brunch_menu}
                title="NoMa Brunch Menu"
                downloadLink='noma-brunch-menu.png' />
              <CreateNewMenuBtn path={"/nomabruncheditor"} />
              <MenuQueue img={images.noma_brunch_menu} />
              <RecentMenus img={images.noma_brunch_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.potomac_brunch_menu}
                title="Potomac Brunch Menu"
                downloadLink='potomac-brunch-menu.png' />
              <CreateNewMenuBtn path={"/potomacbruncheditor"} />
              <MenuQueue img={images.potomac_brunch_menu} />
              <RecentMenus img={images.potomac_brunch_menu} />
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </>
  )
}

export default BrunchMenus