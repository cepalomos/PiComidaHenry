import { RECETAS_FAILURE, RECETAS_REQUEST, RECETAS_SUCCESS } from "../actions/actions";


const initialState = {
    loading: false,
    recetas:[],
    error:''
}

const recetasUrl = (state = initialState, action) =>{
    switch(action.type){
        case RECETAS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RECETAS_SUCCESS:
            return {
                loading:false,
                recetas: action.payload,
                error: ''
            }
        case RECETAS_FAILURE:
            return{
                loading: false,
                recetas: [],
                error: action.payload
            }

        default: return state;
    }
}

export default recetasUrl;