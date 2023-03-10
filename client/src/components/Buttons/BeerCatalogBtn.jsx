import { useStateContext } from '../../contexts/ContextProvider'

const BeerCatalogBtn = ({ onClick, name, type, price, brewery }) => {
    const { currentColor } = useStateContext()

    return (
        <button
            className="flex text-xs hover:drop-shadow-2xl border border-gray-400 rounded-xl m-1 p-2"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            onClick={onClick}>
            <div className="w-60 flex flex-col">
                <p className="font-semibold">{name} {type} <span className="text-yellow-400">${price}</span></p>
                <p>{brewery}</p>
            </div>
        </button>
    )
}

export default BeerCatalogBtn