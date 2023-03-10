const MenuPageHeader = ({ img, position, title }) => {
    return (
        <div className={`flex justify-center ${img} bg-cover ${position} rounded-xl py-12 md:py-28`} >
            <p className="font-semibold text-3xl 2xl:text-5xl text-gray-200 bg-black bg-opacity-50 rounded-xl tracking-wider p-2">{title}</p>
        </div>
    )
}

export default MenuPageHeader