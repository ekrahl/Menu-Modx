import { MenuPageHeader, MenuView } from '../../components'
import moment from 'moment';
import { images } from '../../data';

const BeerMenus = () => {

  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-beer" title="BEER" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-1 mt-1">
            <MenuView img={images.beer_menu_leesburg} headerTitle="Leesburg" editLink='/leesburgbeer' downloadLink='leesburg-beer-menu.png' />
            <MenuView img={images.beer_menu_middleburg} headerTitle="Middleburg" editLink='/middleburgbeer' downloadLink='middleburg-beer-menu.png' />
            <MenuView img={images.beer_menu_noma} headerTitle="NoMa" editLink='/nomabeer' downloadLink='noma-beer-menu.png' />
            <MenuView img={images.beer_menu_potomac} headerTitle="Potomac" editLink='/potomacbeer' downloadLink='potomac-beer-menu.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default BeerMenus;