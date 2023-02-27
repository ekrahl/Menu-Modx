import React from 'react';
import { ScrollButton, DashboardHeader, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const MiddleburgDashboard = () => {

  return (
    <>
      <div className="md:mx-24">
        <DashboardHeader img="bg-middleburg" title="Middleburg" position="bg-center" />
        <div className="flex flex-col mx-auto px-3 mt-1 md">
          <div className="flex flex-wrap md:flex-nowrap gap-1">
            <div className="flex w-full">
              <Features
                id={2}
                featureEditPath={'/middleburgfeatureeditor'} />
            </div>
            <div className='w-full'>
              <Events
                id={0}
                location={'Middleburg'} />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <OysterMenu
                oysterImg={menus[1].oysterMenu}
                oysterEditPath='/middleburgoystereditor'
                downloadLink='middleburg-oyster-menu.png' />
              <BeerMenu
                beerImg={menus[1].beerMenu}
                beerEditPath='/middleburgbeereditor'
                downloadLink='middleburg-beer-menu.png'
              />
              <HappyHourMenu
                hhImg={menus[1].happyHourMenu}
                hhEditPath='/middleburghheditor'
                downloadLink='middleburg-happyhour-menu.png' />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                dinnerMenu={menus[1].dinnerMenu}
                downloadLink='middleburg-dinner-menu.png'
              />
              <CocktailMenu
                cocktailMenu={menus[1].cocktailMenu}
                downloadLink='middleburg-cocktail-menu.png'
              />
              <BrunchMenu
                brunchMenu={menus[1].brunchMenu}
                downloadLink='middleburg-brunch-menu.png'
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default MiddleburgDashboard