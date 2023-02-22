import { Link } from 'react-router-dom'
import { LogoHeader } from '../components'

const Main = () => {
    return (
        <>
            <LogoHeader />
            <div className="mx-3 md:mx-60 mt-6">
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl md:text-4xl lg:text-5xl text-gray-200">
                    <div className="md:flex-1 grow">
                        <Link to="/dashboardmain">
                            <div className="flex justify-center bg-logo2 bg-contain bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1 md:min-w-400 lg:min-w-500">
                                <p className="bg-half-transparent rounded-xl p-2">DASHBOARD</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:flex md:flex-wrap">
                        <div className="md:grow">
                            <Link to="/leesburgmain">
                                <div className="flex justify-center bg-leesburg bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1 md:min-w-400 lg:min-w-500">
                                    <p className="bg-half-transparent rounded-xl p-2">LEESBURG</p>
                                </div>
                            </Link>
                        </div>
                        <div className="md:grow">
                            <Link to="/middleburgmain">
                                <div className="flex justify-center bg-middleburg bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1 md:min-w-400 lg:min-w-500">
                                    <p className="bg-half-transparent rounded-xl p-2">MIDDLEBURG</p>
                                </div>
                            </Link>
                        </div>
                        <div className="md:grow">
                            <Link to='/nomamain'>
                                <div className="flex justify-center bg-dc5 bg-cover bg-top border border-gray-400 rounded-xl py-12 md:py-16 m-1 md:min-w-400 lg:min-w-500">
                                    <p className="bg-half-transparent rounded-xl p-2">NOMA</p>
                                </div>
                            </Link>
                        </div>
                        <div className="md:grow">
                            <Link to='/potomacmain'>
                                <div className="flex justify-center bg-potomac bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1 md:min-w-400 lg:min-w-500">
                                    <p className="bg-half-transparent rounded-xl p-2">POTOMAC</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main