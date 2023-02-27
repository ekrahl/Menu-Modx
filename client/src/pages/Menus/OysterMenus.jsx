import { MenuPageHeader, MenuView } from '../../components'
import moment from 'moment';
import { images } from '../../data';

const OysterMenus = () => {

  const day = moment().format('dddd')
  const date = moment().format('MMMM Do YYYY')

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-oysters2" title="OYSTERS" position="bg-bottom" />
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1 mt-1">
            <MenuView img={images.oyster_menu_leesburg} headerTitle="Leesburg" editLink='/leesburgoysters' downloadLink='leesburg-oyster-menu.png' />
            <MenuView img={images.oyster_menu_middleburg} headerTitle="Middleburg" editLink='/middleburgoysters' downloadLink='middleburg-oyster-menu.png' />
            <MenuView img={images.oyster_menu_noma} headerTitle="NoMa" editLink='/nomaoysters' downloadLink='noma-oyster-menu.png' />
            <MenuView img={images.oyster_menu_potomac} headerTitle="Potomac" editLink='/potomacoysters' downloadLink='potomac-oyster-menu.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default OysterMenus;