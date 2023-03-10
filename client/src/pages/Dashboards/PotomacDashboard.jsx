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
                path={'/potomacfeatureeditor'} />
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
                img={menus[3].oysterMenu}
                alt="Potomac Oyster Menu"
                path='/potomacoystereditor'
                downloadLink='potomac-oyster-menu.png'
              />
              <BeerMenu
                img={menus[3].beerMenu}
                alt="Potomac Beer Menu"
                path='/potomacbeereditor'
                downloadLink='potomac-beer-menu.png'
              />
              <HappyHourMenu
                img={menus[3].happyHourMenu}
                alt="Potomac Happy Hour Menu"
                path='/potomachappyhoureditor'
                downloadLink='potomac-happyhour-menu.png' />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                img={menus[3].dinnerMenu}
                alt="Potomac Dinner Menu"
                path='/potomacdinnereditor'
                downloadLink='potomac-dinner-menu.png'
              />
              <CocktailMenu
                img={menus[3].cocktailMenu}
                alt="Potomac Cocktail Menu"
                path='/potomaccocktaileditor'
                downloadLink='potomac-cocktail-menu.png'
              />
              <BrunchMenu
                img={menus[3].brunchMenu}
                alt="Potomac Brunch Menu"
                path='/potomacbruncheditor'
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