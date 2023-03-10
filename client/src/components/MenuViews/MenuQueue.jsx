import { ContainerHeader } from '../'
import { FaEdit, FaDownload, FaTrash } from 'react-icons/fa'

const MenuQueue = ({ img }) => {

    return (
        <div>
            <ContainerHeader title="Queue" />
            <div
                className="text-gray-200 border-b border-gray-600 rounded-b-xl p-2 overflow-auto h-165"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>

                <div className="flex justify-center border border-gray-200 rounded-xl p-4 gap-6">
                    <img className="h-28" src={img} alt="Leesburg features" />
                    <div className="flex flex-col justify-center p-2 gap-4">
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
                        <div className="text-gray-200">
                            <p className="font-semibold">Release:</p>
                            <p className="text-sm mb-2">1/30/23</p>
                            <p className="font-semibold">Created:</p>
                            <p className="text-sm">1/30/23</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>)
}

export default MenuQueue