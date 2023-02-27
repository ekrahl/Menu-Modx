import { Link } from 'react-router-dom'
import LocationHeader from '../../../components/Headers/LocationHeader'

const Noma = () => {

    return (
        <>
            <div className="mx-3 md:mx-28 mt-24 md:mt-6">
                <LocationHeader location={"NOMA"} />
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl md:text-4xl text-gray-200 mt-6 tracking-wider">
                    <div className="md:flex-1">
                        <Link to="/noma">
                            <div className="flex justify-center bg-dc5 bg-cover bg-center-top border border-gray-400 rounded-xl py-12 md:py-20 m-1" >
                                <p className="bg-black bg-opacity-50 rounded-xl p-2">DASHBOARD</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl md:text-4xl text-gray-200 tracking-wider">
                    <div className="md:w-1/2">
                        <Link to="/nomafeatures">
                            <div className="flex justify-center bg-specials bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-black bg-opacity-50 rounded-xl p-2">DAILY FEATURES</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to="/nomaevents">
                            <div className="flex justify-center bg-pdr bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">EVENTS</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomaoysters'>
                            <div className="flex justify-center bg-oysters2 bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">OYSTERS</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomabeer'>
                            <div className="flex justify-center bg-beer bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">BEER</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomahappyhour'>
                            <div className="flex justify-center bg-hh bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">HAPPY HOUR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomadinner'>
                            <div className="flex justify-center bg-dinner1 bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">DINNER</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomacocktail'>
                            <div className="flex justify-center bg-cocktail4 bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">COCKTAIL</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomabrunch'>
                            <div className="flex justify-center bg-brunch1 bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">BRUNCH</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noma