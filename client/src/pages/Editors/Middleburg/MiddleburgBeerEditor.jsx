import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import { images } from '../../../data';
import { draft, bottles } from '../../../data/dummy';
import { BeerForm, CurrentMenu } from '../../../components';
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import moment from 'moment';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';

var node = document.getElementById('middleburgBeerMenu');

htmlToImage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

const MiddleburgBeerEditor = () => {
    const { currentColor, currentMode } = useStateContext();

    const date = moment().format('l');
    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "middleburg-beer-menu.png"
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [draftList, setDraftList] = useState(
        [
            {
                id: "1",
                name: "KSOB",
                type: "IPA",
                brewery: "Lost Rhino",
                location: "VA",
                abv: "6.8%",
                price: "$9"
            },
        ]
    )

    const [beerObj, setBeerObj] = useState({});

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if (draftList.includes(beerObj)) {
            return;
        }
        if (draftList.length > 12) {
            return;
        }
        setDraftList(current => [...current, beerObj])
    }, [beerObj])

    const handleDelete = (index) => {
        const newList = draftList.filter((beer, i) => i !== index);
        setDraftList(newList);
    };

    return (
        <>
            <div className="mt-24 lg:mt-6">
                <p className="text-center font-semibold text-4xl dark:text-gray-200 py-8">Beer Editor</p>
                <div className="flex flex-wrap lg:flex-nowrap justify-center mt-6 gap-1">
                    <CurrentMenu menu={images.beer_menu_middleburg} />
                    <div className="flex flex-wrap justify-center">
                        <div className="">
                            <p
                                className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                                Build Menu
                            </p>
                            <div className="w-384 h-576 relative z-1" ref={ref} id="middleburgBeerMenu">
                                <img src={images.beer_menu_template} alt="" className="absolute z-2" />
                                <div className="text-center pt-16">
                                    {draftList.map((beer, index) => (
                                        <div key={beer.id} className="relative z-3 font-semibold">
                                            <div className="flex justify-center">
                                                <div className="w-300 cursor-pointer" onClick={() => { handleDelete(index) }}>
                                                    <p style={{ fontFamily: 'montserrat', fontWeight: '700', fontSize: '12px', color: '#182E3D', lineHeight: '14px' }}>{beer.name}<span style={{ color: '#8A5C36' }}> {beer.type}</span> {beer.price}</p>
                                                    <p style={{ fontFamily: 'montserrat', fontWeight: '700', fontSize: '10px', color: '#182E3D', lineHeight: '10px' }}>{beer.brewery} • {beer.location} • {beer.abv}</p>
                                                    <p style={{ fontFamily: 'montserrat', fontWeight: '600', fontSize: '10px', paddingBottom: '4px' }}>{beer.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="flex justify-center dark:text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <button
                                    className="flex justify-center font-semibold rounded-md border border-gray-600 w-20 p-2 m-2"
                                    onClick={onButtonClick} style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaDownload /></button>
                                <button
                                    className="flex justify-center font-semibold rounded-md border border-gray-600 w-20 p-2 m-2"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><BiAddToQueue /></button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center mx-3">
                        <div className="">
                            <p
                                className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                                Catalog
                            </p>
                            <div className="h-250 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <p
                                    className="text-xl dark:text-gray-200 font-semibold pb-2 pt-2 text-center">Draft Beer</p>

                                {draft.map((beer, index) => (
                                    <div key={beer.id} className="flex text-lg text-gray-200 font-semibold">
                                        <div
                                            className="flex border border-gray-400 rounded-2xl m-1 p-1 cursor-pointer"
                                            style={{ backgroundImage: `linear-gradient(to top, #191919, #1b2d3e)` }} onClick={() => { setBeerObj(beer) }}>
                                            <div className="w-60 flex justify-center">
                                                <p className="">{beer.name}</p>
                                            </div>
                                        </div>
                                        <button type="button" onClick="" >
                                            <AiFillEdit size="1.5rem" />
                                        </button>
                                    </div>
                                ))}
                                <p className="text-xl dark:text-gray-200 font-semibold pb-2 pt-2 text-center">Bottled Beer</p>

                                {bottles.map((beer, index) => (
                                    <div key={beer.id} className="flex text-lg text-gray-200 font-semibold">
                                        <div
                                            className="flex border border-gray-400 rounded-2xl m-1 p-1 cursor-pointer"
                                            style={{ backgroundColor: "#1B2E3D" }} onClick={() => { setBeerObj(beer) }}>
                                            <div className="w-52 flex justify-center">
                                                <p className="">{beer.name}</p>
                                            </div>
                                        </div>
                                        <button type="button" onClick="" >
                                            <AiFillEdit size="1rem" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col text-gray-200 mt-2">
                                <p
                                    className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                                    Add Item to Catalog
                                </p>
                                <div
                                    className="text-gray-200 border-b border-gray-600 rounded-b-xl pt-1"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                    <BeerForm />
                                    <div className="flex justify-center">
                                        <button
                                            className="font-semibold rounded-md border border-gray-600 w-36 p-2 m-3 "
                                            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>Add Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mx-3 mt-10 gap-6">
                    <div className="w-350">
                        <p
                            className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                            Queue
                        </p>
                        <div
                            className="text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                            style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                            <div className="flex justify-center p-4 gap-6">
                                <img className="h-28" src={images.oyster_menu_middleburg} alt="" />
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
                                        <p >By: John</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-350 h-250 overflow-auto">
                        <p
                            className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-8"
                            style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                            Recent
                        </p>
                        <div className="border-b border-gray-600 rounded-b-xl">
                            <div className="text-gray-200 rounded-b-xl p-2" style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <div className="flex justify-center p-4 gap-2">
                                    <img className="h-28" src={images.beer_menu_middleburg} alt="" />
                                    <div className="flex flex-col justify-center p-2 gap-2">
                                        <button
                                            className="sm:text-xl xl:text-2xl p-1"
                                        ><FaDownload /></button>
                                        <button
                                            className="sm:text-xl xl:text-2xl p-1"
                                        ><AiFillEdit /></button>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div className="text-sm text-gray-300">
                                            <p >Release: 11/30/22</p>
                                            <p >Live: 11 days</p>
                                            <p >Created: 11/22/22</p>
                                            <p >By: John</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center p-4 gap-2">
                                    <img className="h-28" src={images.beer_menu_middleburg} alt="" />
                                    <div className="flex flex-col justify-center p-2 gap-2">
                                        <button
                                            className="sm:text-xl xl:text-2xl p-1"
                                        ><FaDownload /></button>
                                        <button
                                            className="sm:text-xl xl:text-2xl p-1"
                                        ><AiFillEdit /></button>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div className="text-sm text-gray-300">
                                            <p >Release: 11/30/22</p>
                                            <p >Live: 11 days</p>
                                            <p >Created: 11/22/22</p>
                                            <p >By: John</p>
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

export default MiddleburgBeerEditor