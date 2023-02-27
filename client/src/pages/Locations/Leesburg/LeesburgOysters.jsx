import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const LeesburgOysters = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"LEESBURG"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title="Oyster Menu" img={images.oyster_menu_leesburg} imgTitle="Leesburg Oyster Menu" />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={"/leesburgoystereditor"} />
                            <MenuQueue img={images.oyster_menu_leesburg} />
                            <RecentMenus img={images.oyster_menu_leesburg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeesburgOysters