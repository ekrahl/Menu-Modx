import { ContainerHeader, AddItemBtn } from '../../'

const BeerForm = () => {
    return (
        <div className="flex flex-col text-gray-200 mt-2">
            <ContainerHeader title="Add Item Catalog" />
            <div
                className="text-gray-200 border-b border-gray-600 rounded-b-xl pt-1"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <form onSubmit="" className="mt-6">
                    <div className="flex justify-center m-2">
                        <input
                            className="pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="name"
                            placeholder="Beer Name"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <input
                            className="pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="type"
                            placeholder="Beer Type"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <input
                            className="pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="brewery"
                            placeholder="Brewery Name"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <input
                            className="pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="location"
                            placeholder="Brewery Location"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <input
                            className="pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="abv"
                            placeholder="Beer ABV"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <input
                            className="pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="price"
                            placeholder="Beer Price"
                        />
                    </div>
                </form>
                <div className="flex justify-center">
                    <AddItemBtn />
                </div>
            </div>
        </div>
    )
}

export default BeerForm