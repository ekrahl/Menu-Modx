import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const PotomacDinner = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"POTOMAC"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Dinner Menu"} img={images.potomac_dinner_menu} imgTitle={"Potomac Dinner Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={""} />
                            <MenuQueue img={images.potomac_dinner_menu} />
                            <RecentMenus img={images.potomac_dinner_menu} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotomacDinner