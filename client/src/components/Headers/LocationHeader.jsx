import React from 'react'

const LocationHeader = (props) => {
    return (
        <div className="flex justify-center mt-2">
            <p className="text-center font-semibold text-gray-800 dark:text-gray-300 text-4xl py-2 border-b-2 border-t-2 border-gray-800 dark:border-gray-500">
                {props.location}
            </p>
        </div>
    )
}

export default LocationHeader