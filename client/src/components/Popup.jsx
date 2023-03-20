import {IoMdCloseCircleOutline} from 'react-icons/io'

function Popup(props) {
    return (props.trigger) ? (
        <div className="flex justify-center items-center fixed top-32 right-20">
            <div className="relative w-full max-w-500">
                <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => props.setTrigger(false)}><IoMdCloseCircleOutline/></button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Popup