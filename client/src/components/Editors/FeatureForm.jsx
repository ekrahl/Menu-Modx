import React from 'react'

const FeatureForm = () => {
  return (
    <form onSubmit="" className="mt-2" action="/action_page.php">

      <div className="flex justify-center m-2 pb-3">
        <div className="flex">
          <input
            className="rounded-md"
            onChange=""
            value=""
            type="radio"
            name="name"
            placeholder=""
          />
          <p className="ml-2 font-semibold">Food</p>
          <input
            className="ml-8 rounded-md"
            onChange=""
            value=""
            type="radio"
            name="name"
            placeholder=""
          />
          <p className="ml-2 font-semibold">Beverage</p>
        </div>
      </div>

      <div className="flex justify-center m-2">
        <input
          className="pl-1 rounded-md w-full"
          onChange=""
          value=""
          type="text"
          name="title"
          placeholder="Title"
        />
      </div>
      <div className="flex justify-center m-2">
        <textarea
          className="pl-1 rounded-md w-full"
          onChange=""
          value=""
          type="text"
          name="ingredients"
          placeholder="Ingredients"
        />
      </div>
      <div className="flex justify-center m-2">
        <textarea
          className="pl-1 rounded-md w-full"
          onChange=""
          value=""
          type="text"
          name="allergies"
          placeholder="Allergies"
        />
      </div>
      <div className="flex justify-center m-2">
        <textarea
          className="pl-1 rounded-md w-full"
          onChange=""
          value=""
          type="text"
          name="notes"
          placeholder="Notes"
        />
      </div>

      <p className="text-center text-sm font-semibold p-2">Upload Image</p>
      <div className="flex justify-center text-xs m-2">
        <input className="rounded-md" type="file" id="myFile" name="filename" />
      </div>

    </form>
  )
}

export default FeatureForm