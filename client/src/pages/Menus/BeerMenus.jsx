import { MenuPageHeader, CreateNewMenuBtn, MenuQueue, RecentMenus, CurrentMenu, ScrollButton } from '../../components'
import { images } from '../../data'

const BeerMenus = () => {

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-beer" title="BEER" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_leesburg}
                title="Leesburg Beer Menu"
                downloadLink='beer_menu_leesburg.png' />
              <CreateNewMenuBtn path={"/leesburgbeereditor"} />
              <MenuQueue img={images.beer_menu_leesburg} />
              <RecentMenus img={images.beer_menu_leesburg} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_middleburg}
                title="Middleburg Beer Menu"
                downloadLink='beer_menu_middleburg.png' />
              <CreateNewMenuBtn path={"/middleburgbeereditor"} />
              <MenuQueue img={images.beer_menu_middleburg} />
              <RecentMenus img={images.beer_menu_middleburg} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_noma}
                title="NoMa Beer Menu"
                downloadLink='beer_menu_noma.png' />
              <CreateNewMenuBtn path={"/nomabeereditor"} />
              <MenuQueue img={images.beer_menu_noma} />
              <RecentMenus img={images.beer_menu_noma} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_potomac}
                title="Potomac Beer Menu"
                downloadLink='beer_menu_potomac.png' />
              <CreateNewMenuBtn path={"/potomacbeereditor"} />
              <MenuQueue img={images.beer_menu_potomac} />
              <RecentMenus img={images.beer_menu_potomac} />
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </>
  )
}

export default BeerMenus