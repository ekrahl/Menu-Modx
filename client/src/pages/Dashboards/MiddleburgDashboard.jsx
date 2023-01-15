import React from 'react';
import { ScrollButton, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { locations, menus } from '../../data/dummy';

const MiddleburgDashboard = () => {

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-24 mx-3 lg:mt-10 2xl:mx-8 max-w-1500">
          <div className="flex justify-center bg-middleburg bg-cover bg-center rounded-xl py-32 2xl:p-40" >
            <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">Middleburg</p>
          </div>
          <div className="">
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
              <div >
                <Features
                  id={2}
                  featureEditPath={'/middleburgfeatureeditor'} />
              </div>
              <div>
                <Events
                  location={'Middleburg'} />
              </div>
            </div>
            <div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
                <OysterMenu
                  oysterImg={menus[1].oysterMenu}
                  oysterEditPath={'/middleburgoystereditor'}
                  downloadLink={'middleburg-oyster-menu'} />
                <BeerMenu
                  beerImg={menus[1].beerMenu}
                  beerEditPath={'/middleburgbeereditor'} 
                  downloadLink={'middleburg-beer-menu'}
                  />
                <HappyHourMenu
                  hhImg={menus[1].happyHourMenu}
                  hhEditPath={'/middleburghheditor'} />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1">
                <DinnerMenu
                  dinnerMenu={menus[1].dinnerMenu}
                />
                <CocktailMenu
                  cocktailMenu={menus[1].cocktailMenu}
                />
                <BrunchMenu
                  brunchMenu={menus[1].brunchMenu}
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

export default MiddleburgDashboard