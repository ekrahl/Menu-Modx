import React, { useCallback, useRef } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEdit, FaDownload } from 'react-icons/fa';
import { toPng } from 'html-to-image';

const BeerMenu = (props) => {
    const update = moment().subtract(1, 'days').calendar();
    const { currentColor, currentMode } = useStateContext();
    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "leesburg-beer-menu.png"
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])


    return (
        <div>
            <p
                className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8 mt-1"
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                Beer
            </p>
            <div className="border-b border-gray-600">
                <img className="" src={props.beerImg} alt="" ref={ref} />
            </div>
            <div className="" style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <p className="text-sm text-gray-500 text-center p-2">last updated: {update}</p>
                <div
                    className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4">

                    <Link to={props.beerEditPath}>
                        <button
                            className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-8 py-2"
                            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                            title="Edit"><FaEdit /></button>
                    </Link>
                    <button
                        type="button"
                        onClick={onButtonClick}
                        className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-8 py-2"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                        title="Download"><FaDownload /></button>
                </div>
            </div>
        </div>
    )
}

export default BeerMenu