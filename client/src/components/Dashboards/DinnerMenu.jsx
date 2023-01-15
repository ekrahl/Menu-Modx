import React, { useCallback, useRef } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import { FaEdit, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toPng } from 'html-to-image';


const DinnerMenu = (props) => {
    const { currentColor, currentMode } = useStateContext();
    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "leesburg-oyster-menu.png"
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
                Dinner
            </p>
            <div className="border-b border-gray-600">
                <img className="" src={props.dinnerMenu} alt="" ref={ref} />
            </div>
            <div
                className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 bg-secondary-dark-bg border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
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
    )
}

export default DinnerMenu