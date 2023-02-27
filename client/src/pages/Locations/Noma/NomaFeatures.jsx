import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const NomaFeatures = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"NOMA"} />
                    <div className="flex flex-wrap md:flex-nowrap mt-6">
                        <CurrentMenu title="Daily Features Menu" img={images.menu_features_noma} imgTitle="NoMa Features Menu" />
                        <div className="md:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={"/nomafeatureeditor"} />
                            <MenuQueue img={images.menu_features_noma} />
                            <RecentMenus img={images.menu_features_noma} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NomaFeatures