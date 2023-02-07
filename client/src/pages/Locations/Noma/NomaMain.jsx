import React from "react";
import { Link } from 'react-router-dom';
import { images } from '../../../data';

const Noma = () => {

    return (
        <>
            <div className="flex justify-center bg-main-dark-bg rounded-xl pt-24 pb-6 mx-6">
                <img src={images.kingstoysterbar} alt="header" />
            </div>

            <div className="mx-3 lg:mx-30">

                <p className="font-semibold text-center text-gray-400 text-4xl pb-10">
                    NoMa
                </p>

                <div className="lg:flex lg:flex-wrap lg:justify-center">
                    <Link to="/nomafeatures">
                        <div className="flex justify-center bg-specials3 bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">Daily Features</p>
                        </div>
                    </Link>

                    <Link to="/nomaevents">
                        <div className="flex justify-center bg-pdr bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Events</p>
                        </div>
                    </Link>

                    <Link to='/nomaoysters'>
                        <div className="flex justify-center bg-oysters2 bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Oysters</p>
                        </div>
                    </Link>

                    <Link to='/nomabeer'>
                        <div className="flex justify-center bg-beer bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Beer</p>
                        </div>
                    </Link>

                    <Link to='/nomahappyhour'>
                        <div className="flex justify-center bg-hh bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Happy Hour</p>
                        </div>
                    </Link>

                    <Link to='/nomadinner'>
                        <div className="flex justify-center bg-dinner1 bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Dinner</p>
                        </div>
                    </Link>

                    <Link to='/nomacocktail'>
                        <div className="flex justify-center bg-cocktail4 bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Cocktail</p>
                        </div>
                    </Link>

                    <Link to='/nomabrunch'>
                        <div className="flex justify-center bg-brunch1 bg-cover bg-center rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Brunch</p>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Noma