import { Link } from 'react-router-dom'
import { images } from '../../../data'
import LocationHeader from '../../../components/Headers/LocationHeader'

const Leesburg = () => {

    return (
        <>
            <div className="flex justify-center">
                <div className="bg-main-dark-bg rounded-xl mt-16 md:mt-0 mx-3 py-6 mb-4 px-2 md:px-40">
                    <img src={images.kingstoysterbar} alt="header" />
                </div>
            </div>

            <div className="mx-3 md:mx-30">
            
                <LocationHeader location={"LEESBURG"}/>

                <div className="lg:flex lg:flex-wrap lg:justify-center mt-6">

                    <Link to="/leesburg">
                        <div className="flex justify-center bg-leesburg bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">Dashboard</p>
                        </div>
                    </Link>

                    <Link to="/leesburgfeatures">
                        <div className="flex justify-center bg-specials bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">Daily Features</p>
                        </div>
                    </Link>

                    <Link to="/leesburgevents">
                        <div className="flex justify-center bg-pdr bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Events</p>
                        </div>
                    </Link>

                    <Link to='/leesburgoysters'>
                        <div className="flex justify-center bg-oysters2 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Oysters</p>
                        </div>
                    </Link>

                    <Link to='/leesburgbeer'>
                        <div className="flex justify-center bg-beer bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Beer</p>
                        </div>
                    </Link>

                    <Link to='/leesburghappyhour'>
                        <div className="flex justify-center bg-hh bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Happy Hour</p>
                        </div>
                    </Link>

                    <Link to='/leesburgdinner'>
                        <div className="flex justify-center bg-dinner1 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Dinner</p>
                        </div>
                    </Link>

                    <Link to='/leesburgcocktail'>
                        <div className="flex justify-center bg-cocktail4 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Cocktail</p>
                        </div>
                    </Link>

                    <Link to='/leesburgbrunch'>
                        <div className="flex justify-center bg-brunch1 bg-cover bg-center border border-gray-400 rounded-xl py-12 2xl:p-20 m-1 lg:min-w-450" >
                            <p className="font-semibold text-2xl 2xl:text-4xl text-gray-200 bg-half-transparent rounded-xl p-2">Brunch</p>
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Leesburg