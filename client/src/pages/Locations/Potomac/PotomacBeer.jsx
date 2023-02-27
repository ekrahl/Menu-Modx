import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const PotomacBeer = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"POTOMAC"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title="Beer Menu" img={images.beer_menu_potomac} imgTitle="Potomac Beer Menu" />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={"/potomacbeereditor"} />
                            <MenuQueue img={images.beer_menu_potomac} />
                            <RecentMenus img={images.beer_menu_potomac} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PotomacBeer