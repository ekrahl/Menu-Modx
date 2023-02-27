import { useStateContext } from "../../contexts/ContextProvider"

const AddItemBtn = () => {

    const { currentColor, currentMode } = useStateContext()

    return (
        <button
            className="font-semibold text-sm rounded-md border border-gray-600 p-2 m-3"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>Add Item</button>
    )
}

export default AddItemBtn