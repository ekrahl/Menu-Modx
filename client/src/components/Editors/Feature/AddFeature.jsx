import { ContainerHeader, AddItemBtn } from '../..'

const AddFeature = () => {

    return (

        <div className="flex flex-col text-gray-200 mt-2">
            <ContainerHeader title="Add Item to Catalog" />
            <div
                className="text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <form onSubmit="" className="mt-2" action="/action_page.php">
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
                            <p className="ml-2 font-semibold">Food</p>
                            <input
                                className="ml-8 rounded-md"
                                onChange=""
                                value=""
                                type="radio"
                                name="name"
                                placeholder=""
                            />
                            <p className="ml-2 font-semibold">Beverage</p>
                        </div>
                    </div>
                    <div className="flex justify-center m-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="title"
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <textarea
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="ingredients"
                            placeholder="Ingredients"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <textarea
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="allergies"
                            placeholder="Allergies"
                        />
                    </div>
                    <div className="flex justify-center m-2">
                        <textarea
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange=""
                            value=""
                            type="text"
                            name="notes"
                            placeholder="Notes"
                        />
                    </div>
                    <p className="text-center text-sm font-semibold p-2">Upload Image</p>
                    <div className="flex justify-center text-xs m-2">
                        <input className="rounded-md" type="file" id="myFile" name="filename" />
                    </div>
                </form>
                <div className="flex justify-center">
                    <AddItemBtn />
                </div>
            </div>
        </div>
    )
}

export default AddFeature