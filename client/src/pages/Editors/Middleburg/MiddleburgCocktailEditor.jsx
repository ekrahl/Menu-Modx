import { images } from '../../../data'

const MiddleburgCocktailEditor = () => {
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

export default MiddleburgCocktailEditor