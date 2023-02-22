import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const NomaBrunch = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"NOMA"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Brunch Menu"} img={images.noma_brunch_menu} imgTitle={"NoMa Brunch Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={""} />
                            <MenuQueue img={images.noma_brunch_menu} />
                            <RecentMenus img={images.noma_brunch_menu} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NomaBrunch