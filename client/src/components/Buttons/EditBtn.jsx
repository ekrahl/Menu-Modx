import { useStateContext } from '../../contexts/ContextProvider'
import { FaEdit } from 'react-icons/fa'

const EditBtn = (props) => {
    const { currentColor, currentMode } = useStateContext()

    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className="sm:text-md xl:text-2xl border border-gray-600 rounded-md px-8 py-2"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            title="Edit"><FaEdit /></button>)
}

export default EditBtn