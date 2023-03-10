import { ContainerHeader, MenuPageHeader } from '../../components'
import { events } from '../../data/dummy'
import { BsFillPeopleFill, BsFillTelephoneFill, BsClockFill, BsFillGeoAltFill, BsFillPersonLinesFill } from 'react-icons/bs'


const EventMenus = () => {

  return (
    <div className="flex justify-center">
      <div className="mt-24 mx-3 md:mt-0 md:mx-8">
        <MenuPageHeader img="bg-pdr" title="EVENTS" position="bg-center" />
        <div className="flex-1 mt-1">
          <div>
            <ContainerHeader title="Events Today" />
            <div className="">
              <div className="flex gap-1 border-b border-gray-600 rounded-b-xl"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <div className="flex justify-center items-center border-b border-gray-400 rounded-xl md:w-80 my-4 ml-4"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                  <p className="text-center font-semibold text-gray-200 text-2xl m-1 p-2">{events[0].date}</p>
                </div>
                <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:gap-2 items-center border border-gray-400 rounded-xl p-4 mr-4 my-4">
                  <div className="flex flex-wrap md:flex-nowrap w-full">
                    <p className="flex items-center text-gray-200 text-xl md:ml-10">{events[0].title}</p>
                    <div className="md:ml-20 mt-2 md:mt-0">
                      <div className="flex gap-4 md:gap-10">
                        <p className="flex items-center text-gray-200 gap-2"><BsClockFill />{events[0].time}</p>
                        <p className="flex items-center text-gray-200 gap-2"><BsFillPeopleFill />{events[0].guests}</p>
                      </div>
                      <p className="flex items-center text-gray-200 gap-2 mt-2"><BsFillGeoAltFill />{events[0].location} {events[0].details}</p>
                    </div>
                    <div className="md:ml-20">
                      <p className="flex items-center text-gray-200 gap-2 mt-2 md:mt-0"><BsFillPersonLinesFill />{events[0].contact}</p>
                      <p className="flex items-center text-gray-200 gap-2 md:mt-2"><BsFillTelephoneFill />{events[0].phone}</p>
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
            <div className="overflow-auto">
              {events.slice(1).map((event) => (
                <div key={event.id} className="border-b border-gray-600 rounded-b-xl pt-1"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                  <div className="border-b border-gray-400 rounded-xl mx-4 mt-4"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                    <p className="text-center font-semibold text-gray-200 text-xl p-2">{event.date}</p>
                  </div>

                  <div className="border border-gray-400 rounded-xl p-4 mx-4 mb-4">
                    <div className="md:flex md:flex-wrap items-center justify-between w-full">
                      <p className="flex-1 items-center text-gray-200 text-xl md:pl-4">{event.title}</p>
                      
                      <div className="flex-1 md:ml-24 mt-2 md:mt-0">
                        <div className="flex justify-between my-1">
                          <p className="flex items-center text-gray-200 gap-2"><BsClockFill />{event.time}</p>
                          <p className="flex items-center text-gray-200 gap-2"><BsFillPeopleFill />{event.guests}</p>
                        </div>
                        <p className="flex items-center text-gray-200 gap-2 my-1"><BsFillGeoAltFill />{event.location} {event.details}</p>
                      </div>

                      <div className="flex-1 md:ml-24">
                        <p className="flex items-center text-gray-200 gap-2 my-1"><BsFillPersonLinesFill />{event.contact}</p>
                        <p className="flex items-center text-gray-200 gap-2 my-1"><BsFillTelephoneFill />{event.phone}</p>
                      </div>

                      <div className="flex-2 items-center justify-center rounded-xl w-24 mx-4 mt-4 md:mt-0">
                        <img
                          id="eventMenu"
                          className="cursor-pointer"
                          src={event.menu}
                          alt="event menu"
                          onClick={() => document.getElementById('eventMenu')?.requestFullscreen()}
                        />
                      </div>
                      
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventMenus