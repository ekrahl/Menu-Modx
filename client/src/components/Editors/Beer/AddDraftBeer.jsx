import { useState } from 'react'
import axios from 'axios'
import { ContainerHeader, AddItemBtn } from '../..'

const AddDraftBeer = () => {

    const [draftBeer, setDraftBeer] = useState({
        name: "",
        type: "",
        brewery: "",
        location: "",
        abv: "",
        price: null
    })

    const handleChange = (e) => {
        setDraftBeer(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/draftbeer", draftBeer)
            e.target.reset()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex flex-col text-gray-200 md:w-350 w-full md:mx-0 mx-1">
            <ContainerHeader title="Add Beer to Draft Catalog" />
            <div
                className="text-gray-200 border-b border-gray-600 rounded-b-xl pt-2 pb-2 mb-1"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <form onSubmit={handleSubmit} className="mt-2">
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Beer Name"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange={handleChange}
                            type="text"
                            name="type"
                            placeholder="Beer Type"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange={handleChange}
                            type="text"
                            name="brewery"
                            placeholder="Brewery Name"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange={handleChange}
                            type="text"
                            name="location"
                            placeholder="Brewery Location"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange={handleChange}
                            type="text"
                            name="abv"
                            placeholder="Beer ABV"
                        />
                    </div>
                    <div className="flex justify-center mx-4 mt-2">
                        <input
                            className="text-slate-900 pl-1 rounded-md w-full"
                            onChange={handleChange}
                            type="text"
                            name="price"
                            placeholder="Beer Price"
                        />
                    </div>
                    <div className="flex justify-center">
                        <AddItemBtn title="Add Item" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDraftBeer