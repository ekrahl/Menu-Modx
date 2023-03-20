const LocationHeader = ({ location }) => {
    return (
        <div className="flex justify-center mt-2">
            <h1 className="text-center font-semibold text-gray-800 dark:text-gray-300 text-4xl md:text-6xl py-2 border-b-2 border-t-2 border-gray-800 dark:border-gray-500">
                {location}
            </h1>
        </div>
    )
}

export default LocationHeader