import { useState } from 'react'
import axios from 'axios'
import { ContainerHeader, AddItemBtn } from '../..'

const AddOyster = () => {

  const [oyster, setOyster] = useState({
    name: "",
    location: "",
    size: "",
    desc: "",
    price: null,
  })

  const handleChange = (e) => {
    setOyster(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/oysters", oyster)
      e.target.reset()
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="flex flex-col text-gray-200 mt-1">
      <ContainerHeader title="Add Item to Catalog" />
      <div className="text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
        style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex justify-center m-2">
            <input
              className="text-slate-900 pl-1 rounded-md w-full"
              onChange={handleChange}
              type="text"
              name="name"
              required
              placeholder="Oyster Name"
              maxLength="35"
            />
          </div>
          <div className="flex justify-center m-2">
            <input
              className="text-slate-900 pl-1 rounded-md w-full"
              onChange={handleChange}
              type="text"
              name="location"
              required
              placeholder="Oyster Location"
              maxLength="40"
            />
          </div>
          <div className="flex m-2 gap-4">
            <div className='flex gap-1'>
              <input
                className="text-slate-900 pl-1 rounded-md"
                onChange={handleChange}
                type="radio"
                value="sm"
                name="size"
                required
                placeholder="Oyster Size"
              />
              <p className="">sm</p>
            </div>
            <div className='flex gap-2'>
              <input
                className="text-slate-900 pl-1 rounded-md"
                onChange={handleChange}
                type="radio"
                value="sm/md"
                name="size"
                required
                placeholder="Oyster Size"
              />
              <p className="">sm/md</p>
            </div>
            <div className='flex gap-2'>
              <input
                className="text-slate-900 pl-1 rounded-md"
                onChange={handleChange}
                type="radio"
                value="md"
                name="size"
                required
                placeholder="Oyster Size"
              />
              <p className="">md</p>
            </div>
            <div className='flex gap-2'>
              <input
                className="text-slate-900 pl-1 rounded-md"
                onChange={handleChange}
                type="radio"
                value="md/lg"
                name="size"
                required
                placeholder="Oyster Size"
              />
              <p className="">md/lg</p>
            </div>
            <div className='flex gap-2'>
              <input
                className="text-slate-900 pl-1 rounded-md"
                onChange={handleChange}
                type="radio"
                value="lg"
                name="size"
                required
                placeholder="Oyster Size"
              />
              <p className="">lg</p>
            </div>
          </div>
          <div className="flex justify-center m-2">
            <textarea
              className="text-slate-900 pl-1 rounded-md w-full"
              onChange={handleChange}
              type="text"
              name="desc"
              required
              placeholder="Oyster Description"
              maxLength="52"
            />
          </div>
          <div className="flex justify-center m-2">
            <input
              className="text-slate-900 pl-1 rounded-md w-full"
              onChange={handleChange}
              type="text"
              name="price"
              required
              placeholder="Oyster Price"
              maxLength="3"
            />
          </div>
          <div className="flex justify-center">
            <AddItemBtn title="Add Item"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddOyster