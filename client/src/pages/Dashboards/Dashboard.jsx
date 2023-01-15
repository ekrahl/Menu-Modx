import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { images } from '../../data';
import { locations, foodFeatures, drinkFeatures, events, menus } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { BsClockFill, BsFillPeopleFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin, MdDoubleArrow } from 'react-icons/md';
import { GiPartyPopper } from 'react-icons/gi';
import { RiContactsFill } from 'react-icons/ri';
import { ScrollButton } from '../../components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Dashboard = () => {
  const update = moment().subtract(1, 'days').calendar();
  const { currentColor, currentMode } = useStateContext();

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-14 mx-3 lg:mt-4 2xl:mx-8 md:max-w-1000 lg:max-w-1500">

          <div className="flex justify-center bg-main-dark-bg rounded-xl pt-10 pb-6 mx-6">
            <img src={images.kingstoysterbar} alt="header" />
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center mt-1 gap-1">
            <div className="flex flex-col items-center justify-center bg-veggieprep bg-cover rounded-xl w-full lg:py-12 py-12">
              <p className="font-bold text-gray-200 text-3xl text-center bg-half-transparent rounded-xl p-2 m-4">DAILY FEATURES</p>
              <Link to="/features" className="flex items-center text-gray-200 text-lg font-semibold px-1 rounded-lg bg-black bg-opacity-20">View Menus<MdDoubleArrow className='ml-2'/></Link>
            </div>
            {locations.map((location) => (
              <div className="w-full">
                <Link to={location.path}>
                  <p
                    className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>{location.title}
                  </p>
                </Link>
                {foodFeatures.map((feat) => {
                  if (feat.location_id === location.id) {
                    return (
                      <div
                        className="border-b border-gray-600"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                        <p className="font-semibold text-xl text-gray-300 pl-4 pt-2">Fresh Fish</p>
                        <img className="p-4" src={feat.img} alt="fish img" />
                        <div className="h-28">
                          <p className="font-semibold text-lg text-gray-300 pl-4">{feat.title}</p>
                          <p className="text-sm text-gray-400 px-4">{feat.ingredients}</p>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-600">Last Updated: <br/> {update}</p>
                        </div>
                      </div>
                    )
                  }
                })}
                {drinkFeatures.map((feat) => {
                  if (feat.location_id === location.id) {
                    return (
                      <div
                        className="border-b border-gray-600 rounded-b-xl"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                        <p className="font-semibold text-xl text-gray-300 pl-4 pt-2">Daily Cocktail</p>
                        <img className="p-4" src={feat.img} alt="fish img" />
                        <div className="h-28">
                          <p className="font-semibold text-lg text-gray-300 pl-4">{feat.title}</p>
                          <p className="text-sm text-gray-400 px-4">{feat.ingredients}</p>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-600">Last Updated: <br/> {update}</p>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            ))}
          </div>


          <div className="flex flex-wrap lg:flex-nowrap mt-10 gap-1">

            <div className="flex flex-col items-center justify-center bg-pdr2 bg-cover bg-center rounded-xl w-full py-12">
              <p className="font-bold text-gray-200 text-4xl text-center bg-half-transparent rounded-xl p-4 m-8">EVENTS</p>
              <Link to="/events" className="flex items-center text-gray-200 text-lg font-semibold px-1 rounded-lg bg-black bg-opacity-20">View Menus<MdDoubleArrow className='ml-2'/></Link>
            </div>

            <div className="w-full">
              <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Today</p>
              <div className="flex border-b border-gray-600 rounded-b-xl"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <div className="flex justify-center items-center border-b border-gray-400 rounded-xl p-4 my-4 mr-1 ml-4"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                  <p className="min-w-100 text-center font-bold text-gray-200 text-4xl m-1">{events[0].date}</p>
                </div>
                <div className="w-full flex flex-col justify-center items-center border border-gray-400 rounded-xl p-4 my-4 mr-4">
                  <div className="min-w-150">
                    <p className="flex items-center text-gray-200 gap-6"><GiPartyPopper />{events[0].title}</p>
                    <p className="flex items-center text-gray-200 gap-6"><BsClockFill />{events[0].time}</p>
                    <p className="flex items-center text-gray-200 gap-6"><MdLocationPin />{events[0].location} {events[0].details}</p>
                    <p className="flex items-center text-gray-200 gap-6"><BsFillPeopleFill />{events[0].guests}</p>
                    <p className="flex items-center text-gray-200 gap-6"><RiContactsFill />{events[0].contact}</p>
                    <p className="flex items-center text-gray-200 gap-6"><BsFillTelephoneFill />{events[0].phone}</p>
                  </div>
                  {/* <div className="flex items-center justify-center rounded-xl w-40 mr-4">
                    <img className="flex items-center justiofy-center m-2" src={events[0].menu} alt="" />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full">

              <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Upcoming</p>

              <div className="h-450 overflow-auto">

                {events.slice(1).map((event) => (

                  <div key={event.id} className="border-b border-gray-600 rounded-b-xl pt-1"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>

                    <div className="border-b border-gray-400 rounded-xl m-4"
                      style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                      <p className="text-center font-semibold text-gray-200 text-2xl p-2">{event.date}</p>
                    </div>

                    <div className="border border-gray-400 rounded-xl m-4 p-4">

                      <p className="flex items-center text-sm text-gray-200 gap-4"><GiPartyPopper />{event.title}</p>
                      <p className="flex items-center text-sm text-gray-200 gap-4"><BsClockFill />{event.time}</p>
                      <p className="flex items-center text-sm text-gray-200 gap-4"><MdLocationPin />{event.location} {event.details}</p>
                      <p className="flex items-center text-sm text-gray-200 gap-4"><BsFillPeopleFill />{event.guests}</p>
                      <p className="flex items-center text-sm text-gray-200 gap-4"><RiContactsFill />{event.contact}</p>
                      <p className="flex items-center text-sm text-gray-200 gap-4"><BsFillTelephoneFill />{event.phone}</p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          <div className="flex flex-wrap lg:flex-nowrap mt-10">
            <div>
              <div className="flex flex-wrap items-center justify-center bg-dc3 bg-cover bg-center rounded-xl w-full py-12">
                <p className="font-bold text-gray-200 text-3xl text-center bg-half-transparent rounded-xl p-4 m-8">TABLE TENTS</p>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-1  mt-1">
                <div className="">
                  <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Oyster Menu</p>
                  <Carousel>
                    {menus.map((menu) => (
                      <div key={menu.id}>
                        <img src={menu.oysterMenu} alt="menu" />
                        <Link to={menu.oysterEditPath} className="legend">{menu.location}</Link>
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="">
                  <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Beer Menu</p>
                  <Carousel >
                    {menus.map((menu) => (
                      <div key={menu.id}>
                        <img src={menu.beerMenu} alt="menu" />
                        <Link to={menu.beerEditPath} className="legend">{menu.location}</Link>
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="">
                  <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Happy Hour Menu</p>
                  <Carousel >
                    {menus.map((menu) => (
                      <div key={menu.id}>
                        <img src={menu.happyHourMenu} alt="menu" />
                        <Link to={menu.happyHourEditPath} className="legend">{menu.location}</Link>
                      </div>
                    ))}
                  </Carousel>
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap mt-10">
            <div>

              <div className="flex flex-wrap items-center justify-center bg-dinner1 bg-cover bg-center rounded-xl w-full py-12">
                <p className="font-bold text-gray-200 text-3xl text-center bg-half-transparent rounded-xl p-4 m-8">MAIN MENUS</p>
              </div>

              <div className="flex flex-wrap lg:flex-nowrap gap-1  mt-1">
                <div className="">
                  <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Dinner Menu</p>
                  <Carousel>
                    {locations.map((location) => (
                      <div key={location.id}>
                        <img src={images.mainmenu} alt="menu" />
                        <Link to={location.path} className="legend">{location.title}</Link>
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="">
                  <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Cocktail Menu</p>
                  <Carousel >
                    {locations.map((location) => (
                      <div key={location.id}>
                        <img src={images.cocktailmenu} alt="menu" />
                        <Link to={location.path} className="legend">{location.title}</Link>
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="">
                  <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Brunch Menu</p>
                  <Carousel >
                    {locations.map((location) => (
                      <div key={location.id}>
                        <img src={images.brunchmenu} alt="menu" />
                        <Link to={location.path} className="legend">{location.title}</Link>
                      </div>
                    ))}
                  </Carousel>
                </div>

              </div>
            </div>
          </div>
          <div>events</div>

        </div>
      </div>

      <div>
        <ScrollButton />
      </div>
    </>
  )
}

export default Dashboard;