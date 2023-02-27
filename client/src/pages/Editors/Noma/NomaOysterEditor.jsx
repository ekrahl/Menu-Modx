import { useState, useEffect, useCallback, useRef } from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { images } from '../../../data'
import { oysters } from '../../../data/dummy'
import { OysterForm, LocationHeader, ContainerHeader } from '../../../components'
import * as htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'
import { FaDownload, FaEdit, FaDelete } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'

var node = document.getElementById('nomaOysterMenu')

htmlToImage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

const NomaOysterEditor = () => {
    const { currentColor, currentMode } = useStateContext();

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "noma-oyster-menu.png"
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [oysterList, setOysterList] = useState(
        [
            {
                id: 1,
                name: "KSOB OYSTER",
                location: "Chincoteague, VA",
                size: "(s/m)",
                description: "clean brine with a mild, earthy finish",
            },
        ]
    )

    const [oysterObj, setOysterObj] = useState({});

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        if (oysterList.includes(oysterObj)) {
            return;
        }
        if (oysterList.length > 10) {
            return;
        }
        setOysterList(current => [...current, oysterObj])
    }, [oysterObj])

    const handleDelete = (index) => {
        const newList = oysterList.filter((oyster, i) => i !== index);
        setOysterList(newList);
    };

    return (
        <>
            <div className="mt-24 md:mt-4">
                <LocationHeader location={"NOMA"} />
                <div className="flex flex-wrap lg:flex-nowrap justify-center mt-6 gap-1">
                    <div className="flex flex-wrap justify-center">
                        <div>
                            <ContainerHeader title="Build Oyster Menu" />
                            <div className="w-384 h-576 relative z-1" ref={ref} id="nomaOysterMenu">
                                <img src={images.oyster_menu_template_noma} alt="" className="absolute z-2" />
                                <div className="text-center pt-16">
                                    {oysterList.map((oyster, index) => (
                                        <div key={oyster.id} className="flex justify-center relative z-3 font-semibold">
                                            <div className="w-300 cursor-pointer" onClick={() => { handleDelete(index) }}>
                                                <p style={{
                                                    fontFamily: 'montserrat',
                                                    fontWeight: '900',
                                                    fontSize: '12px',
                                                    color: '#8A5C36',
                                                    lineHeight: '14px'
                                                }}>{oyster.name}</p>
                                                <p style={{
                                                    fontFamily: 'montserrat',
                                                    fontWeight: '700',
                                                    fontSize: '10px',
                                                    color: '#182E3D',
                                                    lineHeight: '10px'
                                                }}>{oyster.location} • {oyster.size}</p>
                                                <p style={{
                                                    fontFamily: 'montserrat',
                                                    fontWeight: '600',
                                                    fontSize: '10px',
                                                    paddingBottom: '4px'
                                                }}>{oyster.description}</p>
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
                                    onClick={onButtonClick}
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaDownload /></button>
                                <button
                                    className="flex justify-center font-semibold rounded-md border border-gray-600 w-20 p-2 m-2"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><BiAddToQueue /></button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center mx-3">
                        <div>
                            <ContainerHeader title="Catalog" />
                            <div
                                className="h-270 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                {oysters.map((oyster, index) => (
                                    <div key={oyster.id} className="flex text-lg text-gray-200 gap-2">
                                        <div
                                            className="flex border border-gray-400 rounded-2xl m-1 p-1 cursor-pointer"
                                            style={{ backgroundImage: `linear-gradient(to top, #191919, #1b2d3e)` }}
                                            onClick={() => { setOysterObj(oyster) }}>
                                            <div className="w-60 flex justify-center">
                                                <p>{oyster.name}</p>
                                            </div>
                                        </div>
                                        <button type="button" onClick="" >
                                            <FaEdit size="1.5rem" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col text-gray-200 mt-2">
                                <ContainerHeader title="Add Item Catalog" />
                                <div
                                    className="text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                    <OysterForm />
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

export default NomaOysterEditor