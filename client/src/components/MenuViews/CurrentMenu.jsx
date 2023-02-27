import { useStateContext } from '../../contexts/ContextProvider'
import { ContainerHeader } from '../'
import { FaDownload } from 'react-icons/fa'

const CurrentMenu = (props) => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <>
            <div className="md:max-w-500 m-1">
                <ContainerHeader title={props.title}/>
                <img className="border-b border-gray-600" src={props.img} alt="" title={props.imgTitle} />
                <div
                    className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                    <button
                        type="button"
                        onClick=""
                        className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                        title="Download"><FaDownload /></button>
                </div>
            </div>
        </>
    )
}

export default CurrentMenu