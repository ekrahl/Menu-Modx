import React from 'react';
import { ScrollButton, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { locations, menus } from '../../data/dummy';

const PotomacDashboard = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-24 mx-3 lg:mt-10 2xl:mx-8 max-w-1200">
          <div className="flex justify-center bg-potomac bg-cover bg-center rounded-xl py-20 2xl:p-32" >
            <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">Potomac</p>
          </div>
          <div className="">
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
              <div >
                <Features
                  id={4}
                  featureEditPath={'/potomacfeatureeditor'} />
              </div>
              <div>
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
        </div>
      </div>

      <ScrollButton />
    </>
  )
}

export default PotomacDashboard