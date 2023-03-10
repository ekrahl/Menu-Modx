import React from 'react';
import { ScrollButton, DashboardHeader, Features, Events, OysterMenu, BeerMenu, HappyHourMenu, DinnerMenu, CocktailMenu, BrunchMenu } from '../../components';
import { menus } from '../../data/dummy';

const NomaDashboard = () => {

  return (
    <>
      <div className="md:mx-24">
        <DashboardHeader img="bg-dc5" title="NoMa" position="bg-top" />
        <div className="flex flex-col mx-auto px-3 mt-1 md">
          <div className="flex flex-wrap md:flex-nowrap gap-1">
            <div className="flex w-full">
              <Features
                id={3}
                path={'/nomafeatureeditor'} />
            </div>
            <div className='w-full'>
              <Events
                id={0}
                location={'Noma'} />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <OysterMenu
                img={menus[2].oysterMenu}
                alt="NoMa Oyster Menu"
                path='/nomaoystereditor'
                downloadLink='noma-oyster-menu.png'
              />
              <BeerMenu
                img={menus[2].beerMenu}
                alt="NoMa Beer Menu"
                path='/nomabeereditor'
                downloadLink='noma-beer-menu.png'
              />
              <HappyHourMenu
                img={menus[2].happyHourMenu}
                alt="NoMa Happy Hour Menu"
                path='/nomahappyhoureditor'
                downloadLink='noma-happyhour-menu.png'
              />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                img={menus[2].dinnerMenu}
                alt="NoMa Dinner Menu"
                path='/nomadinnereditor'
                downloadLink='noma-dinner-menu.png'
              />
              <CocktailMenu
                img={menus[2].cocktailMenu}
                alt="NoMa Cocktail Menu"
                path='/nomacocktaileditor'
                downloadLink='noma-cocktail-menu.png'
              />
              <BrunchMenu
                img={menus[2].brunchMenu}
                alt="NoMa Brunch Menu"
                path='/nomabruncheditor'
                downloadLink='noma-brunch-menu.png'
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </>
  )
}

export default NomaDashboard