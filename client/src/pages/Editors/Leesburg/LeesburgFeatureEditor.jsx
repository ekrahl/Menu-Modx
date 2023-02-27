import { useState, useEffect, useCallback, useRef } from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { FeatureForm, LocationHeader, MenuQueue } from '../../../components'
import { images } from '../../../data'
import { foodFeatures, drinkFeatures } from '../../../data/dummy'
import * as htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'
import { FaDownload, FaEdit, FaTrash } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'

var node = document.getElementById('leesburgFeatureMenu')

htmlToImage.toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });

const LeesburgFeatureEditor = () => {
  const { currentColor, currentMode } = useStateContext();

  const gradientColor = { backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, pixelRatio: 10, width: 384, height: 576 })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = "leesburg-feature-menu.png"
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
      <LocationHeader location={"LEESBURG"} />
      <div className="flex flex-wrap md:flex-nowrap justify-center mt-6 gap-1">
        <div className="flex flex-wrap justify-center">
          <div>

            <p
              className="font-semibold text-xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-4"
              style={gradientColor}>
              Build Features Menu
            </p>

            <div className="w-384 h-576 relative z-1" ref={ref} id="leesburgFeatureMenu">

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
              <button
                className="flex justify-center font-semibold rounded-md border border-gray-600 w-20 p-2 m-2"
                onClick={onButtonClick}
                style={gradientColor}
                title="Download"><FaDownload /></button>
              <button
                className="flex justify-center font-semibold rounded-md border border-gray-600 w-20 p-2 m-2"
                style={gradientColor}
                title="Add to Queue"><BiAddToQueue /></button>
            </div>

          </div>

        </div>

        <div className="mx-3 w-full md:max-w-384">
          <div className="">
            <p
              className="font-semibold text-xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-4"
              style={gradientColor}>
              Food Catalog
            </p>
            <div
              className="h-200 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              {foodFeatures.map((feat) => (
                <div key={feat.id} className="flex justify-center text-gray-200 gap-3">
                  <div
                    className="flex font-semibold border border-gray-400 rounded-2xl m-1 p-2 cursor-pointer"
                    style={gradientColor}
                    onClick={() => { setFeatureObj(feat) }}>
                    <div className="w-60 flex justify-center">
                      <p className="">{feat.title}</p>
                    </div>
                  </div>
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
            <p
              className="font-semibold text-xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-4"
              style={gradientColor}>
              Beverage Catalog
            </p>
            <div
              className="h-200 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              {drinkFeatures.map((feat) => (
                <div key={feat.id} className="flex justify-center text-gray-200 gap-3">
                  <div
                    className="flex font-semibold border border-gray-400 rounded-2xl m-1 p-2 cursor-pointer"
                    style={gradientColor}
                    onClick={() => { setFeatureObj(feat) }}>
                    <div className="w-60 flex justify-center">
                      <p className="">{feat.title}</p>
                    </div>
                  </div>
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

          <div className="flex flex-col text-gray-200 mt-2">
            <p
              className="font-semibold text-xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-4"
              style={gradientColor}>
              Add Item to Catalog
            </p>
            <div
              className="text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              <FeatureForm />
              <div className="flex justify-center">
                <button
                  className="font-semibold text-sm rounded-md border border-gray-600 p-2 m-3"
                  style={gradientColor}>Add Item</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LeesburgFeatureEditor