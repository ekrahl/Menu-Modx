import { images } from '../../../data'
import { LocationHeader, CurrentMenu, CreateNewMenuBtn, MenuQueue, RecentMenus } from '../../../components'

const MiddleburgCocktail = () => {

    return (
        <>
            <div className="flex justify-center mt-24 md:mt-4">
                <div className="mx-3">
                    <LocationHeader location={"MIDDLEBURG"} />
                    <div className="flex flex-wrap lg:flex-nowrap mt-6">
                        <CurrentMenu title={"Cocktail Menu"} img={images.middleburg_cocktail_menu} imgTitle={"Middleburg Cocktail Menu"} />
                        <div className="lg:max-w-500 m-1 w-full">
                            <CreateNewMenuBtn path={""} />
                            <MenuQueue img={images.middleburg_cocktail_menu} />
                            <RecentMenus img={images.middleburg_cocktail_menu} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiddleburgCocktail