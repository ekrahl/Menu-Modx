import { useState, useEffect, useCallback, useRef } from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { images } from '../../../data'
import { draft, bottles } from '../../../data/dummy'
import { BeerForm, LocationHeader } from '../../../components'
import * as htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'
import { FaDownload, FaEdit, FaDelete } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'

var node = document.getElementById('nomaBeerMenu')

htmlToImage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

const NomaBeerEditor = () => {
    const { currentColor, currentMode } = useStateContext();

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "noma-beer-menu.png"
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
        if (draftList.length > 20) {
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
            <div className="mt-24 md:mt-4">
                <LocationHeader location={"NOMA"} />
                <div className="flex flex-wrap lg:flex-nowrap justify-center mt-6 gap-1">
                    <div className="flex flex-wrap justify-center">
                        <div className="">
                            <p
                                className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                                Build Beer Menu
                            </p>
                            <div className="w-384 h-576 relative z-1" ref={ref} id="nomaBeerMenu">
                                <img src={images.beer_menu_template} alt="" className="absolute z-2" />
                                <div className="text-center pt-12">
                                    {draftList.map((beer, index) => (
                                        <div key={beer.id} className="relative z-3 font-semibold">
                                            <div className="flex justify-center">
                                                <div className="w-300 cursor-pointer" onClick={() => { handleDelete(index) }}>
                                                    <p style={{
                                                        fontFamily: 'montserrat',
                                                        fontWeight: '700',
                                                        fontSize: '12px',
                                                        color: '#182E3D',
                                                        lineHeight: '14px'
                                                    }}>{beer.name}<span style={{ color: '#8A5C36' }}> {beer.type}</span> {beer.price}</p>
                                                    <p style={{
                                                        fontFamily: 'montserrat',
                                                        fontWeight: '700',
                                                        fontSize: '10px',
                                                        color: '#182E3D',
                                                        lineHeight: '10px'
                                                    }}>{beer.brewery} • {beer.location} • {beer.abv}</p>
                                                    <p style={{
                                                        fontFamily: 'montserrat',
                                                        fontWeight: '600',
                                                        fontSize: '10px',
                                                        paddingBottom: '4px'
                                                    }}>{beer.description}</p>
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
                                className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
                                Catalog
                            </p>
                            <div className="h-250 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <p
                                    className="text-xl dark:text-gray-200 font-semibold pb-2 pt-2 text-center">Draft Beer</p>

                                {draft.map((beer, index) => (
                                    <div key={beer.id} className="flex text-lg text-gray-200 gap-2">
                                        <div
                                            className="flex border border-gray-400 rounded-2xl m-1 p-1 cursor-pointer"
                                            style={{ backgroundImage: `linear-gradient(to top, #191919, #1b2d3e)` }}
                                            onClick={() => { setBeerObj(beer) }}>
                                            <div className="w-60 flex justify-center">
                                                <p className="">{beer.name}</p>
                                            </div>
                                        </div>
                                        <button type="button" onClick="" >
                                            <FaEdit size="1.5rem" />
                                        </button>
                                    </div>
                                ))}
                                <p className="text-xl dark:text-gray-200 font-semibold pb-2 pt-2 text-center">Bottled Beer</p>

                                {bottles.map((beer, index) => (
                                    <div key={beer.id} className="flex text-lg text-gray-200 gap-2">
                                        <div
                                            className="flex border border-gray-400 rounded-2xl m-1 p-1 cursor-pointer"
                                            style={{ backgroundImage: `linear-gradient(to top, #191919, #1b2d3e)` }}
                                            onClick={() => { setBeerObj(beer) }}>
                                            <div className="w-60 flex justify-center">
                                                <p className="">{beer.name}</p>
                                            </div>
                                        </div>
                                        <button type="button" onClick="" >
                                            <FaEdit size="1.5rem" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col text-gray-200 mt-2">
                                <p
                                    className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
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

            </div>
        </>
    )
}

export default NomaBeerEditor