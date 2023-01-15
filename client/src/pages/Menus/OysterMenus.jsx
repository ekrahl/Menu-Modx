import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { images } from '../../data';
import { locations, menus } from '../../data/dummy';
import { FaEdit, FaDownload } from 'react-icons/fa';

// import { Link } from 'react-router-dom';

const OysterMenus = () => {

  const { currentColor, currentMode } = useStateContext();
  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-24 mx-3 lg:mt-10 2xl:mx-8 max-w-1500">
          <div className="flex justify-center bg-oysters2 bg-cover bg-bottom rounded-xl py-32 2xl:p-40" >
            <p className="font-semibold text-4xl 2xl:text-6xl text-gray-200 bg-black bg-opacity-50 rounded-xl p-2">OYSTERS</p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-1 mt-1">

            <div className="">
              <p
                className="font-semibold text-xl text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>Leesburg</p>
              <img className="border-b border-gray-600" src={menus[0].oysterMenu} alt="" />
              <div 
                className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <Link to='/leesburgoystereditor'>
                  <button
                    className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaEdit /></button>
                </Link>
                <button
                  type="button"
                  onClick=""
                  className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaDownload /></button>
              </div>
            </div>

            <div className="">
              <p
                className="font-semibold text-xl text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>Middleburg</p>
              <img className="border-b border-gray-600" src={menus[1].oysterMenu} alt="" />
              <div 
                className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <Link to='/middleburgoystereditor'>
                  <button
                    className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaEdit /></button>
                </Link>
                <button
                  type="button"
                  onClick=""
                  className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaDownload /></button>
              </div>
            </div>

            <div className="">
              <p
                className="font-semibold text-xl text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>NoMa</p>
              <img className="border-b border-gray-600" src={menus[2].oysterMenu} alt="" />
              <div 
                className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <Link to='/nomaoystereditor'>
                  <button
                    className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaEdit /></button>
                </Link>
                <button
                  type="button"
                  onClick=""
                  className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaDownload /></button>
              </div>
            </div>

            <div className="">
              <p
                className="font-semibold text-xl text-gray-200 border-b border-gray-600 rounded-t-xl text-center p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}>Potomac</p>
              <img className="border-b border-gray-600" src={menus[3].oysterMenu} alt="" />
              <div 
                className="flex flex-wrap lg:flex-nowrap justify-center space-x-2 text-gray-400 border-b border-gray-600 rounded-b-xl p-4"
                style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
                <Link to='/potomacoystereditor'>
                  <button
                    className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                    style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaEdit /></button>
                </Link>
                <button
                  type="button"
                  onClick=""
                  className="sm:text-lg xl:text-2xl border border-gray-600 rounded-md px-12 py-2"
                  style={{ backgroundImage: `linear-gradient(to top, #191919, ${currentColor})` }}><FaDownload /></button>
              </div>
            </div>

          </div>

        </div>
      </div>






    </>
  )
}

export default OysterMenus;