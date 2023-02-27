import { MenuPageHeader, MenuView } from '../../components'
import moment from 'moment'
import { images } from '../../data'

const BrunchMenus = () => {

  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-brunch" title="BRUNCH" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-1 mt-1">
            <MenuView img={images.leesburg_brunch_menu} headerTitle="Leesburg" editLink='/leesburgbrunch' downloadLink='leesburg-brunch-menu.png' />
            <MenuView img={images.middleburg_brunch_menu} headerTitle="Middleburg" editLink='/middleburgbrunch' downloadLink='middleburg-brunch-menu.png' />
            <MenuView img={images.noma_brunch_menu} headerTitle="NoMa" editLink='/nomabrunch' downloadLink='noma-brunch-menu.png' />
            <MenuView img={images.potomac_brunch_menu} headerTitle="Potomac" editLink='/potomacbrunch' downloadLink='potomac-brunch-menu.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default BrunchMenus;