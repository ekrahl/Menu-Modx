import { useStateContext } from '../../contexts/ContextProvider'

const CatalogBtn = ({ onClick, info }) => {
    const { currentColor } = useStateContext()

    return (
        <button
            className="flex text-xs hover:drop-shadow-2xl border border-gray-400 rounded-xl m-1 p-2"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            onClick={onClick}>
            <div className="w-60 flex flex-col">
                <p className="font-semibold">{info}</p>
            </div>
        </button>
    )
}

export default CatalogBtn