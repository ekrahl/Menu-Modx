import { useCallback, useRef } from 'react'
import { ContainerHeader, EditBtn, DownloadBtn } from '../'
import { Link } from 'react-router-dom'
import { toPng } from 'html-to-image'


const MenuView = (props) => {
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
        <div>
            <ContainerHeader title={props.headerTitle} />
            <img className="border-b border-gray-600" src={props.img} alt="" ref={ref} />
            <div
                className="flex flex-wrap md:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <Link to={props.editLink}>
                    <EditBtn />
                </Link>
                <DownloadBtn type="button" onClick={onButtonClick} />
            </div>
        </div>
    )
}

export default MenuView