import React from "react";
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../contexts/ContextProvider';
import { FaEdit, FaDownload } from 'react-icons/fa';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { images } from '../../../data';

const NomaFeatures = () => {

    const { currentColor, currentMode } = useStateContext();

    return (
        <>
            <div className="flex justify-center">
                <div className="mx-3 mt-24">

                    <div className="flex justify-center bg-main-dark-bg rounded-xl pt-10 pb-6 mx-6">
                        <img src={images.kingstoysterbar} alt="header" />
                    </div>

                    <div className="text-center font-semibold text-3xl mb-10">
                        <p className="mb-10 text-gray-400">
                            NoMa
                        </p>
                        <p className="text-gray-200 italic">
                            Daily Features Menu
                        </p>
                    </div>


                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="lg:max-w-500 m-1">
                            <p
                                className="font-semibold text-3xl text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-8"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>Current
                            </p>

                            <img className="border-b border-gray-600" src={images.menu_features_noma} alt="Leesburg Features Menu" title="Leesburg Features Menu" />

                            <div
                                className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <button
                                    type="button"
                                    onClick=""
                                    className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                                    title="Download"><FaDownload /></button>
                            </div>
                        </div>
                        <div className="lg:max-w-500 m-1 w-full">
                            <div className="mb-1">
                                <Link to="/nomafeatureeditor">
                                    <p className="font-semibold text-3xl text-gray-200 border-b border-gray-600 rounded-xl text-center p-8"
                                        style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>+ CREATE NEW MENU</p>

                                </Link>
                            </div>
                            <div className="mt-2">
                                <p
                                    className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                                    Queue
                                </p>
                                <div
                                    className="text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                    <div className="flex justify-center p-4 gap-6">
                                        <img className="h-28" src={images.menu_features_noma} alt="Leesburg features" />
                                        <div className="flex flex-col justify-center p-2 gap-3">
                                            <button
                                                className="sm:text-xl xl:text-2xl"
                                            ><FaDownload /></button>
                                            <button
                                                className="sm:text-xl xl:text-2xl"
                                            ><AiFillEdit /></button>
                                            <button
                                                className="sm:text-xl xl:text-2xl"
                                            ><AiFillDelete /></button>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div className="text-gray-400">
                                                <p className="font-semibold text-gray-200 mb-2">Release Date: 11/30/22</p>
                                                <p >Created: 11/22/22</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            
                            <div className="mt-2">
                                <p
                                    className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                                    Recent
                                </p>
                                <div
                                    className="text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                    <div className="flex justify-center p-4 gap-6">
                                        <img className="h-28" src={images.menu_features_noma} alt="Leesburg features" />
                                        <div className="flex flex-col justify-center p-2 gap-3">
                                            <button
                                                className="sm:text-xl xl:text-2xl"
                                            ><FaDownload /></button>
                                            <button
                                                className="sm:text-xl xl:text-2xl"
                                            ><AiFillEdit /></button>
                                            <button
                                                className="sm:text-xl xl:text-2xl"
                                            ><AiFillDelete /></button>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div className="text-gray-400">
                                                <p className="font-semibold text-gray-200 mb-2">Release Date: 11/30/22</p>
                                                <p >Created: 11/22/22</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default NomaFeatures