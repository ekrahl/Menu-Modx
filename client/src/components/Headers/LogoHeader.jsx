import { images } from '../../data'

const LogoHeader = () => {
    return (
        <div className="bg-main-dark-bg flex justify-center mt-16 md:mt-0 mx-auto px-4 md:px-36">
            <img src={images.kingstoysterbar} alt="header" />
        </div>
    )
}

export default LogoHeader