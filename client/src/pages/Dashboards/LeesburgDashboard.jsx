import React from 'react';
import { ScrollButton, DashboardHeader, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const LeesburgDashboard = () => {

  return (
    <>
      <div className="md:mx-24">
        <DashboardHeader img="bg-leesburg" title="Leesburg" position="bg-center" />
        <div className="flex flex-col mx-auto px-3 mt-1 md">
          <div className="flex flex-wrap md:flex-nowrap gap-1">
            <div className="flex w-full">
              <Features
                id={1}
                featureEditPath={'/leesburgfeatureeditor'} />
            </div>
            <div className="w-full">
              <Events
                id={0}
                location={'Leesburg'} />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <OysterMenu
                oysterImg={menus[0].oysterMenu}
                oysterEditPath='/leesburgoystereditor'
                downloadLink='leesburg-oyster-menu.png' />
              <BeerMenu
                beerImg={menus[0].beerMenu}
                beerEditPath='/leesburgbeereditor'
                downloadLink='leesburg-beer-menu.png'
              />
              <HappyHourMenu
                hhImg={menus[0].happyHourMenu}
                hhEditPath='/leesburghheditor'
                downloadLink='leesburg-happyhour-menu.png' />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                dinnerMenu={menus[0].dinnerMenu}
                downloadLink='leesburg-dinner-menu.png'
              />
              <CocktailMenu
                cocktailMenu={menus[0].cocktailMenu}
                downloadLink='leesburg-cocktail-menu.png'
              />
              <BrunchMenu
                brunchMenu={menus[0].brunchMenu}
                downloadLink='leesburg-brunch-menu.png'
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default LeesburgDashboard