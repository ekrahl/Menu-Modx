import { useStateContext } from '../../contexts/ContextProvider'
import { FaEdit } from 'react-icons/fa'

const EditBtn = () => {
    const { currentColor } = useStateContext()

    return (
        <button
            type="button"
            className="flex justify-center text-gray-200 sm:text-md xl:text-xl hover:drop-shadow-2xl hover:scale-105 active:scale-95 border border-gray-600 rounded-md px-8 py-2 m-1"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            title="Edit Menu"><FaEdit /></button>)
}

export default EditBtn