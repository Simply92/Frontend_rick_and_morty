import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions/types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state= initialState, {type, payload}) => {
    switch(type){
        // case ADD_FAV:
        // return{
        //     ...state,
        //     allCharacters: [...state.allCharacters, payload],
        //     myFavorites: [...state.allCharacters, payload] 
        // }
        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
        // case REMOVE_FAV:
        //     const filtro = state.myFavorites.filter((char)=> char.id !== Number(payload))
        //     return{
        //         ...state,
        //         myFavorites: filtro
        //     } 
        case REMOVE_FAV:
      return { ...state, myFavorites: payload };
        case FILTER:
            const filtroGer = state.allCharacters.filter((char) => char.gender === payload)
            return{
                ...state,
                myFavorites: filtroGer
            }
        case ORDER:
            const filtro2 = state.allCharacters
            const reset = filtro2.sort((a,b) => {
                if(payload === 'A'){
                    return a.id - b.id
                }else if (payload === 'D'){
                    return b.id - a.id
                }else{
                    return 0;
                }
            })
            return{
                ...state,
                myFavorites: reset
            }
        case RESET:
            return{
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return {...state}
    }
}

export default rootReducer;