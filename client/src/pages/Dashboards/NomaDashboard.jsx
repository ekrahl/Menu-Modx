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
                featureEditPath={'/nomafeatureeditor'} />
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
                oysterImg={menus[2].oysterMenu}
                oysterEditPath='/nomaoystereditor'
                downloadLink='noma-oyster-menu.png'
              />
              <BeerMenu
                beerImg={menus[2].beerMenu}
                beerEditPath='/nomabeereditor'
                downloadLink='noma-beer-menu.png'
              />
              <HappyHourMenu
                hhImg={menus[2].happyHourMenu}
                hhEditPath='/nomahheditor'
                downloadLink='noma-happyhour-menu.png'
              />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1">
              <DinnerMenu
                dinnerMenu={menus[2].dinnerMenu}
                downloadLink='noma-dinner-menu.png'
              />
              <CocktailMenu
                cocktailMenu={menus[2].cocktailMenu}
                downloadLink='noma-cocktail-menu.png'
              />
              <BrunchMenu
                brunchMenu={menus[2].brunchMenu}
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