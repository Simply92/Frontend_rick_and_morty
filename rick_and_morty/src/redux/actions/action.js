import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from "./types"

export const addFav = (char) => {
    return{
        type: ADD_FAV,
        payload: char
    }
}

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id
    }   
}

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) =>{
    return{
        type: ORDER,
        payload: orden
    }
}

export const resetFav = () => {
    return {
      type: RESET,
    };
  };