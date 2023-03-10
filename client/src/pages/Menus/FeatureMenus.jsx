import { MenuPageHeader, CreateNewMenuBtn, MenuQueue, RecentMenus, CurrentMenu, ScrollButton } from '../../components'
import { images } from '../../data'

const FeatureMenus = () => {

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-specials" title="FEATURES" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_leesburg}
                title="Leesburg Features Menu"
                downloadLink='leesburg-features-menu.png' />
              <CreateNewMenuBtn path={"/leesburgfeatureeditor"} />
              <MenuQueue img={images.menu_features_leesburg} />
              <RecentMenus img={images.menu_features_leesburg} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_middleburg}
                title="Middleburg Features Menu"
                downloadLink='middleburg-features-menu.png' />
              <CreateNewMenuBtn path={"/middleburgfeatureeditor"} />
              <MenuQueue img={images.menu_features_middleburg} />
              <RecentMenus img={images.menu_features_middleburg} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_noma}
                title="NoMa Features Menu"
                downloadLink='noma-features-menu.png' />
              <CreateNewMenuBtn path={"/nomafeatureeditor"} />
              <MenuQueue img={images.menu_features_noma} />
              <RecentMenus img={images.menu_features_noma} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_potomac}
                title="Potomac Features Menu"
                downloadLink='potomac-features-menu.png' />
              <CreateNewMenuBtn path={"/potomacfeatureeditor"} />
              <MenuQueue img={images.menu_features_potomac} />
              <RecentMenus img={images.menu_features_potomac} />
            </div>

          </div>
        </div>
        <ScrollButton/>
      </div>
    </>
  )
}

export default FeatureMenus