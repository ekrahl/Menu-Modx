import { useCallback, useRef } from 'react'
import { ContainerHeader, EditBtn, DownloadBtn } from '../'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { toPng } from 'html-to-image'


const DinnerMenu = ({ downloadLink, img, alt, path }) => {
    const update = moment().subtract(1, 'days').calendar();

    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = downloadLink
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    return (
        <div className="w-full mt-1">
            <ContainerHeader title="Dinner Menu" />
            <div className="border-b border-gray-600">
                <img src={img} alt={alt} title={alt} ref={ref} />
            </div>
            <div
                className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 bg-secondary-dark-bg border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <DownloadBtn type="button" onClick={onButtonClick} />
                <Link to={path}>
                    <EditBtn />
                </Link>
            </div>
        </div>
    )
}

export default DinnerMenu