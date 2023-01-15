import React, { useCallback, useRef } from 'react';
import { events } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link } from 'react-router-dom';
import { BsFillPeopleFill, BsFillTelephoneFill, BsClockFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { FaEdit, FaDownload } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';


const Events = () => {

  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="flex justify-center">
      <div className="mt-24 mx-3 lg:mt-10 2xl:mx-8 max-w-1500">
        <div className="flex justify-center bg-pdr bg-cover bg-center rounded-xl py-32 2xl:p-40" >
          <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">Potomac</p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-1">

          <div className="w-full">
            <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8 mt-1"
              style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Events Today</p>
            <div className="flex border-b border-gray-600 rounded-b-xl"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              <div className="flex justify-center items-center border-b border-gray-400 rounded-xl p-4 my-4 mr-1 ml-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                <p className="min-w-100 text-center font-bold text-gray-200 text-4xl m-1">{events[0].date}</p>
              </div>
              <div className="w-full border border-gray-400 rounded-xl p-4 my-4 mr-4">
                <div className="min-w-150">
                  <p className="flex items-center text-gray-200 gap-4"><GiPartyPopper />{events[0].title}</p>
                  <p className="flex items-center text-gray-200 gap-4"><BsClockFill />{events[0].time}</p>
                  <p className="flex items-center text-gray-200 gap-4"><MdLocationPin />{events[0].location} {events[0].details}</p>
                  <p className="flex items-center text-gray-200 gap-4"><BsFillPeopleFill />{events[0].guests}</p>
                  <p className="flex items-center text-gray-200 gap-4"><RiContactsFill />{events[0].contact}</p>
                  <p className="flex items-center text-gray-200 gap-4"><BsFillTelephoneFill />{events[0].phone}</p>
                </div>
                <div className="flex items-center justify-center rounded-xl w-40 mr-4">
                  <img className="flex items-center justiofy-center m-2 w-36" src={events[0].menu} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">

            <p className="font-semibold text-gray-200 text-2xl text-center border-b border-gray-600 rounded-t-xl p-8 mt-1"
              style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>Upcoming</p>

            <div className="h-400 overflow-auto">

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
      </div>
    </div>
  )
}
export default Events