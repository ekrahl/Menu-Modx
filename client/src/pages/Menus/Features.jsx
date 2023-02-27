import { MenuPageHeader, MenuView } from '../../components'
import moment from 'moment';
import { images } from '../../data';

const FeatureMenus = () => {

  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16 mx-3 md:mt-0 md:mx-8">
          <MenuPageHeader img="bg-specials" title="FEATURES" position="bg-center" />
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-1 mt-1">
            <MenuView img={images.menu_features_leesburg} headerTitle="Leesburg" editLink='/leesburgfeatures' downloadLink='leesburg-features-menu.png' />
            <MenuView img={images.menu_features_middleburg} headerTitle="Middleburg" editLink='/middleburgfeatures' downloadLink='middleburg-features-menu.png' />
            <MenuView img={images.menu_features_noma} headerTitle="NoMa" editLink='/nomafeatures' downloadLink='noma-features-menu.png' />
            <MenuView img={images.menu_features_potomac} headerTitle="Potomac" editLink='/potomacfeatures' downloadLink='potomac-features-menu.png' />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureMenus;