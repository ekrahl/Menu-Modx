import { MenuPageHeader, CurrentMenu } from '../../components'
import { images } from '../../data'

const CocktailMenus = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0">
          <MenuPageHeader img="bg-cocktail" title="COCKTAIL" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.leesburg_cocktail_menu}
                headerTitle="Leesburg"
                imgTitle="Leesburg Cocktail Menu"
                downloadLink='leesburg-cocktail-menu.png'
                path={"/leesburgcocktaileditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.middleburg_cocktail_menu}
                headerTitle="Middleburg"
                imgTitle="Middleburg Cocktail Menu"
                downloadLink='middleburg-beecocktailr-menu.png'
                path={"/middleburgcocktaileditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.noma_cocktail_menu}
                headerTitle="NoMa"
                imgTitle="NoMa Cocktail Menu"
                downloadLink='noma-cocktail-menu.png'
                path={"/nomacocktaileditor"} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.potomac_cocktail_menu}
                headerTitle="Potomac"
                imgTitle="Potomac Cocktail Menu"
                downloadLink='potomac-cocktail-menu.png'
                path={"/potomaccocktaileditor"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CocktailMenus