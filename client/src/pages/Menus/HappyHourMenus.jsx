import { MenuPageHeader, MenuView } from '../../components'
import moment from 'moment';
import { images } from '../../data';

const HappyHourMenus = () => {

  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-hh" title="HAPPY HOUR" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-1 mt-1">
            <MenuView img={images.happy_hour_menu_leesburg} headerTitle="Leesburg" editLink='/leesburghappyhour' downloadLink='leesburg-happyhour-menu.png' />
            <MenuView img={images.happy_hour_menu_middleburg} headerTitle="Middleburg" editLink='/middleburghappyhour' downloadLink='middleburg-happyhour-menu.png' />
            <MenuView img={images.happy_hour_menu_noma} headerTitle="NoMa" editLink='/nomahappyhour' downloadLink='noma-happyhour-menu.png' />
            <MenuView img={images.happy_hour_menu_potomac} headerTitle="Potomac" editLink='/potomachappyhour' downloadLink='potomac-happyhour-menu.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default HappyHourMenus;