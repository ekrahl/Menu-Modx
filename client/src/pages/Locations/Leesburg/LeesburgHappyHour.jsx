import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const LeesburgHappyHour = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"LEESBURG"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Happy Hour Menu"} img={images.happy_hour_menu_leesburg} imgTitle={"Leesburg Happy Hour Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={""} />
                            <MenuQueue img={images.happy_hour_menu_leesburg} />
                            <RecentMenus img={images.happy_hour_menu_leesburg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeesburgHappyHour