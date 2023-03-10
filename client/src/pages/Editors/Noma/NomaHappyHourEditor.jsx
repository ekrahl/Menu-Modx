import { useState, useEffect, useCallback, useRef } from 'react'
import { images } from '../../../data'
import { cocktails, beerWine, food, rules } from '../../../data/dummy'
import { AddHappyHour, LocationHeader, ContainerHeader, DownloadBtn, AddToQueueBtn, CatalogBtn } from '../../../components'
import * as htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { GiOyster, GiAnchor } from 'react-icons/gi'

var node = document.getElementById('menu')

htmlToImage.toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });

const NomaHappyHourEditor = () => {

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = "happy_hour_menu_noma.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [cocktailList, setCocktailList] = useState([])
  const [beerWineList, setBeerWineList] = useState([])
  const [foodList, setFoodList] = useState([])

  const [cocktailObj, setCocktailObj] = useState({});
  const [beerWineObj, setBeerWineObj] = useState({});
  const [foodObj, setFoodObj] = useState({});

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (cocktailList.includes(cocktailObj)) {
      return;
    }
    if (cocktailList.length + beerWineList.length + foodList > 22) {
      return;
    }
    setCocktailList(current => [...current, cocktailObj])
  }, [cocktailObj])

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (beerWineList.includes(beerWineObj)) {
      return;
    }
    if (cocktailList.length + beerWineList.length + foodList > 22) {
      return
    }
    setBeerWineList(current => [...current, beerWineObj])
  }, [beerWineObj])

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (foodList.includes(foodObj)) {
      return;
    }
    if (cocktailList.length + beerWineList.length + foodList.length > 22) {
      return
    }
    setFoodList(current => [...current, foodObj])
  }, [foodObj])

  const handleCocktailDelete = (index) => {
    const newList = cocktailList.filter((cocktail, i) => i !== index);
    setCocktailList(newList);
  };

  const handleBeerWineDelete = (index) => {
    const newList = beerWineList.filter((beerWine, i) => i !== index);
    setBeerWineList(newList);
  };

  const handleFoodDelete = (index) => {
    const newList = foodList.filter((food, i) => i !== index);
    setFoodList(newList);
  };

  return (
    <>
      <div className="mt-24 md:mt-4">
        <LocationHeader location={"NOMA"} />
        <div className="flex flex-wrap lg:flex-nowrap justify-center mt-6 gap-1">
          <div className="flex flex-wrap justify-center">
            <div>
              <ContainerHeader title="Build Happy Hour Menu" />
              <div className="w-384 h-576 relative z-1" ref={ref} id="menu">
                <img src={images.happy_hour_menu_noma_template} alt="happy hour menu template" className="absolute z-2" />
                <div className="flex flex-col justify-between text-center pt-9 h-full pb-2 max-h-576"
                  style={{ fontFamily: 'montserrat', fontWeight: '700', fontSize: '12px', color: '#182E3D', }}>
                  {cocktailList.map((cocktail, index) => {
                    if (Object.keys(cocktail).length !== 0) {
                      return (
                        <div key={cocktail.index} className="relative z-3 font-semibold">
                          <div className="flex justify-center">
                            <div
                              className="w-275 cursor-pointer"
                              onClick={() => { handleCocktailDelete(index) }}>
                              <p style={{ lineHeight: '12px' }}>{cocktail.title}<span style={{ color: '#8A5C36' }}> {cocktail.price}</span></p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                  <div className="relative w-72 mx-auto my-1"><img src={images.beer_wine} alt="Beer & Wine Divider" /></div>
                  {beerWineList.map((beerWine, index) => {
                    if (Object.keys(beerWine).length !== 0) {
                      return (
                        <div key={beerWine.index} className="relative z-3 font-semibold">
                          <div className="flex justify-center">
                            <div
                              className="w-275 cursor-pointer"
                              onClick={() => { handleBeerWineDelete(index) }}>
                              <p style={{ lineHeight: '13px' }}>{beerWine.title}<span style={{ color: '#8A5C36' }}> {beerWine.price}</span></p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                  <div className="relative w-72 mx-auto my-1"><img src={images.food} alt="Food Divider" /></div>
                  {foodList.map((food, index) => {
                    if (Object.keys(food).length !== 0) {
                      return (
                        <div key={food.index} className="relative z-3 font-semibold">
                          <div className="flex justify-center">
                            <div
                              className="w-275 cursor-pointer"
                              onClick={() => { handleFoodDelete(index) }}>
                              <p style={{ lineHeight: '13px' }} className="flex justify-center items-center gap-1"
                              >{food.icon} {food.title}<span style={{ color: '#8A5C36' }}> {food.price}</span></p>
                              <p style={{ fontSize: '10px', lineHeight: '10px' }}>{food.subTitle}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                  <div className="flex justify-center relative w-275 mx-auto mt-2">
                    <div className="gap-1" style={{ fontWeight: '500', fontSize: '10px', lineHeight: '12px' }}>
                      <p className="flex items-center justify-center gap-1" >
                        <GiAnchor size="0.5rem" />{rules[0].rule}<GiAnchor size="0.5rem" className="rotate-90" /></p>
                      <p className="flex items-center justify-center gap-1" >
                        <GiAnchor size="0.5rem" />{rules[2].rule}<GiAnchor size="0.5rem" className="rotate-90" /></p>
                      <p className="flex items-center justify-center gap-1" >
                        <GiAnchor size="0.5rem" />{rules[3].rule}<GiAnchor size="0.5rem" className="rotate-90" /></p>
                    </div>
                  </div>
                  <div className="flex justify-center relative w-275 mx-auto my-1">
                    <div className="flex gap-1">
                      <p className="flex items-center justify-center gap-0.5" style={{ fontWeight: '400', fontSize: '8px', lineHeight: '8px' }}>
                        <GiOyster size="1.3rem" className="-translate-y-1" />
                        consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of food-borne illness</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center dark:text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f)` }}>
                <DownloadBtn onClick={onButtonClick} />
                <AddToQueueBtn />
              </div>
            </div>
          </div>

          {/* ***CATALOGS*** */}
          <div className="flex flex-col w-full md:w-400 mx-1 md:mx-0">
            <ContainerHeader title="Cocktail Catalog" />
            <div
              className="h-200 overflow-scroll text-gray-200 border-b border-gray-600 rounded-b-xl px-6 pt-1 mb-1"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f)` }}>
              {cocktails.map((cocktail, index) => (
                <div key={cocktail.id} className="flex justify-center text-gray-200 gap-3">
                  <CatalogBtn onClick={() => { setCocktailObj(cocktail) }} info={cocktail.title} />
                  <button type="button" onClick="" >
                    <FaEdit size="1.2rem" />
                  </button>
                  <button type="button" onClick="" >
                    <FaTrash size="1.2rem" />
                  </button>
                </div>
              ))}
            </div>
            <ContainerHeader title="Beer & Wine Catalog" />
            <div
              className="h-100 overflow-scroll text-gray-200 border-b border-gray-600 rounded-b-xl px-6 pt-1 mb-1"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f)` }}>
              {beerWine.map((beerWine, index) => (
                <div key={beerWine.id} className="flex justify-center text-gray-200 gap-3">
                  <CatalogBtn onClick={() => { setBeerWineObj(beerWine) }} info={beerWine.title} />
                  <button type="button" onClick="" >
                    <FaEdit size="1.2rem" />
                  </button>
                  <button type="button" onClick="" >
                    <FaTrash size="1.2rem" />
                  </button>
                </div>
              ))}
            </div>
            <ContainerHeader title="Food Catalog" />
            <div
              className="h-200 overflow-scroll text-gray-200 border-b border-gray-600 rounded-b-xl px-6 pt-1"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f)` }}>
              {food.map((food, index) => (
                <div key={food.id} className="flex justify-center text-gray-200 gap-3">
                  <CatalogBtn onClick={() => { setFoodObj(food) }} info={food.title} />
                  <button type="button" onClick="" >
                    <FaEdit size="1.2rem" />
                  </button>
                  <button type="button" onClick="" >
                    <FaTrash size="1.2rem" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <AddHappyHour />
        </div>
      </div>
    </>
  )
}

export default NomaHappyHourEditor