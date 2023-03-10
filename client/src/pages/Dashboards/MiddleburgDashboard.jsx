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
                path={'/middleburgfeatureeditor'} />
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
                img={menus[1].oysterMenu}
                alt="Middleburg Oyster Menu"
                path='/middleburgoystereditor'
                downloadLink='middleburg-oyster-menu.png' />
              <BeerMenu
                img={menus[1].beerMenu}
                alt="Middleburg Beer Menu"
                path='/middleburgbeereditor'
                downloadLink='middleburg-beer-menu.png'
              />
              <HappyHourMenu
                img={menus[1].happyHourMenu}
                alt="Middleburg Happy Hour Menu"
                path='/middleburghappyhoureditor'
                downloadLink='middleburg-happyhour-menu.png' />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                img={menus[1].dinnerMenu}
                alt="Middleburg Dinner Menu"
                path='/middleburgdinnereditor'
                downloadLink='middleburg-dinner-menu.png'
              />
              <CocktailMenu
                img={menus[1].cocktailMenu}
                alt="Middleburg Cocktail Menu"
                path='/middleburgcocktaileditor'
                downloadLink='middleburg-cocktail-menu.png'
              />
              <BrunchMenu
                img={menus[1].brunchMenu}
                alt="Middleburg Brunch Menu"
                path='/middleburgbruncheditor'
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