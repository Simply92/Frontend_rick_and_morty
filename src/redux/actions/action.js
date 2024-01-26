import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from "./types"
import axios from "axios";
const url = process.env.REACT_APP_BACK_URL;

export const addFav = (character, user) => {
  const endpoint = `${url}/rickandmorty/fav`
  return async (dispatch) => {
    try {
      const res = await axios.post(endpoint, { ...character, user })
      console.log(res, "se cargo exitosamente")
    } catch (error) {}
  };
};

export const getFav = (user) => {
  const endpoint = `${url}/rickandmorty/getFav/${user}`
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint)
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {}
  };
};

export const removeFav = (id) => {
  const endpoint = `${url}/rickandmorty/fav/` + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {}
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const resetFav = () => {
    return {
      type: RESET,
    };
  };