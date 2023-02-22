import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const LeesburgCocktail = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"LEESBURG"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Cocktail Menu"} img={images.leesburg_cocktail_menu} imgTitle={"Leesburg Cocktail Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={""} />
                            <MenuQueue img={images.leesburg_cocktail_menu} />
                            <RecentMenus img={images.leesburg_cocktail_menu} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeesburgCocktail