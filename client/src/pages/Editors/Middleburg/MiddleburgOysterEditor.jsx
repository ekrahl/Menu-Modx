import { useState, useEffect, useCallback, useRef } from 'react'
import { images } from '../../../data'
import { oysters } from '../../../data/dummy'
import { AddOyster, LocationHeader, ContainerHeader, DownloadBtn, AddToQueueBtn, CatalogBtn } from '../../../components'
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

const MiddleburgOysterEditor = () => {

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "oyster_menu_middleburg.png"
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
                name: "KSOB OYSTER*",
                location: "Chincoteague, VA",
                size: "(sm/md)",
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
        if (oysterList.length > 14) {
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
                <LocationHeader location={"MIDDLEBURG"} />
                <div className="flex flex-wrap lg:flex-nowrap justify-center mt-6 gap-1">
                    <div className="flex flex-wrap justify-center">
                        <div>
                            <ContainerHeader title="Build Oyster Menu" />
                            <div className="w-384 h-576 relative z-1" ref={ref} id="menu">
                                <img src={images.oyster_menu_template} alt="oyster menu template" className="absolute z-2" />
                                <div className="flex flex-col justify-between text-center pt-16 h-full pb-12 max-h-576">
                                    {oysterList.map((oyster, index) => {
                                        if (Object.keys(oyster).length !== 0) {
                                            return (
                                                <div key={oyster.id} className="flex justify-center relative z-3 font-semibold">
                                                    <div
                                                        className="w-275 cursor-pointer"
                                                        onClick={() => { handleDelete(index) }}
                                                        style={{ fontFamily: 'montserrat', }}>
                                                        <p style={{
                                                            fontWeight: '700',
                                                            fontSize: '12px',
                                                            color: '#8A5C36',
                                                            lineHeight: '12px'
                                                        }}>{oyster.name}</p>
                                                        <p style={{
                                                            fontWeight: '700',
                                                            fontSize: '10px',
                                                            color: '#182E3D',
                                                            lineHeight: '10px'
                                                        }}>{oyster.location} • {oyster.size}</p>
                                                        <p style={{
                                                            fontWeight: '600',
                                                            fontSize: '10px',
                                                            lineHeight: '10px'
                                                        }}>{oyster.description}</p>
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
                    <div className="flex flex-wrap justify-center mx-3">
                        <div>
                            <ContainerHeader title="Catalog" />
                            <div
                                className="h-270 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                {oysters.map((oyster, index) => (
                                    <div key={oyster.id} className="flex justify-center text-gray-200 gap-3">
                                        <CatalogBtn onClick={() => { setOysterObj(oyster) }} info={oyster.name} />
                                        <button type="button" onClick="" >
                                            <FaEdit size="1.2rem" />
                                        </button>
                                        <button type="button" onClick="" >
                                            <FaTrash size="1.2rem" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <AddOyster />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MiddleburgOysterEditor