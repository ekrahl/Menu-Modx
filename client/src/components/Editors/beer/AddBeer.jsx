import { ContainerHeader, AddItemBtn } from '../..'

const AddBeer = () => {
    return (
        <div className="flex flex-col text-gray-200 md:w-350 w-full md:mx-0 mx-1">
            <ContainerHeader title="Add Beer to Catalog" />
            <div
                className="text-gray-200 border-b border-gray-600 rounded-b-xl pt-1"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <form onSubmit="" className="mt-2">
                    <div className="flex justify-center m-2 pb-3">
                        <div className="flex">
                            <input
                                className="rounded-md"
                                onChange=""
                                value=""
                                type="radio"
                                name="name"
                                placeholder=""
                            />
                            <p className="ml-2 font-semibold">Draft</p>
                            <input
                                className="ml-8 rounded-md"
                                onChange=""
                                value=""
                                type="radio"
                                name="name"
                                placeholder=""
                            />
                            <p className="ml-2 font-semibold">Bottle</p>
                        </div>
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="name"
                            placeholder="Beer Name"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="type"
                            placeholder="Beer Type"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="brewery"
                            placeholder="Brewery Name"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="location"
                            placeholder="Brewery Location"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="abv"
                            placeholder="Beer ABV"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
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

export default AddBeer