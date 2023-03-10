import { useState } from 'react'
import axios from 'axios'
import { ContainerHeader, AddItemBtn } from '../..'

const AddOyster = () => {

  const [data, setData] = useState({
    name: "",
    location: "",
    size: "",
    description: "",
    price: ""
  })

  const [error, setError] = useState("")

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:8080/api/oysters"
      const { data: res } = await axios.post(url, data)
      console.log(res.message)
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
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
              value={data.name}
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
              value={data.location}
              type="text"
              name="location"
              required
              placeholder="Oyster Location"
            />
          </div>
          <div className="flex justify-center m-2">
            <input
              className="text-slate-900 pl-1 rounded-md w-full"
              onChange={handleChange}
              value={data.size}
              type="text"
              name="size"
              required
              placeholder="Oyster Size"
            />
          </div>
          <div className="flex justify-center m-2">
            <textarea
              className="text-slate-900 pl-1 rounded-md w-full"
              onChange={handleChange}
              value={data.description}
              type="text"
              name="description"
              required
              placeholder="Oyster Description"
            />
          </div>
          <div className="flex justify-center m-2">
            <input
              className="text-slate-900 pl-1 rounded-md w-full"
              onChange={handleChange}
              value={data.price}
              type="text"
              name="price"
              required
              placeholder="Oyster Price"
            />
          </div>
        </form>
        <div className="flex justify-center">
          <AddItemBtn />
        </div>
      </div>
    </div>
  )
}

export default AddOyster