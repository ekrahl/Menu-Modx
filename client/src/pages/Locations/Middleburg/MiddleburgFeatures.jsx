import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const MiddleburgFeatures = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"MIDDLEBURG"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Daily Features Menu"} img={images.menu_features_middleburg} imgTitle={"Middleburg Features Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={"/middleburgfeatureeditor"} />
                            <MenuQueue img={images.menu_features_middleburg} />
                            <RecentMenus img={images.menu_features_middleburg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiddleburgFeatures