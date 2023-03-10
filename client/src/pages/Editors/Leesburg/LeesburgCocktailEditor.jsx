import { images } from '../../../data'

const LeesburgCocktailEditor = () => {
  const imageUrl = window.innerWidth >= 650 ? images.comingSoonImg : images.comingSoonImgSm

  return (
    <div style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%"
    }}>

    </div>
  )
}

export default LeesburgCocktailEditor