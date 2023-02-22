import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const LeesburgBeer = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"LEESBURG"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Beer Menu"} img={images.beer_menu_leesburg} imgTitle={"Leesburg Beer Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={"/leesburgbeereditor"} />
                            <MenuQueue img={images.beer_menu_leesburg} />
                            <RecentMenus img={images.beer_menu_leesburg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeesburgBeer