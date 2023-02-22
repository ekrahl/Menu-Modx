import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { menus } from '../../data/dummy';
import { FaEdit, FaDownload } from 'react-icons/fa';

const Features = () => {

  const { currentColor, currentMode } = useStateContext();
  const update = moment().subtract(1, 'days').calendar();


  return (
    <>
      <div className="flex justify-center">
        <div className="mt-24 mx-3 lg:mt-10 2xl:mx-8 max-w-1200">
          <div className="flex justify-center bg-specials3 bg-cover bg-center rounded-xl py-20 2xl:p-32">
            <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">FEATURES</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1 mt-1">
            {menus.map((menu) => (
              <div key={menu.id} className="">
                <p
                  className="font-semibold text-xl text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-8"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>{menu.location}</p>
                
                <img className="border-b border-gray-600" src={menu.featureMenu} alt="" />

                <div
                  className="text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                  <div className="flex justify-center space-x-2">
                    <Link to={menu.featureEditPath}>
                      <button
                        className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                        style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                        title="Edit"><FaEdit />
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick=""
                      className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                      style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}
                      title="Download"><FaDownload />
                    </button>
                  </div>
                  <div className="pt-4 pl-2">
                    <p className="text-sm text-gray-600 font-semibold">Last Updated: {update}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default Features