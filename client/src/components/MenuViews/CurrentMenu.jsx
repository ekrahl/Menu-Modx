import { useCallback, useRef, useState } from 'react'
import { ContainerHeader, DownloadBtn, EditBtn } from '../'
import { toPng } from 'html-to-image'
import { Link } from 'react-router-dom'



const CurrentMenu = ({ downloadLink, img, headerTitle, imgTitle, path }) => {

    const ref = useRef(null);

    const [effect, setEffect] = useState(false)

    function toggleEffect() {
        setEffect(!effect)
    }

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = downloadLink
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="md:max-w-300">
                <ContainerHeader title={headerTitle} />
                <img
                    className={`${effect && "animate-enlarge175"} border-b border-gray-600 hover:cursor-pointer`}
                    onClick={toggleEffect}
                    src={img}
                    ref={ref}
                    alt={imgTitle}
                    title={imgTitle}
                    loading="lazy" />
                <div
                    className="flex flex-wrap lg:flex-nowrap justify-center text-gray-400 border-b border-gray-600 rounded-b-xl p-3"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                    <DownloadBtn onClick={onButtonClick} />
                    <Link to={path}>
                        <EditBtn />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CurrentMenu