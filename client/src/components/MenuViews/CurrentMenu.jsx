import { useCallback, useRef } from 'react'
import { ContainerHeader, DownloadBtn } from '../'
import { toPng } from 'html-to-image'

const CurrentMenu = ({ downloadLink, img, title }) => {

    const ref = useRef(null);

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
            <div className="md:max-w-500">
                <ContainerHeader title={title} />
                <img className="border-b border-gray-600" src={img} ref={ref} alt={title} title={title} />
                <div
                    className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-1"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                    <DownloadBtn onClick={onButtonClick} />
                </div>
            </div>
        </>
    )
}

export default CurrentMenu