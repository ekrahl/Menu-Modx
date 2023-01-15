import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const CurrentMenu = (props) => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <div className="flex flex-wrap justify-center mx-3">
            <div className="lg:w-384">
                <p
                    className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                    Current
                </p>
                <div className="border-b border-gray-600">
                    <img className="" src={props.menu} alt="" />
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-gray-300 border-b border-gray-600 rounded-b-xl py-5" style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                    <p className="">Release Date: 11/20/22</p>
                    <p>Live: 16 Days</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentMenu