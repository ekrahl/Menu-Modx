import { ContainerHeader, AddItemBtn } from '../..'

const AddOyster = () => {

  return (
    <div className="flex flex-col text-gray-200 mt-2">
      <ContainerHeader title="Add Item to Catalog" />
      <div className="text-gray-200 border-b border-gray-600 rounded-b-xl px-2 py-2"
        style={{ backgroundImage: `linear-gradient(to top, #191919, #2f2f2f` }}>
        <form onSubmit='' className="mt-6">
          <div className="flex justify-center m-2">
            <input
              className="pl-1 rounded-md w-full"
              onChange=''
              value=''
              type="text"
              name="name"
              placeholder="Oyster Name"
            />
          </div>
          <div className="flex justify-center m-2">
            <input
              className="pl-1 rounded-md w-full"
              onChange=''
              value=''
              type="text"
              name="location"
              placeholder="Oyster Location"
            />
          </div>
          <div className="flex justify-center m-2">
            <input
              className="pl-1 rounded-md w-full"
              onChange=''
              value=''
              type="text"
              name="size"
              placeholder="Oyster Size"
            />
          </div>
          <div className="flex justify-center m-2">
            <textarea
              className="pl-1 rounded-md w-full"
              onChange=''
              value=''
              type="text"
              name="description"
              placeholder="Oyster Description"
            />
          </div>
          <div className="flex justify-center m-2">
            <input
              className="pl-1 rounded-md w-full"
              onChange=''
              value=''
              type="text"
              name="price"
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