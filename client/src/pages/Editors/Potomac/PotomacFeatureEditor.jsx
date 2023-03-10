import { useState, useEffect, useCallback, useRef } from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { ContainerHeader, LocationHeader, AddFeature, DownloadBtn, AddToQueueBtn, CatalogBtn, FoodFeatureCatalogBtn } from '../../../components'
import { images } from '../../../data'
import { foodFeatures, drinkFeatures } from '../../../data/dummy'
import * as htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'
import { FaEdit, FaTrash } from 'react-icons/fa'

var node = document.getElementById('menu')

htmlToImage.toPng(node)
  .then((dataUrl) => {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch((error) => {
    console.error('oops, something went wrong!', error);
  });

const PotomacFeatureEditor = () => {
  const { currentColor } = useStateContext();
  const gradientColor = { backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = "potomac-feature-menu.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [feature, setFeature] = useState([])

  const [featureObj, setFeatureObj] = useState({});

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (feature.includes(featureObj)) {
      return;
    }
    if (feature.length > 1) {
      return;
    }
    setFeature(current => [...current, featureObj])
  }, [featureObj])

  const handleDelete = (index) => {
    const newList = feature.filter((feat, i) => i !== index);
    setFeature(newList);
  };

  return (
    <div className="mt-24 md:mt-4">
      <LocationHeader location={"POTOMAC"} />
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-6 gap-1">
        <div className="flex flex-wrap justify-center">
          <div>
            <ContainerHeader title="Build Features Menu" />
            <div className="w-384 h-576 relative z-1" ref={ref} id="menu">
              <img src={images.feature_menu_template} alt="feature menu template" className="absolute z-2" />
              <div className="pt-16">
                {feature.map((feat, index) => (
                  <div key={feat.id} className="flex justify-center relative z-3 font-semibold mt-6">
                    <div className="w-384 cursor-pointer" onClick={() => { handleDelete(index) }}>
                      <div className="flex justify-between">
                        <div className="flex justify-center items-center w-full">
                          <p
                            className="mx-2 text-center w-full"
                            style={{
                              fontFamily: 'montserrat',
                              fontWeight: '700',
                              fontSize: '16px',
                              color: '#1B2E3D',
                              lineHeight: '20px'
                            }}>{`${feat.title}`.toUpperCase()}</p>
                        </div>
                        <img className="flex justify-end w-44 rounded-t-xl mx-2" src={feat.img} alt="" />
                      </div>
                      <div className="h-1 mx-2" style={{ backgroundColor: '#1B2E3D' }}></div>

                      <div className="mb-10">
                        <div
                          className="flex m-2"
                          style={{ fontFamily: 'montserrat', fontWeight: '700', lineHeight: '10px' }}
                        >
                          <p className="flex justify-end w-28" style={{
                            fontSize: '10px',
                            color: '#8A5C36',
                          }}>INGREDIENTS</p>

                          <p className="flex ml-4 w-full" style={{
                            fontSize: '8px',
                          }}>{feat.ingredients}</p>
                        </div>

                        <div
                          className="flex m-2"
                          style={{ fontFamily: 'montserrat', fontWeight: '700', lineHeight: '10px' }}
                        >
                          <p className="flex justify-end w-28" style={{
                            fontSize: '10px',
                            color: '#8A5C36',
                          }}>ALLERGIES</p>
                          <p className="flex ml-4 w-full" style={{
                            fontSize: '8px',
                          }}>{feat.allergies}</p>
                        </div>

                        <div
                          className="flex m-2"
                          style={{ fontFamily: 'montserrat', fontWeight: '700', lineHeight: '10px' }}
                        >
                          <p className="flex justify-end w-28" style={{
                            fontSize: '10px',
                            color: '#8A5C36',
                          }}>NOTES</p>
                          <p className="flex ml-4 w-full" style={{
                            fontSize: '8px',
                          }}>{feat.notes}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex justify-center dark:text-gray-200 border-b border-gray-600 rounded-b-xl p-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              <DownloadBtn onClick={onButtonClick} />
              <AddToQueueBtn />
            </div>

          </div>

        </div>

        <div className="mx-3 w-full md:max-w-384">
          <div className="">
            <ContainerHeader title="Food Catalog" />
            <div
              className="h-200 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              {foodFeatures.map((feat) => (
                <div key={feat.id} className="flex justify-center text-gray-200 gap-3">
                  <FoodFeatureCatalogBtn onClick={() => { setFeatureObj(feat) }} title={feat.title} subtitle={feat.subtitle} />
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

          <div className="mt-2">
            <ContainerHeader title="Beverage Catalog" />
            <div
              className="h-200 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              {drinkFeatures.map((feat) => (
                <div key={feat.id} className="flex justify-center text-gray-200 gap-3">
                  <CatalogBtn onClick={() => { setFeatureObj(feat) }} info={feat.title} />
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
          <AddFeature />
        </div>
      </div>
    </div>
  )
}

export default PotomacFeatureEditor