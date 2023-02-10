import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (oysters = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...oysters, action.payload];
    case UPDATE:
      return oysters.map((oyster) => (oyster._id === action.payload._id ? action.payload : oyster));
    case DELETE:
      return oysters.filter((oyster) => oyster._id !== action.payload);
    default:
      return oysters;
  }
};