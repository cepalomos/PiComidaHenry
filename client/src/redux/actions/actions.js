import axios from "axios";

export const RECETAS_REQUEST = "RECETAS_REQUEST";
export const RECETAS_SUCCESS = "RECETAS_SUCCESS";
export const RECETAS_FAILURE = "RECETAS_FAULIRE";

export const recetasRequest = () =>{
  return {
    type: RECETAS_REQUEST
  }
};

export const recetasSuccess = (recetas) =>{
  return {
    type: RECETAS_SUCCESS,
    payload: recetas
  }
};

export const recetasFailure = (error) =>{
  return {
    type: RECETAS_FAILURE,
    payload: 'falla en el servidor'
  }
};

const peticionRecetas =(url) =>{
  return (dispatch) => {
    dispatch(recetasRequest());
    axios.get(url).then(res=>{
      dispatch(recetasSuccess(res.data))
    }).catch(error=>{
      dispatch(recetasFailure(error))
    })
  }
}

export default peticionRecetas;