import { ContainerHeader, EditBtn, DownloadBtn } from '../'
import { Link } from 'react-router-dom'
import { foodFeatures, drinkFeatures } from '../../data/dummy'

const Features = ({ id, path }) => {

    return (
        <div>
            <ContainerHeader title="Features" />
            <div className="flex flex-wrap">
                <div className='flex md:flex-1'>
                    {foodFeatures.filter(feat => feat.location_id === id).map((feat) => {
                        return (
                            <div
                                className="border-b border-gray-600 py-2 pl-2 md:pb-12"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <img className="rounded-t-xl px-2 pt-2" src={feat.img} alt="" />
                                <div className="flex flex-col h-full">
                                    <p className="flex font-semibold text-gray-200 p-4">{feat.title}</p>
                                    <p className="flex text-sm text-gray-400 px-4 py-1">{feat.ingredients}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex md:flex-1'>
                    {drinkFeatures.filter(feat => feat.location_id === id).map((feat) => {
                        return (
                            <div
                                className="border-b border-gray-600 py-2 pr-2"
                                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                                <img className="rounded-t-xl px-2 pt-2" src={feat.img} alt="" />
                                <div className="flex flex-col h-full">
                                    <p className="flex font-semibold text-gray-200 p-4">{feat.title}</p>
                                    <p className="flex text-sm text-gray-400 px-4 py-1">{feat.ingredients}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

            <div
                className="flex flex-wrap justify-center text-gray-400 border-b border-gray-600 rounded-b-xl gap-4 p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <DownloadBtn />
                <Link to={path}>
                    <EditBtn />
                </Link>
            </div>
        </div>
    )
}

export default Features