import { useStateContext } from '../../contexts/ContextProvider'
import { FaDownload } from 'react-icons/fa'

const DownloadBtn = ({ onClick }) => {
    const { currentColor } = useStateContext()

    return (
        <button
            type="button"
            onClick={onClick}
            className="flex justify-center text-gray-200 sm:text-md xl:text-xl hover:drop-shadow-2xl hover:scale-105 active:scale-95 border border-gray-600 rounded-md px-8 py-2 m-1"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            title="Download Menu"
        ><FaDownload /></button>)
}

export default DownloadBtn