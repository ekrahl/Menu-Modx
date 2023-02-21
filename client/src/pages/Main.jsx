import React from "react";
import { Link } from 'react-router-dom';
import { images } from '../data';

const Main = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-main-dark-bg rounded-xl mt-16 md:mt-0 py-4 px-14 mx-3 md:max-w-1200">
                    <img src={images.kingstoysterbar} alt="header" />
                </div>
            </div>

            <div className="mx-3 md:mx-40 ">


                <div className="md:flex md:flex-wrap md:justify-center">
                    <Link to="/dashboardmain">
                        <div className="flex justify-center bg-logo2 bg-cover bg-no-repeat bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 md:min-w-500 lg:min-w-1000" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Dashboard</p>
                        </div>
                    </Link>
                    <Link to="/leesburgmain">
                        <div className="flex justify-center bg-leesburg bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 md:min-w-500 lg:min-w-1000" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Leesburg</p>
                        </div>
                    </Link>

                    <Link to="/middleburgmain">
                        <div className="flex justify-center bg-middleburg bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 md:min-w-500 lg:min-w-1000" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Middleburg</p>
                        </div>
                    </Link>

                    <Link to='/nomamain'>
                        <div className="flex justify-center bg-dc5 bg-cover bg-top border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 md:min-w-500 lg:min-w-1000" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">NoMa</p>
                        </div>
                    </Link>

                    <Link to='/potomacmain'>
                        <div className="flex justify-center bg-potomac bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 md:min-w-500 lg:min-w-1000" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Potomac</p>
                        </div>
                    </Link>
                </div>


            </div>
        </>
    )
}

export default Main