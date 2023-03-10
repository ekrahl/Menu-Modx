import { useStateContext } from "../../contexts/ContextProvider"

const AddItemBtn = () => {

    const { currentColor } = useStateContext()

    return (
        <button
            className="font-semibold text-sm rounded-md hover:drop-shadow-2xl border border-gray-600 p-1 w-44 m-3"
            type="submit"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            title="Add Item to Catalog">Add Item</button>
    )
}

export default AddItemBtn