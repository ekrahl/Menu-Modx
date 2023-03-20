import { MenuPageHeader, CurrentMenu } from '../../components'
import { images } from '../../data'

const BeerMenus = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-6">
          <MenuPageHeader img="bg-beer" title="BEER" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_leesburg}
                headerTitle="Leesburg"
                imgTitle="Leesburg Beer Menu"
                downloadLink='beer_menu_leesburg.png'
                path="/leesburgbeereditor" />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_middleburg}
                headerTitle="Middleburg"
                imgTitle="Middleburg Beer Menu"
                downloadLink='beer_menu_middleburg.png'
                path="/middleburgbeereditor" />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_noma}
                headerTitle="NoMa"
                imgTitle="NoMa Beer Menu"
                downloadLink='beer_menu_noma.png'
                path="/nomabeereditor"
              />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.beer_menu_potomac}
                headerTitle="Potomac"
                imgTitle="Potomac Beer Menu"
                downloadLink='beer_menu_potomac.png'
                path="/potomacbeereditor" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BeerMenus