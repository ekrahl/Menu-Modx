import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { ContainerHeader, AddItemBtn } from '../..'

const EditOyster = ({ id }) => {
  console.log("OYSTER ID:" + id)
  const [oyster, setOyster] = useState({
    name: "",
    location: "",
    size: "",
    desc: "",
    price: null,
  })
  
  const [oysters, setOysters] = useState([])
  useEffect(() => {
      const fetchAllOysters = async () => {
          try {
              const res = await axios.get("http://localhost:8800/oysters")
              setOysters(res.data)
          } catch (err) {
              console.log(err)
          }
      }
      fetchAllOysters()
  }, [oysters])

  // const location = useLocation()
  // const oysterId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setOyster(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/oysters/" + id, oyster)
      // e.target.reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col text-gray-200 mt-1">
      <ContainerHeader title="Edit Item" />
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
            />
          </div>
          <div className="flex justify-center">
            <AddItemBtn title="Edit Item"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditOyster