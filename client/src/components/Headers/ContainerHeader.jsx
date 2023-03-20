import { useStateContext } from '../../contexts/ContextProvider'

const ContainerHeader = ({ title }) => {
    const { currentColor } = useStateContext();

    return (
        <h1
            className="font-semibold text-lg text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-4"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>{title}
        </h1>
    )
}

export default ContainerHeader