import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const LeesburgFeatures = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"LEESBURG"} />
                    <div className="flex flex-wrap md:flex-nowrap mt-6">
                        <CurrentMenu title="Daily Features Menu" img={images.menu_features_leesburg} imgTitle="Leesburg Features Menu" />
                        <div className="md:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={"/leesburgfeatureeditor"} />
                            <MenuQueue img={images.menu_features_leesburg} />
                            <RecentMenus img={images.menu_features_leesburg} />
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default LeesburgFeatures