import { Link } from 'react-router-dom'
import { locations, foodFeatures, drinkFeatures, events, menus } from '../../data/dummy'
import { BsClockFill, BsFillPeopleFill, BsFillTelephoneFill, BsFillGeoAltFill, BsFillPersonLinesFill, BsChevronDoubleRight } from 'react-icons/bs'
import { ScrollButton, LogoHeader, ContainerHeader } from '../../components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'


const Dashboard = () => {
  const containerColor = { backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }

  return (
    <>
      <LogoHeader />
      <div className="md:mx-3 mt-8">
        <div className="flex flex-col justify-center mx-auto px-3 md:mt-2 md:max-w-1200">
          <div className="flex flex-wrap md:flex-nowrap justify-center mt-1 gap-1">

            <div className="flex flex-col items-center justify-center text-gray-200 bg-veggieprep bg-cover rounded-xl w-full border-b border-gray-600 py-12">
              <p className="font-bold text-2xl text-center bg-half-transparent rounded-xl p-2 m-4 text-(-90deg)">DAILY FEATURES</p>
              <Link
                to="/featuresmain"
                className="flex items-center text-lg font-semibold px-2 rounded-lg bg-half-transparent"
              >View Menus<BsChevronDoubleRight className='ml-2' /></Link>
            </div>
            {locations.map((location) => (
              <div className="w-full">
                <Link to={location.path}>
                  <ContainerHeader title={location.title} />
                </Link>
                {foodFeatures.map((feat) => {
                  if (feat.location_id === location.id) {
                    return (
                      <div
                        className="border-b border-gray-600 pb-2"
                        style={containerColor}>
                        <img className="p-3" src={feat.img} alt="fish img" />
                        <div className="md:h-28">
                          <p className="font-semibold text-gray-300 pl-4">{feat.title}</p>
                          <p className="text-sm text-gray-400 px-4">{feat.ingredients}</p>
                        </div>
                      </div>
                    )
                  }
                })}
                {drinkFeatures.map((feat) => {
                  if (feat.location_id === location.id) {
                    return (
                      <div
                        className="border-b border-gray-600 rounded-b-xl pb-2"
                        style={containerColor}>
                        <img className="p-3" src={feat.img} alt="fish img" />
                        <div className="md:h-28">
                          <p className="font-semibold text-gray-300 pl-4">{feat.title}</p>
                          <p className="text-sm text-gray-400 px-4">{feat.ingredients}</p>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex-1 flex-col items-center justify-center bg-pdr2 bg-cover bg-center rounded-xl border-b border-gray-600 py-12">
              <div className="flex flex-col justify-center items-center text-gray-200">
                <p className="font-bold text-3xl md:text-4xl text-center bg-half-transparent rounded-xl p-4 m-8">EVENTS</p>
                <Link
                  to="/eventsmain"
                  className="flex items-center text-lg font-semibold px-2 rounded-lg bg-half-transparent"
                >View Menus<BsChevronDoubleRight className='ml-2' /></Link>
              </div>
            </div>
            <div className="flex-1 mt-1">
              <div className="">
                <ContainerHeader title="Events Today" />
                <div className="md:h-200 overflow-auto">
                  <div className="flex text-gray-200 gap-1 border-b border-gray-600 rounded-b-xl"
                    style={containerColor}>
                    <div className="flex justify-center items-center border-b border-gray-400 rounded-xl md:w-80 my-4 ml-4"
                      style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                      <p className="text-center font-semibold text-2xl m-1 p-2">{events[0].date}</p>
                    </div>
                    <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:gap-2 items-center border border-gray-400 rounded-xl p-4 mr-4 my-4">
                      <div className="flex flex-wrap md:flex-nowrap w-full">
                        <p className="flex items-center font-semibold text-xl md:ml-10">{events[0].title}</p>
                        <div className="md:ml-20 mt-2 md:mt-0">
                          <div className="flex gap-4 md:gap-10">
                            <p className="flex items-center gap-2"><BsClockFill />{events[0].time}</p>
                            <p className="flex items-center gap-2"><BsFillPeopleFill />{events[0].guests}</p>
                          </div>
                          <p className="flex items-center gap-2 mt-2"><BsFillGeoAltFill />{events[0].location} {events[0].details}</p>
                        </div>
                        <div className="md:ml-20">
                          <p className="flex items-center gap-2 mt-2 md:mt-0"><BsFillPersonLinesFill />{events[0].contact}</p>
                          <p className="flex items-center gap-2 md:mt-2"><BsFillTelephoneFill />{events[0].phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center rounded-xl w-32 mr-4 mt-4 md:mt-0">
                        <img
                          id="eventMenu"
                          className="cursor-pointer"
                          src={events[0].menu}
                          alt="event menu"
                          onClick={() => document.getElementById('eventMenu')?.requestFullscreen()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <ContainerHeader title="Upcoming Events" />
                <div className="h-250 overflow-auto">
                  {events.slice(1).map((event) => (
                    <div key={event.id} className="text-gray-200 border-b border-gray-600 rounded-b-xl pt-1"
                      style={containerColor}>
                      <div className="border-b border-gray-400 rounded-xl mx-4 mt-4"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                        <p className="text-center font-semibold text-xl p-2">{event.date}</p>
                      </div>
                      <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-2 items-center border border-gray-400 rounded-xl p-4 mx-4 mb-4">
                        <div className="flex flex-wrap md:flex-nowrap justify-between">
                          <p className="flex items-center font-semibold text-xl">{event.title}</p>
                          <div className="md:ml-24 mt-2 md:mt-0">
                            <div className="flex gap-4 my-1 md:gap-10">
                              <p className="flex items-center gap-2"><BsClockFill />{event.time}</p>
                              <p className="flex items-center gap-2"><BsFillPeopleFill />{event.guests}</p>
                            </div>
                            <p className="flex items-center gap-2 my-1"><BsFillGeoAltFill />{event.location} {event.details}</p>
                          </div>
                          <div className="md:ml-24">
                            <p className="flex items-center gap-2 my-1"><BsFillPersonLinesFill />{event.contact}</p>
                            <p className="flex items-center gap-2 my-1"><BsFillTelephoneFill />{event.phone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex items-center justify-center bg-dc3 bg-cover bg-center rounded-xl border-b border-gray-600 py-12">
              <p className="font-bold text-gray-200 text-3xl md:text-4xl text-center bg-half-transparent rounded-xl p-4 m-8">TABLE TENTS</p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1 mt-1">
              <div className="w-full">
                <ContainerHeader title="Oyster Menu" />
                <Carousel>
                  {menus.map((menu) => (
                    <div key={menu.id}>
                      <img src={menu.oysterMenu} alt="menu" />
                      <Link to={menu.oysterEditPath} className="legend">{menu.location}</Link>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="w-full">
                <ContainerHeader title="Beer Menu" />
                <Carousel >
                  {menus.map((menu) => (
                    <div key={menu.id}>
                      <img src={menu.beerMenu} alt="menu" />
                      <Link to={menu.beerEditPath} className="legend">{menu.location}</Link>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="w-full">
                <ContainerHeader title="Happy Hour Menu" />
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
          <div className="flex flex-col mt-1">
            <div className="flex items-center justify-center bg-dinner bg-cover bg-center rounded-xl border-b border-gray-600 py-12">
              <p className="font-bold text-gray-200 text-3xl md:text-4xl text-center bg-half-transparent rounded-xl p-4 m-8">MAIN MENUS</p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1  mt-1">
              <div className="w-full">
                <ContainerHeader title="Dinner Menu" />
                <Carousel>
                  {menus.map((menu) => (
                    <div key={menu.id}>
                      <img src={menu.dinnerMenu} alt="menu" />
                      <Link to={menu.path} className="legend">{menu.location}</Link>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="w-full">
                <ContainerHeader title="Cocktail Menu" />
                <Carousel >
                  {menus.map((menu) => (
                    <div key={menu.id}>
                      <img src={menu.cocktailMenu} alt="menu" />
                      <Link to={menu.path} className="legend">{menu.location}</Link>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="w-full">
                <ContainerHeader title="Brunch Menu" />
                <Carousel >
                  {menus.map((menu) => (
                    <div key={menu.id}>
                      <img src={menu.brunchMenu} alt="menu" />
                      <Link to={menu.path} className="legend">{menu.location}</Link>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ScrollButton />
        </div>
      </div>
    </>
  )
}

export default Dashboard;