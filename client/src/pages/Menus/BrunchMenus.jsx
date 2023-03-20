import { MenuPageHeader, CurrentMenu } from '../../components'
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
                headerTitle="Leesburg"
                imgTitle="Leesburg Brunch Menu"
                downloadLink='leesburg-brunch-menu.png'
                path="/leesburgbruncheditor"
              />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.middleburg_brunch_menu}
                headerTitle="Middleburg"
                imgTitle="Middleburg Brunch Menu"
                downloadLink='middleburg-brunch-menu.png'
                path="/middleburgbruncheditor"
              />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.noma_brunch_menu}
                headerTitle="NoMa"
                imgTitle="NoMa Brunch Menu"
                downloadLink='noma-brunch-menu.png'
                path="/nomabruncheditor"
              />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.potomac_brunch_menu}
                headerTitle="Potomac"
                imgTitle="Potomac Brunch Menu"
                downloadLink='potomac-brunch-menu.png'
                path="/potomacbruncheditor"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrunchMenus