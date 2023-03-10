import { useStateContext } from '../../contexts/ContextProvider'
import { FaDownload } from 'react-icons/fa'

const DownloadBtn = ({ onClick }) => {
    const { currentColor } = useStateContext()

    return (
        <button
            type="button"
            onClick={onClick}
            className="flex justify-center sm:text-md xl:text-xl hover:drop-shadow-2xl border border-gray-600 rounded-md w-40 p-2 m-2"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            title="Download Menu"
        ><FaDownload /></button>)
}

export default DownloadBtn