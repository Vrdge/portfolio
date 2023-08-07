const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"











let initialState = {
    initialized: true
}


const AppReducer= (state = initialState, action)=>{
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized:true
            }
            default:
                return state
    }
}



export default AppReducer