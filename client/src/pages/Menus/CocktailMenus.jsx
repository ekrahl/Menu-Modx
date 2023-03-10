import { MenuPageHeader, CreateNewMenuBtn, MenuQueue, RecentMenus, CurrentMenu, ScrollButton } from '../../components'
import { images } from '../../data'

const CocktailMenus = () => {

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-cocktail" title="COCKTAIL" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mt-1">
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.leesburg_cocktail_menu}
                title="Leesburg Cocktail Menu"
                downloadLink='leesburg-cocktail-menu.png' />
              <CreateNewMenuBtn path={"/leesburgcocktaileditor"} />
              <MenuQueue img={images.leesburg_cocktail_menu} />
              <RecentMenus img={images.leesburg_cocktail_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.middleburg_cocktail_menu}
                title="Middleburg Cocktail Menu"
                downloadLink='middleburg-beecocktailr-menu.png' />
              <CreateNewMenuBtn path={"/middleburgcocktaileditor"} />
              <MenuQueue img={images.middleburg_cocktail_menu} />
              <RecentMenus img={images.middleburg_cocktail_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.noma_cocktail_menu}
                title="NoMa Cocktail Menu"
                downloadLink='noma-cocktail-menu.png' />
              <CreateNewMenuBtn path={"/nomacocktaileditor"} />
              <MenuQueue img={images.noma_cocktail_menu} />
              <RecentMenus img={images.noma_cocktail_menu} />
            </div>
            <div className="md:max-w-500 w-full">
              <CurrentMenu
                img={images.potomac_cocktail_menu}
                title="Potomac Cocktail Menu"
                downloadLink='potomac-cocktail-menu.png' />
              <CreateNewMenuBtn path={"/potomaccocktaileditor"} />
              <MenuQueue img={images.potomac_cocktail_menu} />
              <RecentMenus img={images.potomac_cocktail_menu} />
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </>
  )
}

export default CocktailMenus