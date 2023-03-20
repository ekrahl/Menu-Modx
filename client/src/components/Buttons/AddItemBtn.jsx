import { useStateContext } from "../../contexts/ContextProvider"

const AddItemBtn = ({title}) => {

    const { currentColor } = useStateContext()

    return (
        <button
            className="font-semibold text-sm rounded-md hover:drop-shadow-2xl hover:scale-105 active:scale-95 border border-gray-600 p-1 w-44 my-6"
            type="submit"
            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
            title={title}>{title}</button>
    )
}

export default AddItemBtn