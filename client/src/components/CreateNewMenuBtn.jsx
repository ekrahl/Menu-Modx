import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const CreateNewMenuBtn = (props) => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <div className="mb-1">
            <Link to={props.path}>
                <p className="font-semibold text-2xl text-gray-200 border-b border-gray-600 rounded-xl text-center p-6"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>+ CREATE NEW MENU</p>

            </Link>
        </div>

    )
}

export default CreateNewMenuBtn