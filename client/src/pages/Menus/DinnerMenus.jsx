import { MenuPageHeader, MenuView } from '../../components'
import moment from 'moment'
import { images } from '../../data'

const DinnerMenus = () => {

  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');

  return (
    <>
      <div className="flex justify-center md:mx-24">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-dinner" title="DINNER" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-1 mt-1">
            <MenuView img={images.leesburg_dinner_menu} headerTitle="Leesburg" editLink='/leesburgdinner' downloadLink='leesburg-dinner-menu.png' />
            <MenuView img={images.middleburg_dinner_menu} headerTitle="Middleburg" editLink='/middleburgdinner' downloadLink='middleburg-dinner-menu.png' />
            <MenuView img={images.noma_dinner_menu} headerTitle="NoMa" editLink='/nomadinner' downloadLink='noma-dinner-menu.png' />
            <MenuView img={images.potomac_dinner_menu} headerTitle="Potomac" editLink='/potomacdinner' downloadLink='potomac-dinner-menu.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default DinnerMenus;