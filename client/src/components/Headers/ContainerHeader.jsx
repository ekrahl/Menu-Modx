import { useStateContext } from '../../contexts/ContextProvider'

const ContainerHeader = (props) => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <p
            className="font-semibold text-xl text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-4"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>{props.title}
        </p>
    )
}

export default ContainerHeader