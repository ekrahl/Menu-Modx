import React from 'react';
import { ScrollButton, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const NomaDashboard = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center bg-dc5 bg-cover bg-top rounded-xl w-full mx-3 mt-16 md:mt-2 py-16 md:py-28 md:max-w-1175" >
          <p className="flex justify-center font-semibold text-4xl md:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">NoMa</p>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-auto px-3 md:mt-2 max-w-1200">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
          <div >
            <Features
              id={3}
              featureEditPath={'/nomafeatureeditor'} />
          </div>
          <div className='w-full'>
            <Events
              location={'Noma'} />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
            <OysterMenu
              oysterImg={menus[2].oysterMenu}
              oysterEditPath={'/nomaoystereditor'}
              downloadLink={'noma-oyster-menu'}
            />
            <BeerMenu
              beerImg={menus[2].beerMenu}
              beerEditPath={'/nomabeereditor'}
              downloadLink={'noma-beer-menu'}
            />
            <HappyHourMenu
              hhImg={menus[2].happyHourMenu}
              hhEditPath={'/nomahheditor'} />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
            <DinnerMenu
              dinnerMenu={menus[2].dinnerMenu}
            />
            <CocktailMenu
              cocktailMenu={menus[2].cocktailMenu}
            />
            <BrunchMenu
              brunchMenu={menus[2].brunchMenu}
            />
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default NomaDashboard