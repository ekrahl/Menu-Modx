const MenuPageHeader = ({ img, position, title }) => {
    return (
        <div className={`flex justify-center ${img} bg-cover ${position} rounded-xl py-12 md:py-20`} >
            <h1 className="font-semibold text-3xl 2xl:text-5xl text-gray-200 bg-black bg-opacity-50 rounded-xl tracking-widest p-2">{title}</h1>
        </div>
    )
}

export default MenuPageHeader