const DashboardHeader = ({ img, position, title }) => {
    return (
        <div className="flex justify-center mx-3 mt-16 md:mt-0">
            <div className={`flex justify-center ${img} bg-cover ${position} rounded-xl py-12 md:py-28 w-full`} >
                <h1 className="flex justify-center font-semibold text-4xl md:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">{title}</h1>
            </div>
        </div>
    )
}

export default DashboardHeader