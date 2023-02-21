import React from 'react';
import { ScrollButton, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const PotomacDashboard = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center bg-potomac bg-cover bg-center rounded-xl w-full mx-3 mt-16 md:mt-2 py-16 md:py-28 md:max-w-1175" >
          <p className="flex justify-center font-semibold text-4xl md:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">Potomac</p>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-auto px-3 md:mt-2 max-w-1200">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
          <div >
            <Features
              id={4}
              featureEditPath={'/potomacfeatureeditor'} />
          </div>
          <div className='w-full'>
            <Events
              location={'Potomac'} />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
            <OysterMenu
              oysterImg={menus[3].oysterMenu}
              oysterEditPath={'/potomacoystereditor'}
              downloadLink={'potomac-oyster-menu'}
            />
            <BeerMenu
              beerImg={menus[3].beerMenu}
              beerEditPath={'/potomacbeereditor'}
              downloadLink={'potomac-beer-menu'}
            />
            <HappyHourMenu
              hhImg={menus[3].happyHourMenu}
              hhEditPath={'/potomachheditor'} />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
            <DinnerMenu
              dinnerMenu={menus[3].dinnerMenu}
            />
            <CocktailMenu
              cocktailMenu={menus[3].cocktailMenu}
            />
            <BrunchMenu
              brunchMenu={menus[3].brunchMenu}
            />
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default PotomacDashboard