import { Link } from 'react-router-dom'
import LocationHeader from '../../../components/Headers/LocationHeader'

const Potomac = () => {

    return (
        <>
            <div className="mx-3 md:mx-30 mt-24 md:mt-4">
                <LocationHeader location={"POTOMAC"} />
                <div className="lg:flex lg:flex-wrap lg:justify-center mt-6">
                    <Link to="/potomac">
                        <div className="flex justify-center bg-potomac bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">Dashboard</p>
                        </div>
                    </Link>
                    <Link to="/potomacfeatures">
                        <div className="flex justify-center bg-specials bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">Daily Features</p>
                        </div>
                    </Link>
                    <Link to="/potomacevents">
                        <div className="flex justify-center bg-pdr bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Events</p>
                        </div>
                    </Link>
                    <Link to='/potomacoysters'>
                        <div className="flex justify-center bg-oysters2 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Oysters</p>
                        </div>
                    </Link>
                    <Link to='/potomacbeer'>
                        <div className="flex justify-center bg-beer bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Beer</p>
                        </div>
                    </Link>
                    <Link to='/potomachappyhour'>
                        <div className="flex justify-center bg-hh bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Happy Hour</p>
                        </div>
                    </Link>
                    <Link to='/potomacdinner'>
                        <div className="flex justify-center bg-dinner1 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Dinner</p>
                        </div>
                    </Link>
                    <Link to='/potomaccocktail'>
                        <div className="flex justify-center bg-cocktail4 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Cocktail</p>
                        </div>
                    </Link>
                    <Link to='/potomacbrunch'>
                        <div className="flex justify-center bg-brunch1 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Brunch</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Potomac