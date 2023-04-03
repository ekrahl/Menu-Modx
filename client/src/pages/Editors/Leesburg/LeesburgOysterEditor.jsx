import { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import { oysters } from '../../../data/dummy'
import { images } from '../../../data'
import { AddOyster, LocationHeader, ContainerHeader, DownloadBtn, AddToQueueBtn, CatalogBtn, CurrentMenuEditor } from '../../../components'
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

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function Pricing({ name, price }) {
    if (price >= 3) {
        return <p style={{
            fontWeight: '700',
            fontSize: '12px',
            color: '#8A5C36',
            lineHeight: '12px'
        }}>{name.toUpperCase() + '*'} ${price}</p>
    } return <p style={{
        fontWeight: '700',
        fontSize: '12px',
        color: '#8A5C36',
        lineHeight: '12px'
    }}>{name.toUpperCase() + '*'}</p>
}

function buttonClick(element) {
    element.classList.toggle('active')
}

const LeesburgOysterEditor = () => {
    // const [oysters, setOysters] = useState([])
    // const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

    // useEffect(() => {
    //     const fetchAllOysters = async () => {
    //         try {
    //             const res = await axiosInstance.get("http://localhost:8800/oysters")
    //             setOysters(res.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchAllOysters()
    // }, [oysters])

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = "oyster_menu_leesburg.png"
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [oysterList, setOysterList] = useState([])
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

    // const handleCatalogDelete = async (id) => {
    //     try {
    //         await axiosInstance.delete("http://localhost:8800/oysters/" + id)
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
                            img={images.oyster_menu_leesburg}
                            headerTitle="Current"
                            imgTitle="Leesburg Oyster Menu"
                            downloadLink='oyster_menu_leesburg.png'
                            path="/leesburgoystereditor"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div>
                            <ContainerHeader title="Build Oyster Menu" />
                            <div className="w-384 h-576 relative" ref={ref} id="menu">
                                <img src={images.oyster_menu_template} alt="oyster menu template" className="absolute" />
                                <div className="flex flex-col justify-between text-center pt-16 h-full pb-10 max-h-576">
                                    {oysterList.map((oyster, index) => {
                                        if (Object.keys(oyster).length !== 0) {
                                            return (
                                                <div key={oyster.id} className="flex justify-center relative z-3 font-semibold">
                                                    <div
                                                        className="w-275 cursor-pointer"
                                                        onClick={() => { handleDelete(index) }}
                                                        style={{ fontFamily: 'montserrat', }}>
                                                        <Pricing name={oyster.name} price={oyster.price} />

                                                        <p style={{
                                                            fontWeight: '700',
                                                            fontSize: '10px',
                                                            color: '#182E3D',
                                                            lineHeight: '10px'
                                                        }}>{capitalize(oyster.location)} • {'(' + oyster.size + ')'}</p>

                                                        <p style={{
                                                            fontWeight: '600',
                                                            fontSize: '10px',
                                                            lineHeight: '10px'
                                                        }}>{oyster.desc}</p>

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
                        <div>
                            <ContainerHeader title="Catalog" />
                            <div
                                className="h-270 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                {oysters.map(oyster => (
                                    <div key={oyster.id} className="flex justify-center gap-4">

                                        <CatalogBtn onClick={() => { setOysterObj(oyster); buttonClick(this) }} info={oyster.name.toUpperCase()} />

                                        <button type="button" onClick="" >
                                            <FaEdit size="1.2rem" />
                                        </button>
                                        <button >
                                            <FaTrash size="0.8rem" />
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

export default LeesburgOysterEditor