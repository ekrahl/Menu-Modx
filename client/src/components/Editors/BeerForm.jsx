import React from 'react'

const BeerForm = () => {
    return (
        <form onSubmit="" className="mt-6">
            <div className="flex justify-center m-2">
                <input
                    className="pl-1 rounded-md"
                    onChange=""
                    value=""
                    type="text"
                    name="name"
                    placeholder="Beer Name"
                />
            </div>
            <div className="flex justify-center m-2">
                <input
                    className="pl-1 rounded-md"
                    onChange=""
                    value=""
                    type="text"
                    name="type"
                    placeholder="Beer Type"
                />
            </div>
            <div className="flex justify-center m-2">
                <input
                    className="pl-1 rounded-md"
                    onChange=""
                    value=""
                    type="text"
                    name="brewery"
                    placeholder="Brewery Name"
                />
            </div>
            <div className="flex justify-center m-2">
                <input
                    className="pl-1 rounded-md"
                    onChange=""
                    value=""
                    type="text"
                    name="location"
                    placeholder="Brewery Location"
                />
            </div>
            <div className="flex justify-center m-2">
                <input
                    className="pl-1 rounded-md"
                    onChange=""
                    value=""
                    type="text"
                    name="abv"
                    placeholder="Beer ABV"
                />
            </div>
            <div className="flex justify-center m-2">
                <input
                    className="pl-1 rounded-md"
                    onChange=""
                    value=""
                    type="text"
                    name="price"
                    placeholder="Beer Price"
                />
            </div>
        </form>
    )
}

export default BeerForm