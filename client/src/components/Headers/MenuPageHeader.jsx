const MenuPageHeader = (props) => {
    return (
        <div className={`flex justify-center ${props.img} bg-cover ${props.position} rounded-xl py-12 md:py-20`} >
            <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">{props.title}</p>
        </div>
    )
}

export default MenuPageHeader