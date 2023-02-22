import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const PotomacFeatures = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"POTOMAC"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Daily Features Menu"} img={images.menu_features_potomac} imgTitle={"Potomac Features Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={"/potomacfeatureeditor"} />
                            <MenuQueue img={images.menu_features_potomac} />
                            <RecentMenus img={images.menu_features_potomac} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotomacFeatures