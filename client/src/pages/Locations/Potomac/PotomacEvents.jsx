import { images } from '../../../data'
import { events } from '../../../data/dummy'
import { BsFillPeopleFill, BsFillTelephoneFill, BsClockFill } from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { GiPartyPopper } from 'react-icons/gi'
import LocationHeader from '../../../components/Headers/LocationHeader'

const PotomacEvents = () => {
    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location="POTOMAC" />
                    <p className="text-center font-semibold text-3xl italic text-gray-800 dark:text-gray-200 my-6">
                        Event Menus
                    </p>
                    {events.map((event) => (
                        <div key={event.id} className="flex">
                            <div className="flex items-center justify-center rounded-xl p-8 text-gray-200 text-3xl lg:min-w-200 m-1" style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <p className="">{event.date}</p>
                            </div>

                            <div className="flex flex-wrap rounded-xl m-1 p-8 text-gray-200 items-center w-full space-x-4" style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <div className="lg:min-w-200 ">
                                    <p className="flex gap-4 items-center p-2"><GiPartyPopper />{event.title}</p>
                                    <p className="flex gap-4 items-center p-2"><RiContactsFill />{event.contact}</p>
                                    <p className="flex gap-4 items-center p-2"><BsFillTelephoneFill />{event.phone}</p>
                                </div>
                                <div className="lg:min-w-200">
                                    <p className="flex gap-4 items-center p-2"><BsClockFill />{event.time}</p>
                                    <p className="flex gap-4 items-center p-2"><BsFillPeopleFill />{event.guests}</p>
                                    <p className="flex gap-4 items-center p-2"><MdLocationPin />{event.location}</p>
                                </div>
                                <div className="max-w-100 m-4">
                                    <img src={event.menu} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PotomacEvents