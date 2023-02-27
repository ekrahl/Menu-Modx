import { useCallback, useRef } from 'react'
import { ContainerHeader, EditBtn, DownloadBtn } from '../'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { toPng } from 'html-to-image'


const OysterMenu = (props) => {
    const update = moment().subtract(1, 'days').calendar();

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = props.downloadLink
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    return (
        <div className="w-full mt-1">
            <ContainerHeader title="Oyster Menu" />
            <div className="border-b border-gray-600">
                <img src={props.oysterImg} id="imagehtml" alt="" ref={ref} />
            </div>
            <div style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <p className="text-sm text-gray-500 text-center p-2">last updated: {update}</p>
                <div
                    className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4">
                    <Link to={props.oysterEditPath}>
                        <EditBtn />
                    </Link>
                    <DownloadBtn type="button" onClick={onButtonClick} />
                </div>
            </div>
        </div>
    )
}

export default OysterMenu