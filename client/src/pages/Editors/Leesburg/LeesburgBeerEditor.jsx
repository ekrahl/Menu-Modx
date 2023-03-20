import { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import { images } from '../../../data'
import { draft, bottles } from '../../../data/dummy'
import { AddDraftBeer, AddBottledBeer, LocationHeader, ContainerHeader, DownloadBtn, AddToQueueBtn, BeerCatalogBtn, CurrentMenuEditor } from '../../../components'
import * as htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'
import { FaEdit, FaTrash } from 'react-icons/fa'

var node = document.getElementById('menu')

htmlToImage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

const LeesburgBeerEditor = () => {

    // const [draftBeer, setDraftBeer] = useState([])

    // useEffect(() => {
    //     const fetchAllDraftBeer = async () => {
    //         try {
    //             const res = await axios.get("http://localhost:8800/draftbeer")
    //             setDraftBeer(res.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchAllDraftBeer()
    // }, [draftBeer])

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "beer_menu_leesburg.png"
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [draftList, setDraftList] = useState([])
    const [bottleList, setBottleList] = useState([])
    const [bottleObj, setBottleObj] = useState({});
    const [draftObj, setDraftObj] = useState({});

    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if (draftList.includes(draftObj)) {
            return;
        }
        if (draftList.length + bottleList.length > 24) {
            return;
        }
        setDraftList(current => [...current, draftObj])
    }, [draftObj])

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if (bottleList.includes(bottleObj)) {
            return;
        }
        if (draftList.length + bottleList.length > 24) {
            return
        }
        setBottleList(current => [...current, bottleObj])
    }, [bottleObj])

    const handleDraftDelete = (index) => {
        const newList = draftList.filter((beer, i) => i !== index);
        setDraftList(newList);
    };

    const handleBottleDelete = (index) => {
        const newList = bottleList.filter((beer, i) => i !== index);
        setBottleList(newList);
    };

    // const handleCatalogDraftDelete = async (id) => {
    //     try {
    //         await axios.delete("http://localhost:8800/draftbeer/" + id)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <>
            <div className="mt-24 md:mt-4">
                <LocationHeader location={"LEESBURG"} />
                <div className="flex flex-wrap lg:flex-nowrap justify-center mt-6 gap-1">
                    <div className="mx-1">
                        <CurrentMenuEditor
                            img={images.beer_menu_leesburg}
                            headerTitle="Current"
                            imgTitle="Leesburg Beer Menu"
                            downloadLink="beer_menu_leesburg.png"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div>
                            <ContainerHeader title="Build Beer Menu" />
                            <div className="w-384 h-576 relative z-1" ref={ref} id="menu">
                                <img src={images.beer_menu_template} alt="beer menu template" className="absolute z-2" />
                                <div className="flex flex-col justify-between text-center pt-9 h-full pb-6 max-h-576">
                                    {draftList.map((beer, index) => {
                                        if (Object.keys(beer).length !== 0) {
                                            return (
                                                <div key={beer.index} className="relative z-3 font-semibold">
                                                    <div className="flex justify-center">
                                                        <div
                                                            className="w-275 cursor-pointer"
                                                            onClick={() => { handleDraftDelete(index) }}
                                                            style={{ fontFamily: 'montserrat', fontWeight: '700', color: '#182E3D', }}>
                                                            <p style={{ fontSize: '12px', lineHeight: '13px' }}
                                                            >{beer.name}<span style={{ color: '#8A5C36' }}> {beer.type}</span> ${beer.price}</p>
                                                            <p style={{ fontSize: '10px', lineHeight: '10px' }}
                                                            >{beer.brewery} • {beer.location} • {beer.abv}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                    <div className="relative w-72 mx-auto my-1"><img src={images.bottles} alt="Cans & Bottles Divider" /></div>
                                    {bottleList.map((beer, index) => {
                                        if (Object.keys(beer).length !== 0) {
                                            return (
                                                <div key={beer.index} className="relative z-3 font-semibold">
                                                    <div className="flex justify-center">
                                                        <div
                                                            className="w-275 cursor-pointer"
                                                            onClick={() => { handleBottleDelete(index) }}
                                                            style={{ fontFamily: 'montserrat', fontWeight: '700', color: '#182E3D', }}>
                                                            <p style={{ fontSize: '12px', lineHeight: '13px' }}
                                                            >{beer.name}<span style={{ color: '#8A5C36' }}> {beer.type}</span> ${beer.price}</p>
                                                            <p style={{ fontSize: '10px', lineHeight: '10px' }}
                                                            >{beer.brewery} • {beer.location} • {beer.abv}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div
                                className="flex justify-center dark:text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <DownloadBtn onClick={onButtonClick} />
                                <AddToQueueBtn />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mx-1">
                        <div className="w-full">
                            <ContainerHeader title="Draft Catalog" />
                            <div
                                className="h-286 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2 mb-1"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                {draft.map((beer, index) => (
                                    <div key={beer.id} className="flex justify-center text-gray-200 gap-3">
                                        <BeerCatalogBtn onClick={() => { setDraftObj(beer) }} name={beer.name} type={beer.type} price={beer.price} brewery={beer.brewery} />
                                        <button type="button" onClick="" >
                                            <FaEdit size="1.2rem" />
                                        </button>
                                        <button type="button" >
                                            <FaTrash size="1.2rem" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <ContainerHeader title="Cans & Bottles Catalog" />
                            <div
                                className="h-286 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                {bottles.map((beer, index) => (
                                    <div key={beer.id} className="flex justify-center text-gray-200 gap-3">
                                        <BeerCatalogBtn onClick={() => { setBottleObj(beer) }} name={beer.name} type={beer.type} price={beer.price} brewery={beer.brewery} />
                                        <button type="button" onClick="" >
                                            <FaEdit size="1.2rem" />
                                        </button>
                                        <button type="button" onClick="" >
                                            <FaTrash size="1.2rem" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <AddDraftBeer/>
                        <AddBottledBeer/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LeesburgBeerEditor