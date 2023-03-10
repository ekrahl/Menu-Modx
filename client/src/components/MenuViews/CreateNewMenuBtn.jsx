import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider'
import { FaEdit } from 'react-icons/fa'

const CreateNewMenuBtn = ({ path }) => {
    const { currentColor } = useStateContext();

    return (
        <div className="my-1">
            <Link to={path}>
                <p className="flex items-center justify-center font-semibold text-lg text-gray-200 border-b border-gray-600 rounded-xl p-4"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaEdit className='mr-2'/> CREATE NEW MENU</p>

            </Link>
        </div>

    )
}

export default CreateNewMenuBtn