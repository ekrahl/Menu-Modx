import React from 'react';
import { images } from '../../../data';
import { events } from '../../../data/dummy';
import { BsFillPeopleFill, BsFillTelephoneFill, BsClockFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { GiPartyPopper } from 'react-icons/gi';

const MiddleburgEvents = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="mx-3 mt-24">
                    <div className="flex justify-center bg-main-dark-bg rounded-xl pt-10 pb-6 mx-6">
                        <img src={images.kingstoysterbar} alt="header" />
                    </div>

                    <div className="text-center font-semibold text-3xl mb-10">
                        <p className="mb-10  text-gray-400">
                            Middleburg
                        </p>
                        <p className="italic text-gray-200">
                            Event Menus
                        </p>
                    </div>

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

export default MiddleburgEvents