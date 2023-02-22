import { useState, useEffect, useCallback, useRef } from 'react'
import { useStateContext } from '../../../contexts/ContextProvider'
import { FeatureForm, LocationHeader } from '../../../components'
import { images } from '../../../data'
import { foodFeatures, drinkFeatures, menus } from '../../../data/dummy'
import * as htmlToImage from 'html-to-image'
import { toPng } from 'html-to-image'
import { FaDownload, FaEdit, FaDelete } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'

var node = document.getElementById('middleburgFeatureMenu')


htmlToImage.toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });

const MiddleburgFeatureEditor = () => {
  const { currentColor, currentMode } = useStateContext();

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, pixelRatio: 10 })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = "middleburg-feature-menu.png"
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
      <LocationHeader location={"MIDDLEBURG"} />
      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-6 gap-1">
        <div className="flex flex-wrap justify-center">
          <div className="">
            <p
              className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
              style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
              Build Features Menu
            </p>
            <div className="w-816 h-1056 relative z-1" ref={ref} id="middleburgFeatureMenu">
              <img src={images.feature_sheet_template2} alt="feature menu template" className="absolute z-2" />
              <div className="pt-16">
                {feature.map((feat, index) => (
                  <div key={feat.id} className="flex justify-center relative z-3 font-semibold mt-24">
                    <div className="cursor-pointer" onClick={() => { handleDelete(index) }}>
                      <div className="flex" >
                        <div className="flex justify-center items-center w-96">
                          <p className="text-center w-full" style={{
                            fontFamily: 'montserrat',
                            fontWeight: '700',
                            fontSize: '30px',
                            color: '#1B2E3D',
                            lineHeight: '40px'
                          }}>{`${feat.title}`.toUpperCase()}</p>
                        </div>
                        <img className="w-96 rounded-t-2xl" src={feat.img} alt="" />
                      </div>
                      <div className="w-full h-2" style={{ backgroundColor: '#1B2E3D' }}></div>
                      <div className="">
                        <div className="flex justify-left m-2">
                          <p className="flex" style={{
                            fontFamily: 'montserrat',
                            fontWeight: '700',
                            fontSize: '16px',
                            color: '#8A5C36',
                            lineHeight: '20px'
                          }}>INGREDIENTS</p>
                          <p className="flex ml-4 w-full" style={{
                            fontFamily: 'montserrat',
                            fontWeight: '700',
                            fontSize: '12px',
                            lineHeight: '20px'
                          }}>{feat.ingredients}</p>
                        </div>
                        <div className="flex justify-left m-2">
                          <p className="flex" style={{
                            fontFamily: 'montserrat', fontWeight: '700', fontSize: '16px', color: '#8A5C36',
                            lineHeight: '20px'
                          }}>ALLERGIES</p>
                          <p className="flex ml-4 w-full" style={{
                            fontFamily: 'montserrat',
                            fontWeight: '700',
                            fontSize: '12px', lineHeight: '20px'
                          }}>{feat.allergies}</p>
                        </div>
                        <div className="flex justify-left m-2">
                          <p className="flex" style={{
                            fontFamily: 'montserrat',
                            fontWeight: '700',
                            fontSize: '16px',
                            color: '#8A5C36',
                            lineHeight: '20px'
                          }}>NOTES</p>
                          <p className="flex ml-4 w-full" style={{
                            fontFamily: 'montserrat',
                            fontWeight: '700',
                            fontSize: '12px', lineHeight: '20px'
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
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                title="Download"><FaDownload /></button>
              <button
                className="flex justify-center font-semibold rounded-md border border-gray-600 w-20 p-2 m-2"
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                title="Add to Queue"><BiAddToQueue /></button>
            </div>

          </div>
        </div>

        <div className="mx-3">
          <div className="">
            <p
              className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
              style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
              Food Catalog
            </p>
            <div
              className="h-250 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              {foodFeatures.map((feat, index) => (
                <div key={feat.id} className="flex text-lg text-gray-200 gap-2">
                  <div
                    className="flex border border-gray-400 rounded-2xl m-1 p-1 cursor-pointer"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, #1b2d3e)` }}
                    onClick={() => { setFeatureObj(feat) }}>
                    <div className="w-60 flex justify-center">
                      <p className="">{feat.title}</p>
                    </div>
                  </div>
                  <button type="button" onClick="" >
                    <FaEdit size="1.5rem" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p
              className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
              style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
              Beverage Catalog
            </p>
            <div
              className="h-250 overflow-auto text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              {drinkFeatures.map((feat, index) => (
                <div key={feat.id} className="flex text-lg text-gray-200 gap-2">
                  <div
                    className="flex border border-gray-400 rounded-2xl m-1 p-1 cursor-pointer"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, #1b2d3e)` }}
                    onClick={() => { setFeatureObj(feat) }}>
                    <div className="w-60 flex justify-center">
                      <p className="">{feat.title}</p>
                    </div>
                  </div>
                  <button type="button" onClick="" >
                    <FaEdit size="1.5rem" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col text-gray-200 mt-6">
            <p
              className="font-semibold text-2xl text-gray-200 text-center border-b border-gray-600 rounded-t-xl p-6"
              style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>
              Add Item to Catalog
            </p>
            <div
              className="text-gray-200 border-b border-gray-600 rounded-b-xl px-6 py-2"
              style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
              <FeatureForm />
              <div className="flex justify-center">
                <button
                  className="font-semibold rounded-md border border-gray-600 w-36 p-2 m-3"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>Add Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleburgFeatureEditor