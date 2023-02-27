const DashboardHeader = (props) => {
    return (
        <div className="flex justify-center mx-3 mt-16 md:mt-0">
            <div className={`flex justify-center ${props.img} bg-cover ${props.position} rounded-xl py-12 md:py-20 w-full`} >
                <p className="flex justify-center font-semibold text-4xl md:text-6xl text-gray-200 bg-half-transparent rounded-xl p-2">{props.title}</p>
            </div>
        </div>
    )
}

export default DashboardHeader