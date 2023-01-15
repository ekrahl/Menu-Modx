import React from 'react';

const Header = (props) => {
    return (
        <div className="flex justify-center bg-leesburg bg-cover bg-center rounded-xl py-32 2xl:p-40" >
            <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">{props.title.toUpperCase()}</p>
        </div>
    )
}

export default Header;