import { MenuPageHeader, CurrentMenu } from '../../components'
import { images } from '../../data'

const HappyHourMenus = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-6">
          <MenuPageHeader img="bg-hh" title="HAPPY HOUR" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.happy_hour_menu_leesburg}
                headerTitle="Leesburg"
                imgTitle="Leesburg Happy Hour Menu"
                downloadLink='happy_hour_menu_leesburg.png'
                path={"/leesburghappyhoureditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.happy_hour_menu_middleburg}
                headerTitle="Middleburg"
                imgTitle="Middleburg Happy Hour Menu"
                downloadLink='happy_hour_menu_middleburg.png'
                path={"/middleburghappyhoureditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.happy_hour_menu_noma}
                headerTitle="NoMa"
                imgTitle="NoMa Happy Hour Menu"
                downloadLink='happy_hour_menu_noma.png'
                path={"/nomahappyhoureditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.happy_hour_menu_potomac}
                headerTitle="Potomac"
                imgTitle="Potomac Happy Hour Menu"
                downloadLink='happy_hour_menu_potomac.png'
                path={"/potomachappyhoureditor"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HappyHourMenus