import { ContainerHeader } from '../'
import { BsFillPeopleFill, BsFillTelephoneFill, BsClockFill, BsFillGeoAltFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { events } from '../../data/dummy'

const Events = (props) => {

    return (
        <div className="flex flex-col">
            <div className="flex-1 w-full">
                <ContainerHeader title="Events Today" />
                <div className="overflow-auto">
                    <div className="text-gray-200 gap-1 border-b border-gray-600 rounded-b-xl p-2"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                        <div className="border-b border-gray-400 rounded-xl"
                            style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                            <p className="text-center font-semibold text-xl p-2">{events[0].date}</p>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap justify-between items-end text-sm border border-gray-400 rounded-xl px-4 py-2">
                            <div>
                                <p className="flex items-center font-semibold ">{events[0].title}</p>
                                <div className="md:flex md:gap-6 mt-2">
                                    <p className="flex items-center gap-2"><BsClockFill />{events[0].time}</p>
                                    <p className="flex items-center gap-2"><BsFillPeopleFill />{events[0].guests}</p>
                                </div>
                                <p className="flex items-center gap-2"><BsFillGeoAltFill />{events[0].details}</p>
                            </div>
                            <div className='flex flex-col justify-center md:mt-2'>
                                <p className="flex items-center gap-2"><BsFillPersonLinesFill />{events[0].contact}</p>
                                <p className="flex items-center gap-2"><BsFillTelephoneFill />{events[0].phone}</p>
                            </div>
                            <img
                                id="eventMenu"
                                className="flex items-center cursor-pointer w-14 mx-2 mt-4 md:mt-0"
                                src={events[0].menu}
                                alt="event menu"
                                onClick={() => document.getElementById('eventMenu')?.requestFullscreen()}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 mt-1 w-full">
                <ContainerHeader title="Upcoming Events" />
                <div className="max-h-225 overflow-auto">
                    {events.slice(1).map((event) => {
                        if (event.location === props.location) {
                            return (
                                <div key={event.id} className="text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                    <div className="border-b border-gray-400 rounded-xl"
                                        style={{ backgroundImage: `linear-gradient(to top, #191919, #A88F76)` }}>
                                        <p className="text-center font-semibold text-xl p-2">{event.date}</p>
                                    </div>
                                    <div className="flex flex-wrap md:flex-nowrap justify-between items-end text-sm border border-gray-400 rounded-xl px-4 py-2">
                                        <div>
                                            <p className="flex items-center font-semibold ">{event.title}</p>
                                            <div className="md:flex md:gap-6 mt-2">
                                                <p className="flex items-center gap-2"><BsClockFill />{event.time}</p>
                                                <p className="flex items-center gap-2"><BsFillPeopleFill />{event.guests}</p>
                                            </div>
                                            <p className="flex items-center gap-2"><BsFillGeoAltFill />{event.details}</p>
                                        </div>
                                        <div className='flex flex-col justify-center md:mt-2'>
                                            <p className="flex items-center gap-2"><BsFillPersonLinesFill />{event.contact}</p>
                                            <p className="flex items-center gap-2"><BsFillTelephoneFill />{event.phone}</p>
                                        </div>
                                        <img
                                            id="eventMenu"
                                            className="flex items-end cursor-pointer w-14 mx-2 mt-4 md:mt-0"
                                            src={events[0].menu}
                                            alt="event menu"
                                            onClick={() => document.getElementById('eventMenu')?.requestFullscreen()}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Events