import React from 'react';
import { ScrollButton, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const LeesburgDashboard = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-24 mx-3 lg:mt-10 2xl:mx-8 max-w-1500">
          <div className="flex justify-center bg-leesburg bg-cover bg-center rounded-xl py-32 2xl:p-40" >
            <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">Leesburg</p>
          </div>
          <div className="">
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
              <div >
                <Features
                  id={1}
                  featureEditPath={'/leesburgfeatureeditor'} />
              </div>
              <div>
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
        </div>
      </div>

      <ScrollButton />
    </>
  )
}

export default LeesburgDashboard