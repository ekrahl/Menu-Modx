import { Link } from 'react-router-dom'
import { LogoHeader } from '../../components'

const Main = () => {
    return (
        <>
            <LogoHeader />
            <div className="mx-3 md:mx-28 mt-6">
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl lg:text-3xl text-gray-200 tracking-wider">
                    <div className="md:flex-1">
                        <Link to="/dashboard">
                            <div className="flex justify-center bg-logo2 bg-contain bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1">
                                <p className="bg-half-transparent rounded-xl p-2">DASHBOARD</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="md:flex md:flex-wrap md:justify-center font-semibold text-2xl lg:text-3xl text-gray-200 tracking-wider">
                    <div className="md:w-1/2">
                        <Link to="/leesburg">
                            <div className="flex justify-center bg-leesburg bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1">
                                <p className="bg-half-transparent rounded-xl p-2">LEESBURG</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to="/middleburg">
                            <div className="flex justify-center bg-middleburg bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1">
                                <p className="bg-half-transparent rounded-xl p-2">MIDDLEBURG</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/noma'>
                            <div className="flex justify-center bg-dc5 bg-cover bg-top border border-gray-400 rounded-xl py-12 md:py-16 m-1">
                                <p className="bg-half-transparent rounded-xl p-2">NOMA</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Link to='/potomac'>
                            <div className="flex justify-center bg-potomac bg-cover bg-center border border-gray-400 rounded-xl py-12 md:py-16 m-1">
                                <p className="bg-half-transparent rounded-xl p-2">POTOMAC</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main