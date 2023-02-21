import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEdit, FaDownload } from 'react-icons/fa';
import { foodFeatures, drinkFeatures } from '../../data/dummy';

const Features = (props) => {
    const update = moment().subtract(1, 'days').calendar();
    const { currentColor, currentMode } = useStateContext();

    return (
        <div className="mt-0.5">

            <p
                className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6 mt-1"
                style={{ backgroundImage: `linear-gradient(to top, #000000, ${currentColor})` }}>
                Features
            </p>

            <div className="flex flex-wrap xl:flex-nowrap">
                <div>
                    {foodFeatures.filter(feat => feat.location_id === props.id).map((feat) => {
                        return (
                            <div className="border-b border-gray-600 max-w-400 p-4" style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <img className="rounded-t-xl px-2 pt-2" src={feat.img} alt="" />
                                <p className="font-semibold text-gray-200 p-2">{feat.title}</p>
                                <p className="md:h-28 text-sm text-gray-400 px-2 pb-2">{feat.ingredients}</p>
                                <p className="text-sm text-gray-500 px-2">last updated: {update}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {drinkFeatures.filter(feat => feat.location_id === props.id).map((feat) => {
                        return (
                            <div className="border-b border-gray-600 max-w-400 p-4" style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <img className="rounded-t-xl px-2 pt-2" src={feat.img} alt="" />
                                <p className="font-semibold text-gray-200 p-2">{feat.title}</p>
                                <p className="md:h-28 text-sm text-gray-400 px-2 pb-2">{feat.ingredients}</p>
                                <p className="text-sm text-gray-500 px-2">last updated: {update}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div
                className="flex flex-wrap justify-center space-x-10 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <Link to={props.featureEditPath}>
                    <button
                        className="sm:text-md xl:text-4xl border border-gray-600 rounded-md px-14 py-4"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                        title="Edit"><FaEdit /></button>
                </Link>
                <button
                    className="sm:text-md xl:text-4xl border border-gray-600 rounded-md px-14 py-4"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                    title="Download"><FaDownload /></button>
            </div>

        </div>
    )
}

export default Features