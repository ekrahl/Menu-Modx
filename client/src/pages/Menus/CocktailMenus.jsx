import { MenuPageHeader, MenuView } from '../../components'
import moment from 'moment'
import { images } from '../../data'

const CocktailMenus = () => {

  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-cocktail4" title="COCKTAIL" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-1 mt-1">
            <MenuView img={images.leesburg_cocktail_menu} headerTitle="Leesburg" editLink='/leesburgcocktail' downloadLink='leesburg-cocktail-menu.png' />
            <MenuView img={images.middleburg_cocktail_menu} headerTitle="Middleburg" editLink='/middleburgcocktail' downloadLink='middleburg-cocktail-menu.png' />
            <MenuView img={images.noma_cocktail_menu} headerTitle="NoMa" editLink='/nomacocktail' downloadLink='noma-cocktail-menu.png' />
            <MenuView img={images.potomac_cocktail_menu} headerTitle="Potomac" editLink='/potomaccocktail' downloadLink='potomac-cocktail-menu.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default CocktailMenus;