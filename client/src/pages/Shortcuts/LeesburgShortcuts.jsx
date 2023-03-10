import { Link } from 'react-router-dom'
import { LocationHeader } from '../../components'

const LeesburgShortcuts = () => {

    return (
        <>
            <div className="mx-3 md:mx-28 mt-24 md:mt-6">
                <LocationHeader location={"LEESBURG"} />
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl lg:text-3xl text-gray-200 mt-6 tracking-wider">
                    <div className="md:flex-1">
                        <Link to="/leesburgdashboard">
                            <div className="flex justify-center bg-leesburg bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-20 m-1" >
                                <p className="bg-black bg-opacity-50 rounded-xl p-2">DASHBOARD</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl text-gray-200 tracking-wider">
                    <div className="md:w-1/2">
                        <Link to="/leesburgfeatureeditor">
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
                        <Link to='/leesburgoystereditor'>
                            <div className="flex justify-center bg-oysters2 bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">OYSTER EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/leesburgbeereditor'>
                            <div className="flex justify-center bg-beer bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">BEER EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/leesburghappyhoureditor'>
                            <div className="flex justify-center bg-hh bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">HAPPY HOUR EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/leesburgdinnereditor'>
                            <div className="flex justify-center bg-dinner bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">DINNER EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/leesburgcocktaileditor'>
                            <div className="flex justify-center bg-cocktail bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1" >
                                <p className="bg-half-transparent rounded-xl p-2">COCKTAIL EDITOR</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/leesburgbruncheditor'>
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

export default LeesburgShortcuts