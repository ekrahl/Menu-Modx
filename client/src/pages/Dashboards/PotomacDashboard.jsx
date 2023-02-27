import React from 'react';
import { ScrollButton, DashboardHeader, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const PotomacDashboard = () => {

  return (
    <>
      <div className="md:mx-24">
        <DashboardHeader img="bg-potomac" title="Potomac" position="bg-center" />
        <div className="flex flex-col mx-auto px-3 mt-1 md">
          <div className="flex flex-wrap md:flex-nowrap gap-1">
            <div className="flex w-full">
              <Features
                id={4}
                featureEditPath={'/potomacfeatureeditor'} />
            </div>
            <div className='w-full'>
              <Events
                id={0}
                location={'Potomac'} />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <OysterMenu
                oysterImg={menus[3].oysterMenu}
                oysterEditPath='/potomacoystereditor'
                downloadLink='potomac-oyster-menu.png'
              />
              <BeerMenu
                beerImg={menus[3].beerMenu}
                beerEditPath='/potomacbeereditor'
                downloadLink='potomac-beer-menu.png'
              />
              <HappyHourMenu
                hhImg={menus[3].happyHourMenu}
                hhEditPath='/potomachheditor'
                downloadLink='potomac-happyhour-menu.png' />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                dinnerMenu={menus[3].dinnerMenu}
                downloadLink='potomac-dinner-menu.png'
              />
              <CocktailMenu
                cocktailMenu={menus[3].cocktailMenu}
                downloadLink='potomac-cocktail-menu.png'
              />
              <BrunchMenu
                brunchMenu={menus[3].brunchMenu}
                downloadLink='potomac-brunch-menu.png'
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default PotomacDashboard