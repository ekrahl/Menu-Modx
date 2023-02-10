import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOyster, updateOyster } from '../../actions/oysters';


const OysterForm = ({ currentId, setCurrentId }) => {
  const [oysterData, setOysterData] = useState({ name: '', location: '', size: '', description: '', price: '' });
  const oyster = useSelector((state) => currentId ? state.oysters.find((name) => name.id === currentId) : null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (oyster) setOysterData(oyster);
  }, [oyster])

  const clear = () => {
    setCurrentId(0);
    setOysterData({ name: '', location: '', size: '', description: '', price: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createOyster(oysterData));
      clear();
    } else {
      dispatch(updateOyster(currentId, oysterData));
      clear();
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex justify-center m-2">
        <input
          className="pl-1 rounded-md"
          onChange={(e) => setOysterData({ ...oysterData, name: e.target.value })}
          value={oysterData.name}
          type="text"
          name="name"
          placeholder="Oyster Name"
        />
      </div>
      <div className="flex justify-center m-2">
        <input
          className="pl-1 rounded-md"
          onChange={(e) => setOysterData({ ...oysterData, location: e.target.value })}
          value={oysterData.location}
          type="text"
          name="location"
          placeholder="Oyster Location"
        />
      </div>
      <div className="flex justify-center m-2">
        <input
          className="pl-1 rounded-md"
          onChange={(e) => setOysterData({ ...oysterData, size: e.target.value })}
          value={oysterData.size}
          type="text"
          name="size"
          placeholder="Oyster Size"
        />
      </div>
      <div className="flex justify-center m-2">
        <input
          className="pl-1 rounded-md"
          onChange={(e) => setOysterData({ ...oysterData, description: e.target.value })}
          value={oysterData.description}
          type="text"
          name="description"
          placeholder="Oyster Description"
        />
      </div>
      <div className="flex justify-center m-2">
        <input
          className="pl-1 rounded-md"
          onChange={(e) => setOysterData({ ...oysterData, price: e.target.value })}
          value={oysterData.price}
          type="text"
          name="price"
          placeholder="Oyster Price"
        />
      </div>
    </form>
  )
}

export default OysterForm