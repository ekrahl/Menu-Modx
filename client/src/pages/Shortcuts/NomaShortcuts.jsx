import { Link } from 'react-router-dom'
import { LocationHeader } from '../../components'

const NomaShortcuts = () => {

    return (
        <>
            <div className="mx-3 md:mx-28 mt-24 md:mt-4">
                <LocationHeader location={"NOMA"} />
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl lg:text-3xl text-white mt-6 tracking-wider">
                    <div className="md:flex-1">
                        <Link to="/nomadashboard">
                            <div className="flex justify-center bg-dc5 bg-cover bg-center-top border border-gray-400 rounded-xl py-12 md:py-20 m-1" >
                                <p className="bg-black bg-opacity-50 rounded-xl p-2">DASHBOARD</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl text-white tracking-wider">
                    <div className="md:w-1/2">
                        <Link to="/nomafeatureeditor">
                            <div className="flex justify-center bg-specials bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-black bg-opacity-50 rounded-xl p-2">FEATURE EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to="/events">
                            <div className="flex justify-center bg-pdr bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">EVENTS</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomaoystereditor'>
                            <div className="flex justify-center bg-oysters2 bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">OYSTER EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomabeereditor'>
                            <div className="flex justify-center bg-beer bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">BEER EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomahappyhoureditor'>
                            <div className="flex justify-center bg-hh bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">HAPPY HOUR EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomadinnereditor'>
                            <div className="flex justify-center bg-dinner bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">DINNER EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomacocktaileditor'>
                            <div className="flex justify-center bg-cocktail bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">COCKTAIL EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/nomabruncheditor'>
                            <div className="flex justify-center bg-brunch bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">BRUNCH EDITOR</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NomaShortcuts