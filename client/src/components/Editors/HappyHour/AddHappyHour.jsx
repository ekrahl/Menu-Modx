import { ContainerHeader, AddItemBtn } from '../..'

const AddHappyHour = () => {
    return (
        <div className="flex flex-col text-gray-200 w-full mx-1 md:mx-0 md:w-350">
            <ContainerHeader title="Add Item to Catalog" />
            <div
                className="h-200 text-gray-200 border-b border-gray-600 rounded-b-xl"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <form onSubmit="" className="mt-2">
                    <div className="flex justify-center m-2 py-2">
                        <div className="flex">
                            <input
                                className="rounded-md"
                                onChange=""
                                value=""
                                type="radio"
                                name="name"
                                placeholder=""
                            />
                            <p className="ml-1 font-semibold">Cocktail</p>
                            <input
                                className="ml-8 rounded-md"
                                onChange=""
                                value=""
                                type="radio"
                                name="name"
                                placeholder=""
                            />
                            <p className="ml-1 font-semibold">Beer/Wine</p>
                            <input
                                className="ml-8 rounded-md"
                                onChange=""
                                value=""
                                type="radio"
                                name="name"
                                placeholder=""
                            />
                            <p className="ml-1 font-semibold">Food</p>
                        </div>
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="title"
                            placeholder="Cocktail Title"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="subTitle"
                            placeholder="Cocktail Subtitle"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="price"
                            placeholder="Price"
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

export default AddHappyHour