import { MenuPageHeader, CurrentMenu } from '../../components'
import { images } from '../../data'

const FeatureMenus = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-6">
          <MenuPageHeader img="bg-specials" title="FEATURES" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_leesburg}
                headerTitle="Leesburg"
                imgTitle="Leesburg Features Menu"
                downloadLink='leesburg-features-menu.png'
                path={"/leesburgfeatureeditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_middleburg}
                headerTitle="Middleburg"
                imgTitle="Middleburg Features Menu"
                downloadLink='middleburg-features-menu.png'
                path={"/middleburgfeatureeditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_noma}
                headerTitle="NoMa"
                imgTitle="NoMa Features Menu"
                downloadLink='noma-features-menu.png'
                path={"/nomafeatureeditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.menu_features_potomac}
                headerTitle="Potomac"
                imgTitle="Potomac Features Menu"
                downloadLink='potomac-features-menu.png'
                path="/potomacfeatureeditor" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureMenus