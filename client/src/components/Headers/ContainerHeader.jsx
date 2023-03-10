import { useStateContext } from '../../contexts/ContextProvider'

const ContainerHeader = ({ title }) => {
    const { currentColor } = useStateContext();

    return (
        <p
            className="font-semibold text-lg text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-4"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>{title}
        </p>
    )
}

export default ContainerHeader