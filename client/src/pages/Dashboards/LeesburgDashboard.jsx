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
                path={'/leesburgfeatureeditor'} />
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
                img={menus[0].oysterMenu}
                alt="Leesburg Oyster Menu"
                path='/leesburgoystereditor'
                downloadLink='leesburg-oyster-menu.png' />
              <BeerMenu
                img={menus[0].beerMenu}
                alt="Leesburg Beer Menu"
                path='/leesburgbeereditor'
                downloadLink='leesburg-beer-menu.png'
              />
              <HappyHourMenu
                img={menus[0].happyHourMenu}
                alt="Leesburg Happy Hour Menu"
                path='/leesburghappyhoureditor'
                downloadLink='leesburg-happyhour-menu.png' />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                img={menus[0].dinnerMenu}
                alt="Leesburg Dinner Menu"
                path='/leesburgdinnereditor'
                downloadLink='leesburg-dinner-menu.png'
              />
              <CocktailMenu
                img={menus[0].cocktailMenu}
                alt="Leesburg Cocktail Menu"
                path='/leesburgcocktaileditor'
                downloadLink='leesburg-cocktail-menu.png'
              />
              <BrunchMenu
                img={menus[0].brunchMenu}
                alt="Leesburg Brunch Menu"
                path='/leesburgbruncheditor'
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