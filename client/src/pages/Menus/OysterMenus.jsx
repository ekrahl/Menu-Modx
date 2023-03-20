import { MenuPageHeader, CurrentMenu } from '../../components'
import { images } from '../../data'

const OysterMenus = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-6">
          <MenuPageHeader img="bg-oysters2" title="OYSTERS" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_leesburg}
                headerTitle="Leesburg"
                imgTitle="Leesburg Oyster Menu"
                downloadLink='oyster_menu_leesburg.png'
                path={"/leesburgoystereditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_middleburg}
                headerTitle="Middleburg"
                imgTitle="Middleburg Oyster Menu"
                downloadLink='oyster_menu_middleburg.png'
                path={"/middleburgoystereditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_noma}
                headerTitle="NoMa"
                imgTitle="NoMa Oyster Menu"
                downloadLink='oyster_menu_noma.png'
                path={"/nomaoystereditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.oyster_menu_potomac}
                headerTitle="Potomac"
                imgTitle="Potomac Oyster Menu"
                downloadLink='oyster_menu_potomac.png'
                path={"/potomacoystereditor"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OysterMenus