import React from 'react';
import { ScrollButton, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const LeesburgDashboard = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center bg-leesburg bg-cover bg-center rounded-xl w-full mx-3 mt-16 md:mt-2 py-16 md:py-28 md:max-w-1175" >
          <p className="flex justify-center font-semibold text-4xl md:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">Leesburg</p>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-auto px-3 md:mt-2 max-w-1200">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
            <div>
              <Features
                id={1}
                featureEditPath={'/leesburgfeatureeditor'} />
            </div>
            <div className='w-full'>
              <Events
                location={'Leesburg'} />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
              <OysterMenu
                oysterImg={menus[0].oysterMenu}
                oysterEditPath={'/leesburgoystereditor'}
                downloadLink={'leesburg-oyster-menu'} />
              <BeerMenu
                beerImg={menus[0].beerMenu}
                beerEditPath={'/leesburgbeereditor'}
                downloadLink={'leesburg-beer-menu'}
              />
              <HappyHourMenu
                hhImg={menus[0].happyHourMenu}
                hhEditPath={'/leesburghheditor'} />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
              <DinnerMenu
                dinnerMenu={menus[0].dinnerMenu}
              />
              <CocktailMenu
                cocktailMenu={menus[0].cocktailMenu}
              />
              <BrunchMenu
                brunchMenu={menus[0].brunchMenu}
              />
            </div>
          </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default LeesburgDashboard