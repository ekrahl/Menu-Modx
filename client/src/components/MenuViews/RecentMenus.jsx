import { useStateContext } from '../../contexts/ContextProvider'
import { FaEdit, FaDownload, FaTrash } from 'react-icons/fa'

const RecentMenus = (props) => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <div className="mt-2">
            <p
                className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                Recent
            </p>
            <div
                className="text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <div className="flex justify-center p-4 gap-6">
                    <img className="h-28" src={props.img} alt="Leesburg features" />
                    <div className="flex flex-col justify-center p-2 gap-3">
                        <button
                            className="sm:text-xl xl:text-2xl"
                        ><FaDownload /></button>
                        <button
                            className="sm:text-xl xl:text-2xl"
                        ><FaEdit /></button>
                        <button
                            className="sm:text-xl xl:text-2xl"
                        ><FaTrash /></button>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="text-gray-400">
                            <p className="font-semibold text-gray-200 mb-2">Release Date: 11/30/22</p>
                            <p >Created: 11/22/22</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentMenus